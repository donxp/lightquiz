<template>
    <div>
        <div style="margin-top:10px" v-for="(question, idx) in questions" :key="idx">
            <div class="box">
                <div class="delete remove-question-button" @click="deleteQuestion(idx)"></div>
                <b-input v-model="question.name" :loading="loading" :disabled="loading" type="text" placeholder="What is your question?" />

                <div class="field mt-2">
                    <b-checkbox v-model="question.allow_multiple" :loading="loading" :disabled="loading" type="is-info">Allow multiple answers</b-checkbox>
                </div>

                <div v-for="(answer, idx) in question.answers" :loading="loading" :disabled="loading" :key="idx" class="create-question-answer">
                    <div class="columns">
                        <div class="column is-10">
                            <b-input v-model="question.answers[idx].answer" :loading="loading" :disabled="loading" size="is-small" placeholder="Answer" />
                        </div>
                        <div class="column is-2 is-flex create-question-answer-checkbox">
                            <b-checkbox v-model="question.answers[idx].correct" size="is-small">Correct</b-checkbox>
                        </div>
                    </div>
                </div>

                <b-button type="is-info" size="is-small" class="mt-1" @click="addAnswer(idx)" :loading="loading" :disabled="loading">
                    <b-icon icon="plus" size="is-small"></b-icon>
                    <span>Add Answer</span>
                </b-button>
                <b-button type="is-danger" size="is-small" class="mt-1" @click="deleteAnswer(idx)" :loading="loading" :disabled="question.answers.length < 1 || loading">
                    <b-icon icon="close" size="is-small"></b-icon>
                    <span>Remove Answer</span>
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['loading'],
    data() {
        return {
            questions: []
        }
    },
    created() {
        this.addQuestion()
    },
    methods: {
        addQuestion() {
            this.questions.push({
                name: '',
                answers: [],
                allow_multiple: false
            })
        },
        deleteQuestion(idx) {
            this.questions.splice(idx, 1)
        },
        addAnswer(idx) {
            if(this.questions[idx] === undefined) return
            this.questions[idx].answers.push({
                answer: '',
                correct: false
            })
        },
        deleteAnswer(idx) {
            if(this.questions[idx] === undefined) return
            this.questions[idx].answers.splice(this.questions[idx].answers.length - 1, 1)
        },
        getQuestions() {
            return this.questions
        },
        validate() {
            let valid = true
            for(let question of this.questions) {
                if(question.name.length < 1) {
                    valid = false
                    break
                }

                if(question.answers.length < 1) {
                    valid = false
                    break
                } else {
                    for(let answer of question.answers) {
                        if(answer.length < 0) {
                            valid = false
                            break
                        }
                    }
                }
            }
            return valid
        }
    }
}
</script>
<style>
.remove-question-button {
    float: right;
    position: relative;
    top: -15px;
    right: -15px;
    margin-bottom: -10px;
}

.create-question-answer:first-of-type {
    margin-top: 15px;
}

.create-question-answer-checkbox {
    align-content: center;
}
</style>