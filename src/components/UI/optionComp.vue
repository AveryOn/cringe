<template>
    <button class="option">
        <slot></slot>
    </button>
</template>

<script setup>
const eexxxxample = 1231;
</script>

<style scoped>
.option {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color-default);
    color: var(--color-text);
    outline: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: var(--font-size-default);
    border: 2px solid black;
    border-radius: var(--border-radius);
    padding: 6px;
    font-family: sans-serif;
    user-select: none;
    transition: border-color .6s ease;
}
.option:hover {
    border-color: var(--color-active);
    transition: border-color .6s ease;
}
</style>