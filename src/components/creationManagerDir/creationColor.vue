<!-- COLOR -->
<template>
    <creationBlock 
    :is-confirm="isConfirm"
    :is-except="props.isExcept"
    >
        <!-- header -->
        <template v-slot:header>
            Select marking color
        </template>
        <!-- body -->
        <template v-slot:body>
            <!-- BODY CONTAINER -->
            <div class="creation-color__container">
                <form class="creation-color__select-color" @submit.prevent>
                    <input 
                    class="input-color" 
                    type="color"
                    @input="(e) => recordColor(e.target.value)"
                    >
                    <p class="color-create__watch">{{ currentColor }}</p>
                    <button class="color-create__execute" @click="$emit('confirmColor', currentColor)">
                        <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path
                                d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                        </svg>
                    </button>
                </form>
            </div>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    isConfirm: {
        type: Boolean,
        required: true,
        default: false,
    },
    isExcept: {
        type: Boolean,
        required: true,
        default: false,
    },
});

defineEmits(['confirmColor'])

const currentColor = ref('#000000');

function recordColor(color) {
    currentColor.value = color;
}


</script>

<style scoped>
.creation-color__container {
    width: 90%;
    height: max-content;
    display: flex;
    justify-content: center;
    /* border: var(--border); */
}

.creation-color__select-color {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    /* border: var(--border); */
}

.input-color {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border: none;
    outline: rgba(0, 0, 0, 0);
    background-color: var(--bg-color-default);
}
.color-create__watch {
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    padding: 0 5px;
}
.color-create__execute {
    padding: 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: rgba(0, 0, 0, 0);
    font-size: calc(var(--font-size-default) - 2px);
    cursor: pointer;
    padding: 0;
    margin-left: 20px;
    border: var(--border);
    border-radius: var(--border-radius);
    user-select: none;
}

.color-create__execute:hover>.icon-send {
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