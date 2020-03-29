export const state = () => ({
    token: '',
    loggedIn: true
})

export const getters = {
    getLoggedIn(state) {
        return state.loggedIn
    }
}