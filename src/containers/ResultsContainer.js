import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = ({ currentSearch }) => ({ currentSearch })

export default connect(mapStateToProps)(Results)
