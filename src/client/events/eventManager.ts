import { EventMap } from "./index";
import { Event as CustomEvent } from "./event";
import type { Client } from "../client";
import { WSEvents } from "../../utils/constants";

/**
 * Manages the registration and retrieval of events for the client.
 * Maps WebSocket event type strings to their handler classes.
 * @private
 */
export class EventManager {
  /** A map of registered events, keyed by their WS event type name. */
  #events = new Map<string, CustomEvent>();

  /**
   * Creates a new EventManager instance.
   *
   * @param {Client} client - The client instance.
   */
  constructor(protected readonly client: Client) {
    for (const [key, EventClass] of Object.entries(EventMap)) {
      // FIX: Check ignoreEvents against the EventMap key (the WS event name)
      if (this.client.options.ignoreEvents?.includes(key)) continue;
      this.register(key, EventClass as new (client: Client) => CustomEvent);
    }
  }

  /**
   * Registers an event with the manager.
   *
   * @param wsEventName The WS event type name to register under.
   * @param Event The event class to register.
   */
  register(wsEventName: string, Event: new (client: Client) => CustomEvent): void {
    this.#events.set(wsEventName, new Event(this.client));
  }

  /**
   * Retrieves a registered event by its WS event type name.
   *
   * @param {string} name - The WS event type name (e.g., "Message", "ChannelCreate").
   * @returns {CustomEvent | null} The event instance, or `null` if not found.
   */
  get(name: string): CustomEvent | null {
    return this.#events.get(name) ?? null;
  }
}
