export const addMoney = money => ({
  type: 'ADD_MONEY',
  money
});

export const spendMoney = money => ({
  type: 'SPEND_MONEY',
  money
});

export const placeBet = bet => ({
  type: 'PLACE_BET',
  bet
});

export const deletedFromMyFavorite = game => ({
  type: "DELETED_FROM_MY_FAVORITE",
  game
});

export const addedToMyFavorite = game => ({
  type: "ADDED_TO_MY_FAVORITE",
  game
});

export const login = (account, password) => ({
  type: "LOGIN",
  account,
  password
})

export const logout = () => ({
  type: "LOGOUT",
})