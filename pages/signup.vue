<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-primary has-text-centered">
                Sign Up
            </h1>
            <b-field label="Email">
                <b-input type="text" v-model="email" :disabled="loading" :loading="loading"></b-input>
            </b-field>
            <b-field label="Password">
                <b-input type="password" v-model="password" :disabled="loading" :loading="loading"></b-input>
            </b-field>
            <b-field label="Confirm Password">
                <b-input type="password" v-model="confirm_password" :disabled="loading" :loading="loading"></b-input>
            </b-field>
            <b-button type="is-primary" @click="signup" expanded :disabled="loading" :loading="loading">Sign Up</b-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            email: '',
            password: '',
            confirm_password: ''
        }
    },
    methods: {
        signup() {
            this.loading = true
            // TODO: Call API
        }
    }
}
</script>