import Login from './template';
import { connect } from 'react-redux';

import { sendUserData } from '../../actions/form';

const mapDispatchToProps = dispatch => ({
  sendUserData: userData => dispatch(sendUserData(userData))
});

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
