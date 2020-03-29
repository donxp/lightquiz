export default function ({store, redirect}) {
    const isLoggedIn = store.getters['auth/getLoggedIn']
    if(isLoggedIn) {
        redirect('/')
    }
}