<template>
    <button class="button-exit">X</button>
</template>

<style scoped>
.button-exit {
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    outline: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: var(--font-size-exit-btn);
    padding: 3px 6px;
    font-family: sans-serif;
    user-select: none;
    transition: color .5s ease;
}

.button-exit:hover {
    transition: color .5s ease;
    color: rgb(201, 59, 59);
}
</style>