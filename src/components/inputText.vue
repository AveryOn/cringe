<template>
    <textarea 
    class="input-panel__text" 
    placeholder="enter info"
    :disabled="!store.openChapter.isOpen" 
    id="input-text"
    @input="(e) => update(e)"
    ></textarea>
</template>

<script setup>
import useMainStore from '../store';
const store = useMainStore();
const model = defineModel();
function update(e) {
    model.value = e.target.value;
}

</script>

<style scoped>
.input-panel__text {
    height: 98%;
    width: 88%;
    padding: 10px 15px;
    margin: 0 0 0 0;
    border: none;
    border-right: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 16px;
    background-color: var(--bg-color-default);
    color: var(--color-input);
    font-weight: bolder;
    resize: none;
    transition: border-color .5s ease;
}
.input-panel__text::placeholder {
    font-weight: normal;
}
 .input-panel__text:focus {
    transition: border-color .7s ease;
    border-color: var(--color-active);
    outline: none;
}
</style>