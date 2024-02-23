<!-- Containter for watching and creation a chapters -->
<template>
    <div class="creation-container">
        <showPanel :unit-list="units"></showPanel>
        <!-- Container for creation a chapter -->
        <inputPanel @confirm-unit="confirmUnit"></inputPanel>
    </div>
</template>

<script setup>
import showPanel from "./showpanel.vue";
import inputPanel from "./inputPanel.vue";
import randomUUID from '../../uitls/randomUUID';
import useMainStore from '../../store/index';
import { createUnit } from '../../api/unitAPI';
import { ref } from 'vue';

const store = useMainStore();
const units = ref([]);

// Подтверждение создания юнита
async function confirmUnit(data) {
    try {
        await createUnit(null, data.text, null, null, null, 'Example');
    } catch (err) {
        throw new Error(`components/creationContainer:confirmUnit => ${err}`);
    }
}

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
