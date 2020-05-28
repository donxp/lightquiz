<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <h1 v-if="!created" class="is-size-3 has-text-centered">Create Quiz</h1>
            <h1 v-if="created" class="is-size-3 has-text-centered">Quiz Created</h1>

            <div v-if="created" class="is-block" style="margin-top: 20px">
                <b-message type="is-success">
                    Your quiz has been created!

                    <a class="is-block mt-4" @click="copyQuizToClipboard">Copy quiz link to clipboard</a>
                    <a class="is-block mt-1" @click="copyDeleteToClipboard">Copy <b>delete</b> link to clipboard</a>
                </b-message>
            </div>

            <div v-if="!created" class="is-block" style="margin-top: 20px">
                <b-message v-if="error" type="is-danger">
                    <b>Error: </b>{{ error }}
                </b-message>
                <b-input v-model="name" placeholder="Name your quiz" :loading="loading" :disabled="loading" />

                <CreateQuestions ref="questions" :loading="loading" />
                
                <b-button type="is-primary" @click="addQuestion" :loading="loading" :disabled="loading" style="margin-top: 15px" expanded outlined>Add Question</b-button>
                <b-button type="is-success" @click="submit" :loading="loading" :disabled="loading" style="margin-top: 15px" expanded>Create</b-button>
            </div>
        </div>
    </div>
</template>
<script>
import copy from 'clipboard-copy'
import CreateQuestions from '../components/CreateQuestions'

export default {
    components: { CreateQuestions },
    data() {
        return {
            name: '',
            loading: false,
            created: null,
            error: null
        }
    },
    methods: {
        addQuestion() {
            this.$refs.questions.addQuestion()
        },
        submit() {
            if(this.$refs.questions.validate()) {
                
                this.loading = true

                this.$axios.post('quiz', {
                    name: this.name,
                    questions: this.$refs.questions.getQuestions()
                }).then(res => {
                    this.loading = false

                    if(res.data && res.data.success) {
                        this.created = {
                            id: res.data.id,
                            remove_id: res.data.remove_id
                        }
                    } else if(res.data && res.data.error) {
                        this.error = res.data.error
                    }
                })
            }
        },
        copyQuizToClipboard() {
            copy(`${process.env.url}quiz/${this.created.id}`).then(() => {
                this.$buefy.snackbar.open(`Link copied!`)
            })
        },
        copyDeleteToClipboard() {
            copy(`${process.env.url}quiz/remove/${this.created.remove_id}`).then(() => {
                this.$buefy.snackbar.open(`Link copied!`)
            })
        }
    }
}
</script>