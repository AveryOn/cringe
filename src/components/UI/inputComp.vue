<template>
    <input 
    class="input" 
    v-model="value"
    @input="(e) => $emit('inputLetter', e.target.value)"
    >
</template>

<script setup>
defineEmits(['inputLetter']);
const value = defineModel('value');
</script>

<style scoped>
.input {
    width: 80%;
    height: 30px;
    padding: 25px 15px 10px 15px;
    margin-right: 15px;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    transition: border-color 1s ease;
    font-weight: bolder;
    outline: rgba(0, 0, 0, 0);
    font-family: monospace;
    font-size: var(--font-size-default);
}
.input::placeholder{
    font-weight: normal;
}
.input:focus {
    border-color: var(--color-active);
    transition: border-color 1s ease;
}
</style>