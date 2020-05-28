<template>
    <b-navbar type="is-dark" :shadow="true" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                LightQuiz
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="nuxt-link" to="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag="nuxt-link" to="/create">
                Create
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item v-if="!loggedIn" tag="nuxt-link" to="/login">
                Log In
            </b-navbar-item>
            <b-navbar-item v-if="!loggedIn" tag="nuxt-link" to="/signup">
                Sign Up
            </b-navbar-item>
            <b-navbar-item v-if="loggedIn" tag="nuxt-link" to="/quizzes">
                My Quizzes
            </b-navbar-item>
            <b-navbar-item v-if="loggedIn" tag="nuxt-link" to="/logout">
                Logout
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('auth', {
            loggedIn: state => state.loggedIn
        })
    },
    methods: {
        logout() {
            this.$store.commit('auth/setLoggedOut')
        }
    }
}
</script>