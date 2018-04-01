import { connect } from 'react-redux'
import { addMoney, logout } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
    user: state.user.userAccount,
    totalMoney: state.found
});

const mapDispatchToProps = (dispatch) => ({
    addMoney: (value) => dispatch(addMoney(value)),
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
