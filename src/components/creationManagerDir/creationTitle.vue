<!-- TITLE -->
<template>
    <creationBlock>
        <!-- header -->
        <template v-slot:header>
            Enter the title
        </template>
        <!-- body -->
        <template v-slot:body>
            <div class="creation-title__body">
                <input-comp 
                :type="'text'" 
                :placeholder="'Enter title'" 
                v-model:value="title"
                ></input-comp>
                <button 
                class="creation-title__confirm"
                @click="() => $emit('confirmTitle', title)"
                >
                    <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                    </svg>
                </button>
            </div>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
import { ref } from 'vue';
defineEmits(['confirmTitle']);
const title = ref('');
</script>

<style scoped>
.creation-title__body {
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.creation-title__confirm {
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
.creation-title__confirm:hover > .icon-send {
    transition: fill .6s ease;
    fill: var(--color-active);
}
.icon-send {
    fill: var(--color-text);
    width: calc(var(--icon-width) * 1.2);
    height: calc(var(--icon-height) * 1.2);
    transition: fill .6s ease;
}
</style>