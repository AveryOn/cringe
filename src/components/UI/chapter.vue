<template>
    <li class="chapter__containter" @click="() => store.toOpenChapter(uuid, title)">
        <slot></slot> {{'<=> ' + uuid}}
    </li>
</template>

<script setup>
import useMainStore from '../../store';
const store = useMainStore();
defineProps({
    title: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
});


</script>

<style scoped>
.chapter__containter {
    position: relative;
    height: 130px;
    width: 95%;
    margin: 10px auto;
    background-color: var(--bg-color-chapter);
    color: var(--color-default);
    border-radius: var(--border-radius);
    transition: box-shadow 1s ease;
    user-select: none;
}

.chapter__containter:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}
</style>