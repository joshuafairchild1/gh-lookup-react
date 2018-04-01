import RepoSearch from './RepoSearch'
import SelectSearchType from './SelectSearchType'
import UserSearch from './UserSearch'

const USER = 'USER',
  REPO = 'REPO',
  NONE = 'NONE',
  SEARCH_SUBCOMPONENTS = {
    [USER]: UserSearch,
    [REPO]: RepoSearch,
    [NONE]: SelectSearchType
  }
Object.freeze(SEARCH_SUBCOMPONENTS)

export default class SearchType {

  /**
   * Find and call the Search sub-component corresponding to the {props.searchType}
   * @param searchType {string}
   * @param props {*}
   * @return {*}
   */
  static componentFor({ searchType, ...props }) {
    if (!SearchType[searchType]) {
      throw new Error('no component corresponding to search type:' + searchType)
    }
    return SEARCH_SUBCOMPONENTS[searchType](props)
  }

}

SearchType.USER = USER
SearchType.REPO = REPO
SearchType.NONE = NONE