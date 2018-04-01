const bet = (state = 0, action) => {
    console.log(`bet' state: ${state}`);
    
    switch (action.type) {
        case "PLACE_BET":
            return action.bet;
        default:
            return state;
    }
}

export default bet;