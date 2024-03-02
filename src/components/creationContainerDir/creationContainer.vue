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
import { createUnit, getAllUnitsDB } from '../../api/unitAPI';
import { ref, watch } from 'vue';
import useMainStore from "../../store";

const store = useMainStore();

const units = ref([]);

// Создание нового юнита
async function confirmUnit(unit) {
    try {
        const { title, message, images, videos, audios } = unit;
        const createdUnit = await createUnit(
            title, 
            message, 
            images, 
            videos, 
            audios, 
            store.openChapter.subject,
            store.openChapter.id,
        );
        console.log(createdUnit);
        units.value.push(createdUnit);
    } catch (err) {
        throw new Error(`components/creationContainerDir/creationContainer.vue: confirmUnit => ${err}`);
    }
}

// Получение списка юнитов выбранного раздела
watch(() => store.openChapter.id, async (newValue) => {
    console.log(newValue);
    try {
        units.value = await getAllUnitsDB(store.openChapter.id);
        console.log(units.value);
    } catch (err) {
        throw new Error(`components/creationContainerDir/creationContainer.vue: watch: [fetch units] => ${err}`);
    }
});

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
