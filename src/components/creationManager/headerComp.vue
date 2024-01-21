<template>
    <div class="creation-manager__header">
        <h1>Create a new chapter</h1>
        <button-exit-comp class="header__exit-btn" @click="store.showCreationManager(false)">
            X
        </button-exit-comp>
    </div>
</template>

<script setup>
import useMainStore from '../../store'
const store = useMainStore();
</script>

<style scoped>
.creation-manager__header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-title);
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    user-select: none;
    z-index: 1010;
}

.header__exit-btn {
    position: absolute;
    right: 15px;
}
</style>