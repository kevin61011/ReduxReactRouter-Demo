import { connect } from 'react-redux'
import { addMoney } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => ({ totalMoney: state.found });

const mapDispatchToProps = (dispatch) => ({ onClick: (value) => dispatch(addMoney(value)) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
