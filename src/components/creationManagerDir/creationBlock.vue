<template>
    <div class="creation-block">
        <!-- Уведомление об успешном сохранении данных -->
        <success-note-comp class="creation-block__success-note" :show="props.isConfirm">
            Confirm!
        </success-note-comp>

        <!-- Уведомление об ошибке при сохранении данных -->
        <except-note-comp class="creation-block__except-note" :show="props.isExcept">
            Required!
        </except-note-comp>
        <h2 class="creation-block__title">
            <slot name="header"></slot>
        </h2>
        <div class="creation-block__body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
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
})
</script>

<style scoped>
.creation-block {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    min-height: 100px;
    height: max-content;
    max-height: 350px;
    border: var(--border);
    margin: auto;
    border-radius: var(--border-radius);
    background-color: var(--bg-color-default);
    box-shadow: var(--shadow);
    overflow: hidden;
}
.creation-block__success-note {
    position: absolute;
    top: 0px;
    right: 0px;
}
.creation-block__except-note {
    position: absolute;
    top: 0px;
    right: 0px;
}
.creation-block__title {
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    padding: 0 15px;
    margin: 20px 0 25px 0;
    user-select: none;
    font-size: var(--font-size-creation-title);
}
.creation-block__body {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: max-content;
    /* border: 1px solid black; */
    margin-bottom: 25px;
}
</style>