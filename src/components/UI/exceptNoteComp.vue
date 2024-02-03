<template>
    <div class="except-note" v-show="props.show">
        <p class="except-note__message">
            <slot></slot>
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
        default: false,
    }
})
</script>

<style scoped>
.except-note {
    max-width: 300px;
    background-color: var(--bg-color-except);
    padding: 0 10px;
    overflow: hidden;
}
.except-note__message {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bolder;
    font-size: 18px;
}
</style>