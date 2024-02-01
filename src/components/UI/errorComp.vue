<template>
    <div class="error__container">
        <h2 class="error__title">message: {{ props.error.message }}</h2>
        <p class="error__id">id: {{ props.error.id }}</p>
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
.error__container {
    padding: 2px 25px;
    margin: 2px 5px;
    background-color: rgba(222, 71, 71, 0.7);
    color: black;
}
.error__title {
    font-size: 20px;
}
</style>