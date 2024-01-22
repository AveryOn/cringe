<!-- SUBJECT -->
<template>
    <creationBlock>
        <!-- header -->
        <template v-slot:header>
            Choose a subject
        </template>
        <!-- body -->
        <template v-slot:body>
            <div class="creation-subject__container">
                <div class="creation-subject__subject-list">
                    <subject-comp class="subject-list__item">Example</subject-comp>
                </div>
                <p class="creation-subject__selected-subject">
                    Your choose: 
                    <p 
                    class="subject-example"
                    :style="(selectedSubject === 'null') ? {color: 'rgb(230, 60, 60)', fontWeight: 'bolder'} : {}"
                    >
                        {{ selectedSubject }}
                    </p> 
                </p>
                <form 
                class="creation-subject__subject-create" 
                @submit.prevent
                v-show="isCreateNewSubject"
                >
                    <input-comp 
                    :type="'text'" 
                    :placeholder="'Enter title'" 
                    v-model:value="title"
                    ></input-comp>
                    <button class="subject-create__execute">
                        <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                        </svg>
                    </button>
                </form>
                <div class="creation-subject__buttons">
                    <button-comp @click="handler">{{ (isCreateNewSubject === false)? 'Create subject' : 'Undo' }}</button-comp>
                    <button-comp>Confirm</button-comp>
                </div>

            </div>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
import { ref } from 'vue';
const selectedSubject = ref('null');
const isCreateNewSubject = ref(false);

function handler() {
    if(isCreateNewSubject.value === false) {
        isCreateNewSubject.value = true;
    } else {
        isCreateNewSubject.value = false;
    }
}
</script>

<style scoped>
.creation-subject__container {
    display: flex;
    flex-direction: column;
    height: max-content;
    min-height: 50px;
    width: 90%;
}
.creation-subject__subject-list {
    display: flex;
    height: max-content;
    max-block-size: 100px;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    border-top: var(--border);
    padding: 5px 0;
}
.subject-list__item {

}
.creation-subject__selected-subject {
    display: flex;
    padding: 0 5px;
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    user-select: none;
}
.subject-example {
    margin-left: 10px;
}
.creation-subject__subject-create {
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
}
.subject-create__execute {
    padding: 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: rgba(0, 0, 0, 0);
    font-size: calc(var(--font-size-default) - 2px);
    cursor: pointer;
    padding: 0;
    border: var(--border);
    border-radius: var(--border-radius);
    user-select: none;
}
.subject-create__execute:hover > .icon-send {
    transition: fill .6s ease;
    fill: var(--color-active);
}
.icon-send {
    fill: var(--color-text);
    width: calc(var(--icon-width) * 1.2);
    height: calc(var(--icon-height) * 1.2);
    transition: fill .6s ease;
}
.creation-subject__buttons {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
</style>