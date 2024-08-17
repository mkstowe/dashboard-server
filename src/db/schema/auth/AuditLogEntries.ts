// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for auth.audit_log_entries */
export type AuditLogEntriesId = string & { __brand: 'AuditLogEntriesId' };

/**
 * Represents the table auth.audit_log_entries
 * Auth: Audit trail for user actions.
 */
export default interface AuditLogEntriesTable {
  id: ColumnType<AuditLogEntriesId, AuditLogEntriesId, AuditLogEntriesId>;

  instance_id: ColumnType<string | null, string | null, string | null>;

  payload: ColumnType<unknown | null, unknown | null, unknown | null>;

  created_at: ColumnType<Date | null, Date | string | null, Date | string | null>;

  ip_address: ColumnType<string, string | undefined, string>;
}

export type AuditLogEntries = Selectable<AuditLogEntriesTable>;

export type NewAuditLogEntries = Insertable<AuditLogEntriesTable>;

export type AuditLogEntriesUpdate = Updateable<AuditLogEntriesTable>;
