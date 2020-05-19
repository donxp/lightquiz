<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-primary has-text-centered">
                Log In
            </h1>
            <b-message v-if="error" type="is-danger">
                Unable to login.
            </b-message>
            <b-field
                label="Email"
                :type="$v.email.$error ? 'is-danger' : ''"
                :addons="false"
            >
                <b-input type="text" v-model="$v.email.$model" :disabled="loading" :loading="loading"></b-input>
                <p v-if="$v.email.$error && !$v.email.required" class="help is-danger">Email is required</p>
                <p v-if="$v.email.$error && !$v.email.email" class="help is-danger">Email must be in correct format</p>
            </b-field>
            <b-field
                label="Password"
                :type="$v.password.$error ? 'is-danger' : ''"
                :addons="false"
            >
                <b-input type="password" v-model="$v.password.$model" :disabled="loading" :loading="loading"></b-input>
                <p v-if="$v.password.$error && !$v.password.required" class="help is-danger">Password is required</p>
            </b-field>
            <b-field>
                <b-checkbox :disabled="loading">Remember Me</b-checkbox>
            </b-field>
            <b-button type="is-primary" @click="login" expanded :disabled="loading || (!password || !email)" :loading="loading">Log In</b-button>
        </div>
    </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
    middleware: 'redirectIfAuthenticated',
    data() {
        return {
            loading: false,
            email: '',
            password: '',
            error: false
        }
    },
    methods: {
        login() {
            this.loading = true
            
            this.$axios.post('auth/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                this.loading = false

                if(res.data && res.data.success) {
                    this.$store.commit('auth/setLoggedIn', res.data.token)
                    this.$router.push('/')
                } else {
                    this.error = true
                }
            })
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required
        }
    }
}
</script>