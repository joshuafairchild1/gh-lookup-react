import reducer from './searches'
import {setGithubRepo, setGithubUser, setInputValue, setSearchType} from "../actions";
import {SearchType} from "../components/Search";

describe('Searches reducer', function() {

  it('returns initial state', function () {
    expect(reducer(undefined)).toEqual({})
  });

  it('changes search type', function() {
    expect(reducer(undefined, setSearchType(SearchType.USER)))
      .toEqual({
        searchType: SearchType.USER,
        repoInput: '', usernameInput: '',
        currentSearch: null
      });
  });

  it('sets input values', function () {
    const event1 = { target: { value: 'username'} },
      event2 = { target: { value: 'repoName' } };
    expect(reducer(undefined, setInputValue(event1, SearchType.USER)))
      .toEqual({ usernameInput: 'username' });

    expect(reducer(undefined, setInputValue(event2, SearchType.REPO)))
      .toEqual({ repoInput: 'repoName' })
  });

  it('sets search results', function () {
    const user = { username: 'someUser' },
      repo = { name: 'some-repo-name' };
    expect(reducer(undefined, setGithubUser(user)))
      .toEqual({ currentSearch: user });

    expect(reducer(undefined, setGithubRepo(repo)))
      .toEqual({ currentSearch: repo });
  })

});