import type { Client } from "../client/client";

/**
 * Represents an MFA method available to the user.
 */
export interface MFAMethod {
  type: string;
  secret?: string;
}

/**
 * Represents an MFA ticket generated for authentication.
 */
export interface MFATicket {
  ticket: string;
  allowed_methods: string[];
}

/**
 * Manages multi-factor authentication (MFA) for the authenticated user.
 * Provides methods to check MFA status, manage TOTP, and handle recovery codes.
 *
 * @example
 * ```typescript
 * // Check MFA status
 * const status = await client.mfa.getStatus();
 *
 * // Get available MFA methods
 * const methods = await client.mfa.getMethods();
 *
 * // Enable TOTP
 * await client.mfa.enableTOTP("secret-key", "123456");
 *
 * // Get recovery codes
 * const codes = await client.mfa.getRecoveryCodes();
 * console.log("Recovery codes:", codes);
 * ```
 */
export class MFAManager {
  readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Gets the current MFA status for the authenticated user.
   *
   * @returns The MFA status data.
   */
  async getStatus(): Promise<any> {
    return this.client.api.get("/auth/mfa/");
  }

  /**
   * Gets the available MFA methods for the authenticated user.
   *
   * @returns An array of MFA methods.
   */
  async getMethods(): Promise<MFAMethod[]> {
    const data: any = await this.client.api.get("/auth/mfa/methods");
    return Array.isArray(data) ? data : [];
  }

  /**
   * Generates an MFA ticket using a TOTP code.
   *
   * @param code - The TOTP code from the authenticator app.
   * @returns The generated MFA ticket.
   */
  async generateTicket(code: string): Promise<MFATicket> {
    const data: any = await this.client.api.post("/auth/mfa/ticket", {
      code,
    });
    return data as MFATicket;
  }

  /**
   * Enables TOTP-based MFA for the authenticated user.
   *
   * @param secret - The TOTP secret key.
   * @param code - The current TOTP code to verify.
   */
  async enableTOTP(secret: string, code: string): Promise<void> {
    await this.client.api.post("/auth/mfa/totp", {
      secret,
      code,
    });
  }

  /**
   * Disables TOTP-based MFA for the authenticated user.
   *
   * @param code - The current TOTP code to confirm the action.
   */
  async disableTOTP(code: string): Promise<void> {
    await this.client.api.delete("/auth/mfa/totp", {
      code,
    });
  }

  /**
   * Gets the recovery codes for the authenticated user's MFA.
   *
   * @returns An array of recovery code strings.
   */
  async getRecoveryCodes(): Promise<string[]> {
    const data: any = await this.client.api.get("/auth/mfa/recovery");
    return Array.isArray(data) ? data : [];
  }
}
