import { ACTIONS } from '../actions';
import {SearchType} from "../components/Search";

export default (state = {}, action) => {
  const { type } = action || {},
    newState = (update) => ({ ...state, ...update });
  switch (type) {
    case ACTIONS.SET_USER_SEARCH:
      return newState({ currentSearch: action.userResponse });
    case ACTIONS.SET_REPO_SEARCH:
      return newState({ currentSearch: action.repoResponse });
    case ACTIONS.SET_SEARCH_TYPE:
      return newState({
        searchType: action.searchType, currentSearch: null,
        usernameInput: '', repoInput: ''
      });
    case ACTIONS.SET_INPUT_VALUE:
      return newState({
        [action.inputType === SearchType.REPO
          ? 'repoInput'
          : 'usernameInput']: action.event.target.value
      });
    default:
      return state;
  }
}