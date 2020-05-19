export default function ({store, redirect}) {
    const isLoggedIn = store.getters['auth/loggedIn']
    if(isLoggedIn) {
        redirect('/')
    }
}