import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = ({ currentSearch, searchException }) =>
  ({ currentSearch, searchException })

export default connect(mapStateToProps)(Results)
