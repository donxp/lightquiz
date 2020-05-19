export const state = () => ({
    token: null,
    loggedIn: false,
    checked: false
})

export const getters = {
    loggedIn: state => {
        return state.loggedIn
    },
    checked: state => {
        return state.checked
    }
}

export const mutations = {
    setLoggedIn(state, token) {
        state.loggedIn = true
        state.token = token

        localStorage.setItem('token', token)
        this.$axios.setToken(token, 'Bearer')
    },
    setLoggedOut(state) {
        state.loggedIn = false,
        state.token = null

        localStorage.removeItem('token')
        this.$axios.setToken(null)
    },
    setChecked(state) {
        state.checked = true
    }
}