<template>
    <b-navbar type="is-dark" :shadow="true" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                LightQuiz
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                Home
            </b-navbar-item>
            <b-navbar-item>
                Create
            </b-navbar-item>
        </template>
    </b-navbar>
</template>