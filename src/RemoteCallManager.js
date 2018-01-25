import * as _ from 'underscore'

function parseResponse(res) {
  return res.json();
}  

export default class RemoteCallManager {

  constructor() {
    this._endpoint = 'https://api.github.com/users/';
  }

  get endpoint() {
    return this._endpoint;
  }

  /**
   * @param username
   * @return {Promise<Response>}
   */
  findGithubUser(username) {
    if (!_.isString(username)) {
      throw new Error('username must be a string: ' + username)
    }
    return fetch(this.endpoint + username)
      .then(parseResponse)
  }

}