import reducer from './searches'
import {
  setGithubRepo, setGithubUser, setInputValue, setSearchType
} from '../actions'
import SearchType from '../imports/SearchType'

describe('Searches reducer', function() {

  it('returns initial state', function () {
    expect(reducer(undefined)).toEqual({})
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
      .toEqual({ usernameInput: 'username' })

    expect(reducer(undefined, setInputValue('repoName', SearchType.REPO)))
      .toEqual({ repoInput: 'repoName' })
  })

  it('sets search results', function () {
    const user = { username: 'someUser' },
      repo = { name: 'some-repo-name' }
    expect(reducer(undefined, setGithubUser(user)))
      .toEqual({ currentSearch: user })

    expect(reducer(undefined, setGithubRepo(repo)))
      .toEqual({ currentSearch: repo })
  })

  it('does not mutate state', function () {
    const state = reducer(undefined, setGithubUser({ username: 'someUser' }))
    reducer(state, setGithubUser({ username: 'differentUsername' }))
    expect(state).toEqual({ currentSearch: { username: 'someUser' } })
  })

})