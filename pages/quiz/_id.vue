<template>
    <div>
        <div class="columns is-centered">
            <div class="column is-one-third">
                <h1 v-if="quiz" class="is-size-3 has-text-centered" style="margin-bottom: 20px">{{ quiz.name }}</h1>
                <b-skeleton v-else class="has-text-centered"></b-skeleton>

                <div v-if="quiz">
                    <QuizQuestion v-for="(question, index) in quiz.questions" :question="question" :key="index" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import QuizQuestion from '../../components/QuizQuestion'
export default {
    components: {
        QuizQuestion
    },
    data() {
        return {
            loading: false,
            quiz: null,
            error: null
        }
    },
    fetch() {
        this.loading = true
        
        this.$axios.get(`quiz/${this.$route.params.id}`).then(res => {
            this.loading = false

            if(res.data && res.data.success) {
                this.quiz = res.data.quiz
            } else if(res.data && res.data.error) {
                this.error = res.data.error
            }
        })
    }
}
</script>