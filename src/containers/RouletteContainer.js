import { connect } from 'react-redux'
import { addMoney, spendMoney, placeBet } from '../actions'
import Roulette from '../components/Roulette'

const mapStateToProps = (state) => ({ 
    bet: state.bet,
    totalMoney: state.found
 });

const mapDispatchToProps = (dispatch) => ({
    onClick: (value) => dispatch(spendMoney(value)),
    winMoney: (value) => dispatch(addMoney(value)),
    placeBet: (value) => dispatch(placeBet(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Roulette)
