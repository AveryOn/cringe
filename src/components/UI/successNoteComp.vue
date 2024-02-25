<template>
    <div class="success-note" v-show="props.show">
        <p class="success-note__message">
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
.success-note {
    max-width: 300px;
    background-color: var(--bg-color-success);
    padding: 0 10px;
    overflow: hidden;
}
.success-note__message {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bolder;
}
</style>