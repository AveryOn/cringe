<template>
    <div class="creation-container">
        <div class="creation-container__show-panel">
            <div class="show-panel__wrapped">
            </div>
        </div>
        <div class="creation-container__input-panel">
            <textarea class="input-panel__text" id="input-text" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script setup>

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
}

.creation-container__show-panel:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}

.show-panel__wrapped {
    width: 98%;
    height: 99%;
    overflow: auto;
}

.creation-container__input-panel {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    opacity: 0.8;
    width: 95%;
    height: 8%;
    background-color: var(--bg-color-default);
    transition: box-shadow 1s ease;
    overflow: hidden;
}

.creation-container__input-panel:hover {
    transition: box-shadow 1s ease;
    box-shadow: var(--shadow);
}
.input-panel__text {
    height: 98%;
    width: 75%;
    padding: 10px 15px;
    margin: 0 0 0 0;
    border: none;
    border-right: 2px solid rgba(0, 0, 0, 1.103);
    font-size: 16px;
    background-color: var(--bg-color-default);
    color: var(--color);
    resize: none;
    transition: border-color .5s ease;
}

.input-panel__text:focus {
    transition: border-color .7s ease;
    border-color: #fa9c30;
    outline: none;
}

.input-panel__text::placeholder {
    color: #888;
}
</style>