<template>
    <form class="creation-container__input-panel" @submit.prevent>
        <inputText v-model="value"></inputText>
        <div class="input-panel__buttons">
            <button-comp 
            class="input-panel__btn"
            :disabled="!store.openChapter.isOpen" 
            >
                Send
            </button-comp>
            <button-comp 
            class="input-panel__btn"
            :disabled="!store.openChapter.isOpen" 
            >
                {{ '>_' }}
            </button-comp>
        </div>
    </form>
</template>

<script setup>
import useMainStore from '../../store';
const store = useMainStore();
import inputText from '../inputText.vue';
import { ref } from 'vue';
const value = ref('');

</script>

<style scoped>
.creation-container__input-panel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
    opacity: 0.8;
    width: 95%;
    height: 8%;
    background-color: var(--bg-color-default);
    transition: box-shadow 1s ease;
    overflow: hidden;
}

.creation-container__input-panel:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}


.input-panel__buttons {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98%;
    width: 12%;
    padding: 10px 15px;
    /* border: 1px solid black; */
}

.input-panel__btn+.input-panel__btn {
    margin-left: 10px;
}
</style>