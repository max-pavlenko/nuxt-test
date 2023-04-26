const middleware = {}

middleware['checkAuth'] = require('..\\middleware\\checkAuth.ts')
middleware['checkAuth'] = middleware['checkAuth'].default || middleware['checkAuth']

middleware['clearAuthError'] = require('..\\middleware\\clearAuthError.ts')
middleware['clearAuthError'] = middleware['clearAuthError'].default || middleware['clearAuthError']

export default middleware
