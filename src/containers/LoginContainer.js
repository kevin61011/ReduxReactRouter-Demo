import { connect } from 'react-redux'
import { login } from '../actions'
import Login from '../components/Login'

const mapDispatchToProps = (dispatch) => ({ login: (account, password) => dispatch(login(account, password)) })

export default connect(
    undefined,
    mapDispatchToProps
)(Login)
