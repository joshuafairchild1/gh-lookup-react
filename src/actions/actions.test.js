import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {ACTIONS, findGithubUser} from './index'

const middlewares = [ thunk ],
  mockStore = configureMockStore(middlewares)

describe('Action creators', function() {

  let store, mockEvent

  class SyntheticEvent { preventDefault() {} }

  beforeEach(function () {
    global.fetch = function() {
      return Promise.resolve({ json: () => Promise.resolve('success') })
    }
    mockEvent = new SyntheticEvent()
    store = mockStore({})
  })

  it('gets a response from fetch and dispatches action', function() {
    return findGithubUser(mockEvent, 'someUsername', store.dispatch)
      .then(() =>
        expect(store.getActions())
          .toEqual([ { type: ACTIONS.SET_USER_SEARCH, userResponse: 'success' } ]))
  })

})