# IP A5 — Frontend

Web frontend for the **IP A5** project: an administration panel for managing user accounts, Samba shares and VPN entries through a REST API. Built with React, TypeScript and Vite.

The app lets an authenticated user create, view, update and delete three kinds of resources — **Accounts**, **Samba** entries and **VPN** entries — and handles registration, login and password recovery.

## Tech stack

| Area | Library |
| --- | --- |
| UI | React 18, TypeScript |
| Build / dev server | Vite 5 |
| Routing | React Router 6 |
| State | Redux Toolkit + React Redux |
| HTTP | Axios (with a bearer-token interceptor) |
| Styling | styled-components (with a typed theme) |
| Animations | Framer Motion |
| Alerts / dialogs | SweetAlert2 |
| Icons | react-icons-kit |
| Code quality | ESLint, Prettier |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm
- Access to the IP A5 backend API (see [Backend](#backend))

### Install and run

```bash
git clone https://github.com/d3nis01/ip-a5-front.git
cd ip-a5-front
npm install
npm run dev
```

Vite prints the URL to open in the terminal.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check with `tsc`, then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on all `.ts`/`.tsx` files (fails on any warning) |

## Backend

The frontend talks to a versioned REST API (`/api/v1`). The base URL is set by `API_BASE_URL` in `src/api/api.ts`; update it to point the app at your backend. Requests time out after 10 seconds.

### Endpoints used

| Resource | Method | Path |
| --- | --- | --- |
| Auth | `POST` | `/auth/login` |
| | `POST` | `/auth/register` |
| | `GET` | `/auth/current-user-details` |
| | `POST` | `/auth/forgot-password` |
| | `POST` | `/auth/reset-password` |
| Accounts | `POST` | `/accounts` |
| | `GET` / `PUT` / `DELETE` | `/accounts/{id}` |
| | `GET` | `/accounts/mail/{matricol}` |
| | `PUT` | `/accounts/mail/{uuid}` |
| Samba | `GET` / `POST` | `/sambas` |
| | `GET` / `PUT` / `DELETE` | `/sambas/{id}` |
| VPN | `GET` / `POST` | `/vpns` |
| | `GET` / `PUT` / `DELETE` | `/vpns/{id}` |

### Authentication

After login, the access token is stored in `localStorage` under the key `access-token`. An Axios request interceptor attaches it to every call as `Authorization: Bearer <token>`. On startup, `autoLogin()` restores the session from the stored token; `logout()` clears it.

## Features and routes

Every page is reachable from the sidebar. Auth pages (login, register, password recovery) render in a full-screen layout without the sidebar and header.

| Route | Page |
| --- | --- |
| `/` | Samba entries list (home) |
| `/register` | Register a new user |
| `/login` | Log in |
| `/forgot-password-form` | Request a password reset code by email |
| `/reset-password` | Set a new password using the reset code |
| `/account-get` | Look up an account by ID |
| `/account-post` | Create an account (username, password, email, matricol) |
| `/account-update` | Update an account's username, password and email |
| `/account-delete` | Delete an account |
| `/account-email-variants-get` | Look up generated email variants for a matricol |
| `/samba-get-all` | List all Samba entries |
| `/samba-get` | Look up a Samba entry by ID |
| `/samba-post` | Create a Samba entry (description, IPv4 address) |
| `/samba-update` | Update a Samba entry |
| `/samba-delete` | Delete a Samba entry |
| `/vpn-get-all` | List all VPN entries |
| `/vpn-get` | Look up a VPN entry by ID |
| `/vpn-post` | Create a VPN entry (description, IPv4 address) |
| `/vpn-update` | Update a VPN entry |
| `/vpn-delete` | Delete a VPN entry |

Success and error feedback for every API call is shown through SweetAlert2 dialogs; 401/403 responses show a dedicated authorization error.

## Project structure

```
src/
├── api/            Axios instance and auth interceptor
├── components/     Shared UI: header, sidebar (menu items), mobile modal
├── hooks/          Typed Redux hooks, click-away, async-on-mount, window listeners
├── layout/         Main layout (sidebar + header) and auth layout
├── mappers/        Map raw API responses to app types (account, samba, vpn)
├── modules/        One folder per page (login, register, account-*, samba-*, vpn-*, …)
├── router/         Route constants and the AppRouter
├── services/       API calls per resource, auth, alerts, localStorage wrapper
├── store/          Redux store, actions, reducers, selectors (app + auth slices)
├── theme/          Default theme, fonts, CSS reset
├── types/          TypeScript interfaces for API objects, requests and auth
├── utils/          CustomError, input validators
├── App.tsx
└── main.tsx
```

Each page module keeps its component and its `styles.ts` (styled-components) side by side.

### Path aliases

Configured in `vite.config.ts` and `tsconfig.paths.json`:

- `@app/*` → `src/*`
- `@public/*` → `public/*`

## Code style

Prettier is configured in `.prettierrc` (single quotes, trailing commas, wide print width). ESLint uses the TypeScript and React Hooks plugins; run `npm run lint` before committing.

## Known gaps

- The API base URL is hard-coded; there is no `.env` support yet.
- `/account-email-variants-update` has a page component and route constant but is not registered in `AppRouter`, so it isn't reachable.
- The recovery-code routes (`/send-recovery-code`, `/check-recovery-code`) are defined as constants but have no pages.
