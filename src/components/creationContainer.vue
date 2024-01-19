<!-- Containter for watching and creation a chapters -->
<template>
    <div class="creation-container">
        <div class="creation-container__show-panel">
            <!-- Is no open chapter  -->
            <h1 
                class="creation-container__no-open-chapters" 
                >Choose or create chapter</h1>
            <!-- Panel with openning chapter -->
            <div 
                class="show-panel__wrapped" 
                >
            </div>
        </div>
        <!-- Container for creation a chapter -->
        <form class="creation-container__input-panel" @submit.prevent>
            <inputText v-model="value"></inputText>
            <div class="input-panel__buttons">
                <button-comp class="input-panel__btn">Send</button-comp>
                <button-comp class="input-panel__btn">{{ '>_' }}</button-comp>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import inputText from './inputText.vue';
import useMainStore from '../store';
const store = useMainStore();


const value = ref('');
</script>

<style scoped>
.creation-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: var(--bg-color-op);
    backdrop-filter: var(--blur);
    width: 62%;
    top: 10px;
    bottom: 10px;
    right: 15px;
    padding: 10px 0;
    z-index: 10;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
}

.creation-container__no-open-chapters {
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    padding: 0px 25px;
    user-select: none;
}

.creation-container__show-panel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    opacity: 0.8;
    width: 95%;
    height: 88%;
    background-color: var(--bg-color-default);
    transition: box-shadow 1s ease;
}

.creation-container__show-panel:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}

.show-panel__wrapped {
    width: 98%;
    height: 99%;
    overflow: auto;
}

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

.input-panel__btn + .input-panel__btn {
    margin-left: 10px;
}
</style>