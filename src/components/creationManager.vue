<template>
    <div 
    class="creation-manager__modal" 
    v-show="store.isShowCreationManager"
    @click="store.showCreationManager(false)"
    >
        <div class="creation-manager__container">
            <div class="creation-manager__header">
                <h1>Create a new chapter</h1>
                <button-exit-comp class="header__exit-btn" 
                @click="store.showCreationManager(false)">
                    X
                </button-exit-comp>
            </div>
        </div>
    </div>
</template>

<script setup>
import useMainStore from '../store';
const store = useMainStore();
</script>

<style scoped>
.creation-manager__modal {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color-op);
    backdrop-filter: var(--blur-modal);
    z-index: 9999999999;
}

.creation-manager__container {
    position: relative;
    width: 50%;
    height: 60%;
    background-color: var(--bg-color-default);
    opacity: var(--opacity-default);
    border-radius: var(--border-radius);
    overflow: hidden;
}

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
}

.header__exit-btn {
    position: absolute;
    right: 15px;
}
</style>