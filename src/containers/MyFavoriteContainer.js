import { connect } from 'react-redux'
import { deletedFromMyFavorite, addedToMyFavorite, changeGame } from '../actions'
import MyFavorite from '../components/MyFavorite'

const mapStateToProps = (state) => ({ myFavorite: state.myFavorite });

const mapDispatchToProps = (dispatch) => ({
    onClickAdd: (value) => dispatch(addedToMyFavorite(value)),
    onClickDelete: (value) => dispatch(deletedFromMyFavorite(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyFavorite) 
