import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseClient } from "../client/baseClient";
import { apiUrl, DEFAULT_CLIENT_OPTIONS } from "../utils/constants";
import { version } from "../../package.json";
import { RateLimitQueue } from "./restUtils/rateLimitQueue";
import { ApiDiscoveryResponse } from "../utils/types";

/**
 * Custom error class for Stoat API errors.
 */
export class StoatAPIError extends Error {
  /** The HTTP status code of the error. */
  status?: number;
  /** The error data returned by the API. */
  data?: any;

  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.name = "StoatAPIError";
    this.status = status;
    this.data = data;
  }
}

export class RestClient {
  private rateLimitQueue = new RateLimitQueue();
  constructor(private readonly client: BaseClient) {}

  /**
   * Helper function to handle API requests.
   * @param method The HTTP method (GET, POST, PATCH, PUT, DELETE).
   * @param url The URL path (without base URL).
   * @param body The request body (if applicable).
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  private async request<T>(
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    url: string,
    body?: any,
    query?: Record<string, string | number>,
    retry?: boolean,
  ): Promise<T> {
    try {
      if (!this.client.token) throw new Error("Token is required");

      const baseUrl = this.client.options.rest?.instanceURL ?? apiUrl;
      const config: AxiosRequestConfig & { url: string } = {
        method,
        url: `${baseUrl}${url}` as const,
        params: query,
        data: body,
        headers: {
          "X-Session-Token": this.client.token,
          "User-Agent": `StoatSelfbot.js/${version}`,
        },
      };

      if (process.env.NODE_ENV === "DEV") {
        console.info("Request Body:", body);
        console.info("Request Query:", query);
        console.info("Request URL:", config.url);
      }

      // Use the rate limit queue for all requests
      const response: AxiosResponse<T> =
        await this.rateLimitQueue.request<T>(config);
      return response.data;
    } catch (error) {
      if (retry) throw error; // FIX: was `throw typeof error` which threw "object" string

      if (error instanceof AxiosError) {
        if (error.status && (error.status === 429 || error.status >= 500)) {
          return this.retryRequest<T>(0, method, url, body, query);
        }
        if (error.status) {
          if (process.env.NODE_ENV === "DEV") {
            console.error("Error details:", error);
            console.error("Error response data:", error.response?.data);
            console.error("Error request config:", error.config);
            console.error("Error message:", error.message);
            console.error("Error URL:", url);
          }
          throw new StoatAPIError(
            `API call failed with status ${error.status}: ${error.response?.statusText ?? error.message}`,
            error.status,
            error.response?.data,
          );
        }
      }
      throw new StoatAPIError(
        `API call failed: ${error instanceof Error ? error.message : error}`,
      );
    }
  }

  /**
   * Fetches the API configuration (discovery endpoint).
   * Sets the CDN URL, WebSocket URL, and voice options on the client.
   *
   * @throws {Error} If the configuration cannot be fetched.
   */
  async getConfig(): Promise<ApiDiscoveryResponse> {
    try {
      const baseUrl = this.client.options.rest?.instanceURL ?? apiUrl;
      const response: AxiosResponse<ApiDiscoveryResponse> = await axios.get(
        `${baseUrl}/`,
      );
      const config = response.data;
      this.client.options.rest = {
        ...this.client.options.rest,
        instanceCDNURL: config.features.autumn.url,
      };
      this.client.options.ws = {
        ...this.client.options.ws,
        instanceURL: config.ws,
      };
      this.client.voiceOptions = {
        ...config.features.livekit,
      };
      return config;
    } catch (error) {
      // FIX: was process.exit(1) — now throws properly
      throw new StoatAPIError(
        `Failed to fetch configuration: ${error instanceof Error ? error.message : error}`,
      );
    }
  }

  private async retryRequest<T>(
    attempt: number = 0,
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    url: string,
    body?: any,
    query?: Record<string, string | number>,
  ): Promise<T> {
    if (attempt >= (this.client.options.rest?.retries ?? 3)) {
      throw new StoatAPIError("Max retries reached");
    }

    try {
      return await this.request<T>(method, url, body, query, true);
    } catch (error) {
      this.client.debug(`Attempt ${attempt + 1} failed: ${error}`);
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          this.client.options.rest?.timeout ??
            DEFAULT_CLIENT_OPTIONS.rest?.timeout,
        ),
      );
      return this.retryRequest<T>(attempt + 1, method, url, body, query);
    }
  }

  /**
   * GET request.
   * @param url The URL path for the request.
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  async get<T>(
    url: string,
    query?: Record<string, string | number>,
  ): Promise<T> {
    return this.request<T>("GET", url, undefined, query);
  }

  /**
   * POST request.
   * @param url The URL path for the request.
   * @param body The request body.
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  async post<T>(
    url: string,
    body?: any,
    query?: Record<string, string | number>,
  ): Promise<T> {
    return this.request<T>("POST", url, body, query);
  }

  /**
   * PATCH request.
   * @param url The URL path for the request.
   * @param body The request body.
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  async patch<T>(
    url: string,
    body?: any,
    query?: Record<string, string | number>,
  ): Promise<T> {
    return this.request<T>("PATCH", url, body, query);
  }

  /**
   * PUT request.
   * @param url The URL path for the request.
   * @param body The request body.
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  async put<T>(
    url: string,
    body?: any,
    query?: Record<string, string | number>,
  ): Promise<T> {
    return this.request<T>("PUT", url, body, query);
  }

  /**
   * DELETE request.
   * @param url The URL path for the request.
   * @param body The request body (optional).
   * @param query Query parameters (if applicable).
   * @returns The API response.
   */
  async delete<T>(
    url: string,
    body?: any,
    query?: Record<string, string | number>,
  ): Promise<T> {
    return this.request<T>("DELETE", url, body, query);
  }
}
