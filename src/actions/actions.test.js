import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {ACTIONS, findGithubUser} from './index'

const middlewares = [ thunk ],
  mockStore = configureMockStore(middlewares)

describe('Action creators', function() {

  let store

  beforeEach(function () {
    global.fetch = () => Promise.resolve({ json: () => Promise.resolve('success') })
    store = mockStore({})
  })

  it('gets a response from fetch and dispatches action', function() {
    return store.dispatch(findGithubUser('someUsername'))
      .then(() =>
        expect(store.getActions())
          .toEqual([ { type: ACTIONS.SET_USER_SEARCH, userResponse: 'success' } ]))
  })

})