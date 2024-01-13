/**
 * An array of routes that should be accessible to the public.
 * Not required authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that used for authentication.
 * these routes redirect user to the protected route after authentication.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for the authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
