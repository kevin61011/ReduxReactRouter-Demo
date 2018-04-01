
const found = (state = 1000, action) => {
    console.log(`found state: ${state}`);

    let total = state;
    switch (action.type) {
        case "ADD_MONEY":
            total += action.money;
            return total
        case "SPEND_MONEY":
            total -= action.money;
            return total
        default:
            return state;
    }
}

export default found;