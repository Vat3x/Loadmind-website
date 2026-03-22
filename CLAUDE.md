# LoadMind Website — Project Notes

## Architecture

- **Framework:** React 19 + Vite 7 + TypeScript + Tailwind v4
- **Hosting:** Netlify (auto-deploy on push to `main`)
- **Auth:** Supabase Auth (email/password)
- **Repo:** `https://github.com/Vat3x/Loadmind-website.git`
- **i18n:** English (`en.ts`) + Georgian (`ge.ts`), accessed via `useLanguage()` hook

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Router setup, AuthProvider + LanguageProvider wrappers |
| `src/lib/supabase.ts` | Supabase client (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) |
| `src/auth/AuthContext.tsx` | Auth provider (user, session, signIn, signUp, signOut) |
| `src/hooks/useAuth.ts` | Auth hook |
| `src/components/layout/StickyHeader.tsx` | Header with conditional auth UI |
| `src/components/layout/PageLayout.tsx` | Layout with header + footer for marketing pages |
| `src/pages/Login.tsx` | Login page |
| `src/pages/Register.tsx` | Registration page (display name, email, password) |
| `src/pages/App3D.tsx` | 3D Planner iframe (full screen, no floating button) |
| `src/pages/AppTracking.tsx` | Tracker iframe (full screen, floating back button) |
| `src/pages/Contact.tsx` | Contact form → admin API |

## Auth Flow

1. User visits site → sees "Log In" / "Sign Up" in header
2. Registers → profile auto-created in Supabase via DB trigger → welcome email via Resend → redirect to homepage
3. Logged in → header shows user name + "Open App" + sign out icon
4. "Open App" → `/3d` → full-screen iframe of 3D planner
5. 3D planner logo links back to `load-mind.com` via `target="_top"`

## Supabase Setup

- **Project:** `vwjuitpjuffuhhukxfiy`
- **`profiles` table:** auto-created on signup via `handle_new_user` trigger
- **Columns:** id, email, display_name, plan (free/paid), daily_count, daily_limit (3), status (active/blocked)
- **RLS:** users can read/update own profile only
- **Welcome email:** sent via `pg_net` calling Resend API from the trigger
- **Email confirmation:** disabled (immediate access)

## Environment Variables

```
VITE_SUPABASE_URL=https://vwjuitpjuffuhhukxfiy.supabase.co
VITE_SUPABASE_ANON_KEY=<set in .env.local and Netlify>
```

## Changes Log

### User Registration & Login (March 2026)

**New files:** `src/lib/supabase.ts`, `src/auth/AuthContext.tsx`, `src/hooks/useAuth.ts`, `src/pages/Login.tsx`, `src/pages/Register.tsx`

**Modified files:** `src/App.tsx`, `src/components/layout/StickyHeader.tsx`, `src/i18n/en.ts`, `src/i18n/ge.ts`

**What was added:**
- Supabase Auth integration (email/password signup + login)
- Login and Register pages matching existing dark theme
- StickyHeader shows Login/Sign Up when logged out, user name + Open App + Sign Out when logged in
- i18n translations for all auth UI in English and Georgian
- AuthProvider wrapping the app

**Dependencies added:** `@supabase/supabase-js`

### App Navigation (March 2026)

**Modified files:** `src/pages/App3D.tsx`, `src/pages/AppTracking.tsx`

**What was changed:**
- 3D planner: logo links back to `load-mind.com` (modified in separate `loadmind` repo)
- 3D planner: removed floating back button (logo handles navigation)
- Tracker: centered floating "LoadMind" back button
- Login/Register redirect to homepage (not `/3d`) so users can browse the site

### Contact Form — API Integration (March 2026)

**File changed:** `src/pages/Contact.tsx`

**What was changed:**
- Replaced `mailto:` with `fetch()` to admin panel API
- Form submissions go to `POST https://admin-panel-be9fc.web.app/api/public/demo-request`
- Shows loading, success (checkmark), and error states
