function parseResponse(res) {
  return res.json();
}

function isString(string) {
  return typeof string === 'string';
}

export default class RemoteCallTransport {

  constructor() {
    this._userSearch = 'https://api.github.com/users/';
    this._repoSearch = 'https://api.github.com/search/repositories?q=';
    this._repoDetailSearch = 'https://api.github.com/repos/';
  }

  /**
   * @param username
   * @return {Promise<Response>}
   */
  findGithubUser(username) {
    if (!isString(username)) {
      throw new Error('username must be a string: ' + username);
    }
    return fetch(this._userSearch + username)
      .then(parseResponse);
  }

  /**
   * @param repository {string}
   * @param username {string|null}
   */
  findGithubRepo(repository, username = null) {
    if (!isString(repository)) {
      throw new Error('repository name must be a string: ' + repository);
    }
    if (username && !isString(username)) {
      throw new Error('username must be either null or a string');
    }
    return fetch(!!username
      ? this._repoDetailSearch + `${username}/${repository}`
      : this._repoSearch + repository
    ).then(parseResponse);
  }

}