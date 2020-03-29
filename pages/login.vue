<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-primary has-text-centered">
                Log In
            </h1>
            <b-field label="Email">
                <b-input type="text" v-model="email" :disabled="loading" :loading="loading"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input type="password" v-model="password" :disabled="loading" :loading="loading"></b-input>
            </b-field>
            <b-field>
                <b-checkbox :disabled="loading">Remember Me</b-checkbox>
            </b-field>
            <b-button type="is-primary" @click="login" expanded :disabled="loading || (!password || !email)" :loading="loading">Log In</b-button>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'redirectIfAuthenticated',
    data() {
        return {
            loading: false,
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.loading = true
            // TODO: Call API
        }
    }
}
</script>