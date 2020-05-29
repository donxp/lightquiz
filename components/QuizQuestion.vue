<template>
    <div class="box">
        <h1 class="is-size-4">{{ question.name }}</h1>
        <div v-if="!question.allow_multiple_answers">
            <p class="mt-1" style="margin-bottom: 10px"><i>Please choose one</i></p>
            <div class="field" v-for="(answer, index) in question.answers" :key="index">
                <b-radio v-model="answers" :native-value="index">
                    {{ answer.name }}
                </b-radio>
            </div>
        </div>
        <div v-else>
            <p class="mt-1" style="margin-bottom: 10px"><i>Multiple answers allowed</i></p>
            <div class="field" v-for="(answer, index) in question.answers" :key="index">
                <b-checkbox v-model="answers" :native-value="index">
                    {{ answer.name }}
                </b-checkbox>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['question'],
    data() {
        return {
            answers: []
        }
    }
}
</script>