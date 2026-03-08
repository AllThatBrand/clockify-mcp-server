# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.1.1] - 2026-03-08

### Security

- **CRITICAL** Patched `form-data` transitive dependency — unsafe random boundary generation
  ([GHSA-52f5-9888-hmc6](https://github.com/advisories/GHSA-52f5-9888-hmc6))
- **HIGH** Upgraded `@modelcontextprotocol/sdk` from `1.12.1` to `1.27.1`
  - Fixed ReDoS vulnerability
    ([GHSA-...](https://github.com/advisories?query=MCP+TypeScript+SDK+ReDoS))
  - Fixed cross-client data leak via shared server/transport instance reuse
  - Fixed missing DNS rebinding protection
- **HIGH** Upgraded `axios` from `1.8.4` to `1.13.6`
  - Fixed DoS via missing data size check on response
    ([GHSA-...](https://github.com/advisories?query=axios+data+size))
  - Fixed DoS via `__proto__` key injection in `mergeConfig`
- **HIGH** Patched `minimatch` transitive dependency — multiple ReDoS vectors
  ([GHSA-3ppc-4f35-3m26](https://github.com/advisories/GHSA-3ppc-4f35-3m26),
  [GHSA-7r86-cg39-jmmj](https://github.com/advisories/GHSA-7r86-cg39-jmmj),
  [GHSA-23c5-xmqv-rm74](https://github.com/advisories/GHSA-23c5-xmqv-rm74))
- **MODERATE** Patched `qs` transitive dependency — `arrayLimit` bypass via comma and bracket notation
  ([GHSA-w7fw-mjwx-w883](https://github.com/advisories/GHSA-w7fw-mjwx-w883),
  [GHSA-6rw7-vpxm-498p](https://github.com/advisories/GHSA-6rw7-vpxm-498p))
- **MODERATE** Patched `tmp` transitive dependency — arbitrary file/directory write via symlink
  ([GHSA-52f5-9888-hmc6](https://github.com/advisories/GHSA-52f5-9888-hmc6))

Result: 0 vulnerabilities (was 17: 1 critical, 3 high, 7 moderate, 6 low)

## [1.1.0] - 2026-03-02

### Added

- `create-tag` tool for creating workspace tags
- Pagination support on all list endpoints to fetch beyond the 50-item API default

### Fixed

- Pagination now correctly fetches all pages across workspaces, projects, entries, users, and tags

## [1.0.2] - 2026-02-04

### Added

- `taskId` and `tagIds` fields on time entry create and edit tools
- `list-tasks` tool for listing tasks within a project

### Fixed

- Edit entry handler now fetches and merges all required fields before updating
- Undefined values are filtered from API request bodies to avoid sending nulls to Clockify

## [1.0.1] - 2026-01-09

### Added

- `get-tags` tool for listing workspace tags
- Enhanced time entry response with additional fields: `projectName`, `taskName`, `tags`, `tagIds`, `timeInterval`, `billable`

## [1.0.0] - 2025-07-06

### Added

- Initial release
- `get-workspaces` tool
- `get-projects` tool
- `get-current-user` tool
- `create-time-entry` tool
- `list-time-entries` tool
- `edit-time-entry` tool
- `delete-time-entry` tool
- Smithery deployment support
