export default async function(context) {
    if(!context.store.getters['auth/checked']) {
        context.store.commit('auth/setChecked')

        const token = localStorage.getItem('token')

        if(token) {
            context.$axios.setToken(token, 'Bearer')

            const res = await context.$axios.get('auth/check')
            if(res.data && res.data.success) {
                context.store.commit('auth/setLoggedIn', token)
            } else {
                localStorage.removeItem('token')
            }
        }
    }
}