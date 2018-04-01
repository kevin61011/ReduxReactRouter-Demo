const defaultUser = {
    userAccount: "",
    userPassword: "",
}

const user = (state = defaultUser, action) => {
    console.log(`user's state: ${state}`);

    switch (action.type) {
        case "LOGIN":
            return ({
                userAccount: action.account,
                userPassword: action.password
            });
        case "LOGOUT":
            return {
                userAccount: "",
                userPassword: ""
            };
        default:
            return state;
    }
}

export default user;