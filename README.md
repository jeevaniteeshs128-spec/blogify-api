## Blogify API

Security demo for Blogify with JWTs in HttpOnly cookies, auth protection, and post ownership checks.

### Demo Accounts

- User A: `usera@blogify.com` / `password123`
- User B: `userb@blogify.com` / `password123`

### Key Routes

- `POST /api/v1/auth/login` - sets the JWT cookie
- `POST /api/v1/auth/logout` - clears the JWT cookie
- `GET /api/v1/auth/me` - verifies the cookie and returns the current user
- `GET /api/v1/posts` - lists posts
- `DELETE /api/v1/posts/:id` - requires auth and post ownership

### Expected Security Behavior

- Delete without logging in -> `401`
- Log in as User A and delete User B's post -> `403`
- Log in as User A and delete User A's post -> `200`
