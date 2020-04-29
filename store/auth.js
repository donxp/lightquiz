export const state = () => ({
    token: '',
    loggedIn: false
})

export const getters = {
    getLoggedIn(state) {
        return state.loggedIn
    }
}