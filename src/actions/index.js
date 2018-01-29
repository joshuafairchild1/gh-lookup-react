import { parseResponse, ENDPOINTS } from "../utils";

export const ACTIONS = {
  SET_USER_SEARCH: 'SET_USER_SEARCH',
  SET_SEARCH_TYPE: 'SET_SEARCH_TYPE',
  SET_REPO_SEARCH: 'SET_REPO_SEARCH',
  SET_INPUT_VALUE: 'INPUT_INPUT_VALUE'
};
Object.freeze(ACTIONS);

const {
  SET_USER_SEARCH, SET_SEARCH_TYPE, SET_REPO_SEARCH, SET_INPUT_VALUE
} = ACTIONS;

class Action {
  constructor(type, payload) {
    Object.assign(this, payload, { type })
  }
}

export const setSearchType = searchType =>
    new Action(SET_SEARCH_TYPE, { searchType }),
  setInputValue = (event, type) =>
    new Action(SET_INPUT_VALUE, { event, inputType: type }),
  setGithubUser = userResponse => new Action(SET_SEARCH_TYPE, { userResponse }),
  setGithubRepo = repoResponse => new Action(SET_REPO_SEARCH, { repoResponse });

export const findGithubUser = username =>
  dispatch =>
    fetch(ENDPOINTS.USER_SEARCH + username)
      .then(parseResponse)
      .then(userResponse => dispatch(setGithubUser(userResponse)));

export const findGithubRepo = (repoName, username) =>
  dispatch =>
    fetch(!!username
      ? ENDPOINTS.REPO_DETAIL + `${username}/${repoName}`
      : ENDPOINTS.REPO_SEARCH + repoName
    )
      .then(parseResponse)
      .then(repoResponse => dispatch(setGithubRepo(repoResponse)));

