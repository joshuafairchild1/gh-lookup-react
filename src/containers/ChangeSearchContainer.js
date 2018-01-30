import { setSearchType } from '../actions';
import { connect } from 'react-redux';
import ChangeSearch from '../components/ChangeSearch';

const mapStateToProps = ({ searchType }) => ({ searchType })

const mapDispatchToProps = dispatch => ({
  changeSearch: type => dispatch(setSearchType(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSearch)
