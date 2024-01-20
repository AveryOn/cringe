<!-- Containter for watching and creation a chapters -->
<template>
    <div class="creation-container">
        <showPanel></showPanel>
        <!-- Container for creation a chapter -->
        <inputPanel></inputPanel>
    </div>
</template>

<script setup>
import showPanel from './showPanel.vue';
import inputPanel from './inputPanel.vue';

</script>

<style scoped>
.creation-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: var(--bg-color-op);
    backdrop-filter: var(--blur);
    width: 62%;
    top: 10px;
    bottom: 10px;
    right: 15px;
    padding: 10px 0;
    z-index: 10;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
}
</style>