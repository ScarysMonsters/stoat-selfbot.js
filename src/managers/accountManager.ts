import type { Client } from "../client/client";

/**
 * Manages the authenticated user's account settings.
 * Provides methods for email changes, password changes, account deletion,
 * disabling, password resets, and email verification.
 *
 * @example
 * ```typescript
 * // Change email
 * await client.account.changeEmail("new@example.com", "currentPassword");
 *
 * // Change password
 * await client.account.changePassword("oldPassword", "newPassword");
 *
 * // Resend verification email
 * await client.account.resendVerification();
 *
 * // Verify account with code
 * await client.account.verify("verification-code");
 * ```
 */
export class AccountManager {
  readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Changes the authenticated user's email address.
   *
   * @param newEmail - The new email address.
   * @param currentPassword - The current password for confirmation.
   */
  async changeEmail(newEmail: string, currentPassword: string): Promise<void> {
    await this.client.api.patch("/auth/account/change/email", {
      email: newEmail,
      password: currentPassword,
    });
  }

  /**
   * Changes the authenticated user's password.
   *
   * @param currentPassword - The current password.
   * @param newPassword - The new password to set.
   */
  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    await this.client.api.patch("/auth/account/change/password", {
      password: currentPassword,
      new_password: newPassword,
    });
  }

  /**
   * Deletes the authenticated user's account.
   * This action is irreversible.
   *
   * @param password - The current password for confirmation.
   */
  async delete(password: string): Promise<void> {
    await this.client.api.post("/auth/account/delete", {
      password,
    });
  }

  /**
   * Disables the authenticated user's account.
   * The account can be re-enabled later.
   */
  async disable(): Promise<void> {
    await this.client.api.patch("/auth/account/disable");
  }

  /**
   * Requests a password reset email.
   *
   * @param email - The email address associated with the account.
   */
  async resetPassword(email: string): Promise<void> {
    await this.client.api.post("/auth/account/reset_password", {
      email,
    });
  }

  /**
   * Resends the account verification email.
   */
  async resendVerification(): Promise<void> {
    await this.client.api.post("/auth/account/reverify");
  }

  /**
   * Verifies the account using a verification code.
   *
   * @param code - The verification code received via email.
   */
  async verify(code: string): Promise<void> {
    await this.client.api.post(`/auth/account/verify/${code}`);
  }
}
