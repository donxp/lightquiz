<template>
    <div>
        <div style="margin-top:10px" v-for="(question, idx) in questions" :key="idx">
            <div class="box">
                <div class="delete remove-question-button" @click="deleteQuestion(idx)"></div>
                <b-input v-model="question.name" type="text" placeholder="What is your question?" />
                <b-select placeholder="Answer type" class="mt-2" expanded>
                    <option value="single">Single answer</option>
                    <option value="multi">Multiple answers</option>
                </b-select>

                <b-button type="is-info" size="is-small" class="mt-1">
                    <b-icon icon="plus" size="is-small"></b-icon>
                    <span>Add Answer</span>
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['count'],
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
                name: ''
            })
        },
        deleteQuestion(idx) {
            this.questions.splice(idx, 1)
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
</style>