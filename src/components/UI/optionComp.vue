<template>
    <button class="option">
        <slot></slot>
    </button>
</template>

<script setup>

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
    border-radius: var(--border-radius);
    padding: 6px;
    font-family: sans-serif;
    user-select: none;
}
</style>