/**
 * Error codes used throughout the Stoat selfbot library.
 * Inspired by discord.js error patterns.
 */
export enum ErrorCodes {
  INVALID_TOKEN = "INVALID_TOKEN",
  INVALID_TYPE = "INVALID_TYPE",
  INVALID_ID = "INVALID_ID",
  TOKEN_REQUIRED = "TOKEN_REQUIRED",
  WS_CONNECTION_FAILED = "WS_CONNECTION_FAILED",
  NOT_READY = "NOT_READY",
  NOT_CONNECTED = "NOT_CONNECTED",
  ALREADY_CONNECTED = "ALREADY_CONNECTED",
  CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND",
  SERVER_NOT_FOUND = "SERVER_NOT_FOUND",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  MESSAGE_NOT_FOUND = "MESSAGE_NOT_FOUND",
  PERMISSION_MISSING = "PERMISSION_MISSING",
  RATE_LIMITED = "RATE_LIMITED",
  API_ERROR = "API_ERROR",
}

/**
 * Generates a human-readable error message for a given error code.
 * @param code The error code.
 * @param args Additional arguments used to format the message.
 */
function messageForCode(code: ErrorCodes, ...args: any[]): string {
  switch (code) {
    case ErrorCodes.INVALID_TOKEN:
      return `The provided token is invalid.${args[0] ? ` (${args[0]})` : ""}`;
    case ErrorCodes.INVALID_TYPE:
      return `Expected ${args[0] ?? "a valid type"} but received ${typeof args[1] === "undefined" ? "undefined" : args[1]}.`;
    case ErrorCodes.INVALID_ID:
      return `The provided ID is invalid.${args[0] ? ` (${args[0]})` : ""}`;
    case ErrorCodes.TOKEN_REQUIRED:
      return "A token is required to connect to the API.";
    case ErrorCodes.WS_CONNECTION_FAILED:
      return `WebSocket connection failed.${args[0] ? ` ${args[0]}` : ""}`;
    case ErrorCodes.NOT_READY:
      return "The client is not ready yet. Wait for the 'ready' event.";
    case ErrorCodes.NOT_CONNECTED:
      return "The client is not connected to the gateway.";
    case ErrorCodes.ALREADY_CONNECTED:
      return "The client is already connected.";
    case ErrorCodes.CHANNEL_NOT_FOUND:
      return `Channel not found.${args[0] ? ` ID: ${args[0]}` : ""}`;
    case ErrorCodes.SERVER_NOT_FOUND:
      return `Server not found.${args[0] ? ` ID: ${args[0]}` : ""}`;
    case ErrorCodes.USER_NOT_FOUND:
      return `User not found.${args[0] ? ` ID: ${args[0]}` : ""}`;
    case ErrorCodes.MESSAGE_NOT_FOUND:
      return `Message not found.${args[0] ? ` ID: ${args[0]}` : ""}`;
    case ErrorCodes.PERMISSION_MISSING:
      return `Missing permission.${args[0] ? ` Required: ${args[0]}` : ""}`;
    case ErrorCodes.RATE_LIMITED:
      return `You are being rate limited.${args[0] ? ` Retry after: ${args[0]}ms` : ""}`;
    case ErrorCodes.API_ERROR:
      return `An API error occurred.${args[0] ? ` ${args[0]}` : ""}`;
    default:
      return `Unknown error code: ${code as string}`;
  }
}

/**
 * Custom error class for the Stoat selfbot library.
 * Inspired by discord.js's DiscordAPIError pattern.
 */
export class StoatError extends Error {
  /** The error code associated with this error. */
  code: ErrorCodes;

  constructor(code: ErrorCodes, ...args: any[]) {
    super(messageForCode(code, ...args));
    this.code = code;
    this.name = "StoatError";
  }
}
