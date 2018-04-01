import reducer, {INITIAL_STATE} from './searches'
import {
  setGithubRepo, setGithubUser, setInputValue, setSearchType
} from '../actions'
import SearchType from '../components/SearchTypeHelper'

describe('Searches reducer', function() {

  it('returns initial state', function () {
    expect(reducer(undefined)).toEqual(INITIAL_STATE)
  })

  it('changes search type', function() {
    expect(reducer(undefined, setSearchType(SearchType.USER)))
      .toEqual({
        searchType: SearchType.USER,
        repoInput: '', usernameInput: '',
        currentSearch: null
      })
  })

  it('sets input values', function () {
    expect(reducer(undefined, setInputValue('username', SearchType.USER)))
      .toEqual(Object.assign({}, INITIAL_STATE, { usernameInput: 'username' }))

    expect(reducer(undefined, setInputValue('repoName', SearchType.REPO)))
      .toEqual(Object.assign({}, INITIAL_STATE, { repoInput: 'repoName' }))
  })

  it('sets search results', function () {
    const user = { username: 'someUser' },
      repo = { name: 'some-repo-name' }
    expect(reducer(undefined, setGithubUser(user)))
      .toEqual(Object.assign({}, INITIAL_STATE, { currentSearch: user }))

    expect(reducer(undefined, setGithubRepo(repo)))
      .toEqual(Object.assign({}, INITIAL_STATE, { currentSearch: repo }))
  })

  it('does not mutate state', function () {
    const state = reducer(undefined, setGithubUser({ username: 'someUser' }))
    reducer(state, setGithubUser({ username: 'differentUsername' }))
    expect(state).toEqual(Object.assign(
      {}, INITIAL_STATE, { currentSearch: { username: 'someUser' } }))
  })

})