<template>
    <!-- Панель отрисовки Юнитов -->
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
                <unit-comp
                class="show-panel__wrapped--unit-item"
                v-for="unit in props.unitList"
                :title="unit.id"
                :key="unit.id"
                >
                    {{ unit.content.message }}
                </unit-comp>
            </div>
        </div>
    </div>
</template>

<script setup>
import headerComp from "./headercomp.vue";
import useMainStore from "../../store";
import { defineProps, watch } from 'vue';
const store = useMainStore();

const props = defineProps({
    unitList: {
        type: Array,
        default: () => [],
    }
});

// Отслеживаение изменения длины массива юнитов и автоматический скролл в самый низ блока юнитов 
watch(() => props.unitList.length, () => {
    const wrapper = document.querySelector('.show-panel__wrapped');
    const beforeScroll = wrapper.scrollHeight;
    setTimeout(() => {
        wrapper.scroll({
            top: beforeScroll,
        });
    }, 0);
});

</script>

<style scoped>


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
