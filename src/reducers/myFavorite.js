const myFavorite = (state = [], action) => {
    console.log(`myFavorite' state: ${state}`);

    switch (action.type) {
        case "DELETED_FROM_MY_FAVORITE":
            return state.filter((f) => f != action.game);
        case "ADDED_TO_MY_FAVORITE":
            return [...state, action.game]
        default:
            return state;
    }
}

export default myFavorite;