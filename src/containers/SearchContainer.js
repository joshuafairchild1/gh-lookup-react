import {
  findGithubRepo, findGithubUser, setInputValue, setSearchType
} from '../actions';
import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = ({ usernameInput, repoInput, searchType }) =>
  ({ usernameInput, repoInput, searchType })

const mapDispatchToProps = dispatch => ({
  searchUsername: username => findGithubUser(username)(dispatch),
  searchRepo: (repoName, username) =>
    findGithubRepo(repoName, username)(dispatch),
  changeSearchType: type => dispatch(setSearchType(type)),
  inputChanged: ({ value }, type) => dispatch(setInputValue(value, type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
