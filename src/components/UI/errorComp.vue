<template>
    <div class="error">
        <h2 class="error__title">
            message: 
            <strong>
                {{ props.error.message }}
            </strong>
        </h2>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Реквизит ошибки ({id: 123-asd1-13q, message: 'example text'})
const props = defineProps({
    error: {
        type: Object,
        required: true,
    }
})

</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
    /* Ширина скроллбара */
}

::-webkit-scrollbar-thumb {
    background-color: #0c0b0b;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    /* Цвет ползунка скроллбара */
}
.error {
    position: relative;
    width: 100%;
    height: max-content;
    max-height: 20%;
    padding: 5px 25px;
    overflow: auto;
    margin: 2px 5px;
    background-color: var(--bg-color-error);
    color: black;
}

.error__title {
    font-size: 20px;
    text-align: start;
    line-height: 1.05;
    font-weight: normal;
}
</style>