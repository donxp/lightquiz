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
                <b-button type="is-info">Log In</b-button>
            </b-navbar-item>
            <b-navbar-item v-if="!loggedIn" tag="nuxt-link" to="/signup">
                <b-button type="is-info">Sign Up</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('auth', {
            loggedIn: 'loggedIn'
        })
    }
}
</script>