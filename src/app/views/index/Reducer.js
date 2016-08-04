
var reducer = (state, action) => {
    if (action.type==='initialize') {
        return action.state;
    }
    return state;
};

export default reducer;