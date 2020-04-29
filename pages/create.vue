<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-centered">Create Quiz</h1>
            <div class="is-block" style="margin-top: 20px">
                <b-input placeholder="Name your quiz" />

                <CreateQuestion v-for="(question, index) in questions" :key="index" />
                
                <b-button type="is-primary" @click="addQuestion" style="margin-top: 15px" expanded outlined>Add Question</b-button>
                <b-button type="is-success" @click="submit" style="margin-top: 15px" expanded>Create</b-button>
            </div>
        </div>
    </div>
</template>
<script>
import CreateQuestion from '../components/CreateQuestion'

export default {
    components: { CreateQuestion },
    data() {
        return {
            questions: []
        }
    },
    methods: {
        addQuestion() {
            console.log('add question')
        },
        submit() {

        }
    }
}
</script>