import React, { Component } from 'react';
import { SearchType } from './Search';

const { USER, REPO } = SearchType;

class ChangeSearch extends Component {

  render() {
    const { searchType } = this.props;
    return searchType === null
      ? <div> </div>
      : (
          <div>
            <button onClick={() => this.props.setSearchType(searchType === REPO ? USER : REPO)}>
              Search GitHub {searchType === REPO ? 'Users' : 'Repositories'}
            </button>
          </div>
        )

  }
}

export default ChangeSearch;
