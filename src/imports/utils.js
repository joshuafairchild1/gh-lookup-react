/**
 * @param res {Response}
 * @return {Promise<JSON>}
 */
export function parseResponse(res) {
  if (typeof res.json !== 'function') {
    throw new Error('must be a response object' + res)
  }
  if (res.status !== 200) {
    throw new Error(`request failed - ${res.status}: ${res.statusText} ${res}`)
  }
  return res.json()
}

export const ENDPOINTS = {
  USER_SEARCH: 'https://api.github.com/users/',
  REPO_SEARCH: 'https://api.github.com/search/repositories?q=',
  REPO_DETAIL: 'https://api.github.com/repos/'
}
Object.freeze(ENDPOINTS)
