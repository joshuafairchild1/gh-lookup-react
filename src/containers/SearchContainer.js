import {
  findGithubRepo, findGithubUser, setInputValue, setSearchType
} from '../actions'
import { connect } from 'react-redux'
import Search from '../components/Search'

const mapStateToProps = ({ usernameInput, repoInput, searchType }) =>
  ({ usernameInput, repoInput, searchType })

const mapDispatchToProps = dispatch => ({
  searchUsername: (event, username) => findGithubUser(event, username, dispatch),
  searchRepo: (event, repoName, username) => findGithubRepo(event, repoName, username, dispatch),
  changeSearchType: type => dispatch(setSearchType(type)),
  handleInputChange: ({ value }, type) => dispatch(setInputValue(value, type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
