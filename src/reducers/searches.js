import { ACTIONS } from '../actions'
import SearchType from '../components/SearchTypeHelper'

export const INITIAL_STATE = {
 currentSearch: null,
 usernameInput: '',
 repoInput: '',
 searchType: SearchType.NONE,
}
Object.freeze(INITIAL_STATE)

/**
 * @param state {{
 *  currentSearch: object?,
 *  searchType: string,
 *  usernameInput: string,
 *  repoInput: string,
 *  searchException: Error?
 * }}
 * @param action {*}
 * @return {*}
 */
export default (state = INITIAL_STATE, action) => {
  const { type } = action || {},
    newState = (update) => ({ ...state, ...update })
  switch (type) {
    case ACTIONS.SET_USER_SEARCH:
      return newState({ currentSearch: action.userResponse })
    case ACTIONS.SET_REPO_SEARCH:
      return newState({ currentSearch: action.repoResponse })
    case ACTIONS.SET_SEARCH_TYPE:
      return newState({
        searchType: action.searchType, currentSearch: null,
        searchException: null, usernameInput: '', repoInput: ''
      })
    case ACTIONS.SET_INPUT_VALUE:
      return newState({
        [action.searchType === SearchType.REPO
          ? 'repoInput'
          : 'usernameInput']: action.value
      })
    case ACTIONS.SET_ERROR_MESSAGE:
      return newState({ searchException: action.exception, currentSearch: null })
    default:
      return state
  }
}