# clicker
a basic clicker game template; IN DEVELOPMENT.

## Vercel access keys

The access form validates keys through the server-side `api/verify-access.js`
function. Add one or more of these environment variables in the Vercel project
settings (and select the environments where each should be available):

- `ACCESS_KEY_BASIC`
- `ACCESS_KEY_PREMIUM`
- `ACCESS_KEY_ADMIN`

Each configured variable is a valid key for the tier in its name. Use unique,
high-entropy values, and do not put the keys in browser JavaScript or commit
them to the repository. Redeploy after changing the variables.

The verified tier is returned to the browser as `basic`, `premium`, or `admin`
and set on the game container as `data-access-tier`. This is a UI gate for the
static game, not protection for sensitive data or privileged operations: the
page and its game logic are delivered to the browser and can be bypassed.
Any protected content or action must be enforced by a server-side endpoint
that independently verifies authorization.
