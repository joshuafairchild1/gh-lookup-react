import React from 'react';
import { SearchType } from './Search';
import { connect } from 'react-redux';
import {setSearchType} from "../actions";

const { USER, REPO } = SearchType;

const ChangeSearch = ({ searchType, ...props }) =>
  searchType === null ? null :
    <div>
      <button onClick={() =>
        props.changeSearch(searchType === REPO ? USER : REPO)}>
        Search GitHub {searchType === REPO ? 'Users' : 'Repositories'}
      </button>
    </div>;

const mapStateToProps = ({ searchType }) => ({ searchType });

const mapDispatchToProps = dispatch => ({
  changeSearch: type => dispatch(setSearchType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSearch)
