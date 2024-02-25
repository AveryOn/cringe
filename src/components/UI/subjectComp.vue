<template>
    <div class="subject">
        <span class="subject__alias">@</span>
        <div class="subject__body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.subject {
    display: flex;
    align-items: center;
    background-color: var(--bg-color-subject);
    color: var(--color-default);
    font-weight: bolder;
    cursor: pointer;
    padding: 0 5px;
    user-select: none;
}
.subject:hover {
    background-color: rgb(156, 156, 156);
}
.subject__alias {
    color: var(--color-alias);
    font-size: 20px;
    font-weight: bolder;
}
.subject__body {

}
</style>