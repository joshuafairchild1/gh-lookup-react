import { parseResponse, ENDPOINTS } from '../imports/utils'

export const ACTIONS = {
  SET_USER_SEARCH: 'SET_USER_SEARCH',
  SET_SEARCH_TYPE: 'SET_SEARCH_TYPE',
  SET_REPO_SEARCH: 'SET_REPO_SEARCH',
  SET_INPUT_VALUE: 'INPUT_INPUT_VALUE',
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE'
}
Object.freeze(ACTIONS)

/**
 * @param searchType {string} among values of {SearchType}
 * @return {{type: string, searchType: string}}
 */
export const setSearchType = searchType =>
  ({ type: ACTIONS.SET_SEARCH_TYPE, searchType })

/**
 * @param value {string}
 * @param type {string} among values of {SearchType}
 * @return {{type: string, value: string, searchType: string}}
 */
export const setInputValue = (value, type) =>
  ({ type: ACTIONS.SET_INPUT_VALUE, value, searchType: type })

/**
 * @param userResponse {*}
 * @return {{type: string, userResponse: *}}
 */
export const setGithubUser = userResponse =>
  ({ type: ACTIONS.SET_USER_SEARCH, userResponse })

/**
 * @param repoResponse {*}
 * @return {{type: string, repoResponse: *}}
 */
export const setGithubRepo = repoResponse =>
  ({ type: ACTIONS.SET_REPO_SEARCH, repoResponse })

export const setErrorMessage = exception =>
  ({ type: ACTIONS.SET_ERROR_MESSAGE, exception })

/**
 * @param event {SyntheticEvent}
 * @param username {string}
 * @param dispatch {function}
 */
export const findGithubUser = (event, username, dispatch) => {
  event.preventDefault()
  return username && fetch(ENDPOINTS.USER_SEARCH + username)
    .then(res => asyncDispatch(res, dispatch, setGithubUser))
    .catch(ex => dispatch(setErrorMessage(ex)))
}

/**
 * @param event {SyntheticEvent}
 * @param repoName {string}
 * @param username {string}
 * @param dispatch {function}
 */
export const findGithubRepo = (event, repoName, username, dispatch) => {
  event.preventDefault()
  return repoName && fetch(!!username
    ? ENDPOINTS.REPO_DETAIL + `${username}/${repoName}`
    : ENDPOINTS.REPO_SEARCH + repoName
  )
    .then(res => asyncDispatch(res, dispatch, setGithubRepo))
    .catch(ex => dispatch(setErrorMessage(ex)))
}

/**
 * @param response {Response}
 * @param dispatch {function}
 * @param actionCreator {function}
 */
const asyncDispatch = (response, dispatch, actionCreator) =>
  parseResponse(response).then(data => dispatch(actionCreator(data)))