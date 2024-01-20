<template>
    <div class="creation-container__show-panel">
        <!-- Header -->
        <headerComp></headerComp>
        <!-- Is no open chapter  -->
        <h1 
        class="creation-container__no-open-chapters" 
        v-show="!store.openChapter.isOpen"
        >
            Choose or create chapter
        </h1>
        <!-- Panel with openning chapter -->
        <div class="show-panel__wrapped" v-show="store.openChapter.isOpen">
        </div>
    </div>
</template>

<script setup>
import headerComp from './headercomp.vue';
import useMainStore from '../../store';
const store = useMainStore();

</script>

<style scoped>
.creation-container__show-panel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    opacity: 0.8;
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
    width: 98%;
    height: 99%;
    overflow: auto;
}
</style>