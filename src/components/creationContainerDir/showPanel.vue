<template>
    <div class="creation-container__show-panel">
        <!-- Header -->
        <headerComp></headerComp>
        <!-- Is no open chapter  -->
        <h1 class="creation-container__no-open-chapters" v-show="!store.openChapter.isOpen">
            Choose or create chapter
        </h1>
        <!-- Panel with openning chapter -->
        <div class="show-panel__wrapped" v-show="store.openChapter.isOpen">
            <div class="units-container">
                <div 
                class="show-panel__wrapped--unit-item unit"
                v-for="unit in units"
                :key="unit.id"
                >
                    <p style="color:aliceblue">
                        {{ unit.id }}
                        {{ unit.content.message }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import headerComp from "./headercomp.vue";
import useMainStore from "../../store";
import generateUUID from '../../uitls/randomUUID';
import { ref } from 'vue';
const store = useMainStore();

const units = ref([
    {
        id: generateUUID(),
        title: null,
        content: {
            message: 'Hello world1',
            image: [],
            video: [],
            audio: [],
        },
        chapterID: null,
        createdAt: null,
        updatedAt: null,
    },
    {
        id: generateUUID(),
        title: null,
        content: {
            message: 'Hello world2',
            image: [],
            video: [],
            audio: [],
        },
        chapterID: null,
        createdAt: null,
        updatedAt: null,
    },
]);

</script>

<style scoped>
.unit {
    position: relative;
    width: 45%;
    height: 100px;
    background-color: var(--bg-color-reverse);
}

.show-panel__wrapped--unit-item+.show-panel__wrapped--unit-item {
    margin-top: 5px;
}

.creation-container__show-panel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    opacity: var(--opacity-default);
    width: 95%;
    height: 88%;
    background-color: var(--bg-color-default);
    transition: box-shadow 1s ease;
    overflow: hidden;
}

.creation-container__show-panel:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}

.creation-container__no-open-chapters {
    position: absolute;
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    padding: 0px 25px;
    user-select: none;
}

.show-panel__wrapped {
    position: relative;
    width: 98%;
    height: 99%;
    overflow: auto;
    padding: 40px 15px 10px 15px;
}
.units-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: max-content;
    width: 100%;
}
</style>
