<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-primary has-text-centered">
                Sign Up
            </h1>
            <b-message v-if="success" type="is-success">
                Registered successfully
            </b-message>
            <b-message v-if="error" type="is-danger">
                Unable to register: email is already taken.
            </b-message>
            <b-field
                label="Email"
                :type="$v.email.$error ? 'is-danger' : ''"
                :addons="false"
            >
                <b-input type="text" v-model="$v.email.$model" :disabled="loading" :loading="loading" />
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
                <p v-if="$v.password.$error && !$v.password.email" class="help is-danger">Password must be at least 6 characters long</p>
            </b-field>
            <b-field
                label="Confirm Password"
                :type="$v.confirm_password.$error ? 'is-danger' : ''"
                :addons="false"
            >
                <b-input type="password" v-model="$v.confirm_password.$model" :disabled="loading" :loading="loading"></b-input>
                <p v-if="$v.confirm_password.$error && !$v.confirm_password.required" class="help is-danger">Password confirmation is required</p>
                <p v-if="$v.confirm_password.$error && !$v.confirm_password.email" class="help is-danger">Passwords must be the same</p>
            </b-field>
            <b-button type="is-primary" @click="signup" expanded :disabled="loading || (!email || !password || !confirm_password)" :loading="loading">Sign Up</b-button>
        </div>
    </div>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
    middleware: 'redirectIfAuthenticated',
    data() {
        return {
            loading: false,
            email: '',
            password: '',
            confirm_password: '',
            error: false,
            success: false
        }
    },
    methods: {
        signup() {
            this.loading = true
            
            this.$axios.post('auth/register', {
                email: this.email,
                password: this.password
            }).then(res => {
                this.loading = false

                if(res.data && res.data.success) {
                    this.success = true
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
            required,
            minLength: minLength(6)
        },
        confirm_password: {
            required,
            sameAsPassword: sameAs('password')
        }
    }
}
</script>