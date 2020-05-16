<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 class="is-size-3 has-text-centered">Create Quiz</h1>
            <div class="is-block" style="margin-top: 20px">
                <b-input placeholder="Name your quiz" />

                <CreateQuestions ref="questions" />
                
                <b-button type="is-primary" @click="addQuestion" style="margin-top: 15px" expanded outlined>Add Question</b-button>
                <b-button type="is-success" @click="submit" style="margin-top: 15px" expanded>Create</b-button>
            </div>
        </div>
    </div>
</template>
<script>
import CreateQuestions from '../components/CreateQuestions'

export default {
    components: { CreateQuestions },
    methods: {
        addQuestion() {
            this.$refs.questions.addQuestion()
        },
        submit() {

        }
    }
}
</script>