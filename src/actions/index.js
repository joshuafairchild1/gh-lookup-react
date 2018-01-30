import { parseResponse, ENDPOINTS } from "../imports/utils"

export const ACTIONS = {
  SET_USER_SEARCH: 'SET_USER_SEARCH',
  SET_SEARCH_TYPE: 'SET_SEARCH_TYPE',
  SET_REPO_SEARCH: 'SET_REPO_SEARCH',
  SET_INPUT_VALUE: 'INPUT_INPUT_VALUE'
}
Object.freeze(ACTIONS)

const {
  SET_USER_SEARCH, SET_SEARCH_TYPE, SET_REPO_SEARCH, SET_INPUT_VALUE
} = ACTIONS

export const setSearchType = searchType =>
  ({ type: SET_SEARCH_TYPE, searchType })

export const setInputValue = (value, type) =>
  ({ type: SET_INPUT_VALUE, value, inputType: type })

export const setGithubUser = userResponse =>
  ({ type: SET_USER_SEARCH, userResponse })

export const setGithubRepo = repoResponse =>
  ({ type: SET_REPO_SEARCH, repoResponse })

export const findGithubUser = username =>
  dispatch =>
    fetch(ENDPOINTS.USER_SEARCH + username)
      .then(res => asyncDispatch(res, dispatch, setGithubUser))

export const findGithubRepo = (repoName, username) =>
  dispatch =>
    fetch(!!username
      ? ENDPOINTS.REPO_DETAIL + `${username}/${repoName}`
      : ENDPOINTS.REPO_SEARCH + repoName
    )
      .then(res => asyncDispatch(res, dispatch, setGithubRepo))

const asyncDispatch = (response, dispatch, actionCreator) =>
  parseResponse(response)
    .then(data => dispatch(actionCreator(data)))