<template>
    <div style="margin-top:10px">
        <div class="box">
            <b-input type="text" placeholder="What is your question?" />
            <b-select placeholder="Answer type" class="mt-2" expanded>
                <option value="single">Single answer</option>
                <option value="single">Multiple answers</option>
            </b-select>

            <b-button type="is-info" size="is-small" class="mt-1">
                <b-icon icon="plus" size="is-small"></b-icon>
                <span>Add Answer</span>
            </b-button>
        </div>
    </div>
</template>