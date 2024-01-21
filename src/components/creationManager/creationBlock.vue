<template>
    <div class="creation-block">
        <h2 class="creation-block__title">ДОДЕЛАТЬ ИМЕНОВАННЫЕ СЛОТЫ</h2>
        <slot></slot>
    </div>
</template>

<style scoped>
.creation-block {
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
    box-shadow: var(--shadow);
}
</style>