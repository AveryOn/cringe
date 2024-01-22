<template>
    <div class="creation-block">
        <h2 class="creation-block__title"><slot name="header"></slot></h2>
        <div class="creation-block__body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<style scoped>
.creation-block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    min-height: 100px;
    height: max-content;
    max-height: 350px;
    border: var(--border);
    margin: auto;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}
.creation-block__title {
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    padding: 0 15px;
    margin: 10px 0 15px 0;
    user-select: none;
    font-size: var(--font-size-creation-title);
}
.creation-block__body {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: max-content;
    /* border: 1px solid black; */
    margin-bottom: 25px;
}
</style>