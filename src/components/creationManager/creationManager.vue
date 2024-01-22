<template>
    <div 
    class="creation-manager__modal" 
    v-show="store.isShowCreationManager"
    @click="store.showCreationManager(false)"
    >
        <div class="creation-manager__container" @click.stop>
            <!-- Header -->
            <headerComp></headerComp>
            <!-- Wrapped -->
            <creationWrapped></creationWrapped>
            
        </div>
    </div>
</template>

<script setup>
import headerComp from './headerComp.vue';
import creationWrapped from './creationWrapped.vue';
import useMainStore from '../../store'
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
    z-index: 999;
}
.creation-manager__container {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 70%;
    background-color: var(--bg-color-creation-manager);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    z-index: 1000;
}
</style>