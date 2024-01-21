<!-- TITLE -->
<template>
    <creationBlock>
        <!-- header -->
        <template v-slot:header>
            Enter the title
        </template>
        <!-- body -->
        <template v-slot:body>
            <div class="creation-title__body">
                <input 
                class="creation-wrapped__input" 
                type="text" 
                placeholder="Enter title"
                v-model="title"
                >
                <button class="creation-title__confirm">
                    <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                    </svg>
                </button>
            </div>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
const title = defineModel('title');
</script>

<style scoped>
.creation-title__body {
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
}

.creation-wrapped__input {
    width: 80%;
    height: 30px;
    padding: 25px 15px 10px 15px;
    margin-right: 15px;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    transition: border-color 1s ease;
    font-weight: bolder;
    outline: rgba(0,0,0,0);
    font-family: monospace;
    font-size: var(--font-size-default);
}
.creation-wrapped__input::placeholder{
    font-weight: normal;
}
.creation-wrapped__input:focus {
    border-color: var(--color-active);
    transition: border-color 1s ease;
}
.creation-title__confirm {
    padding: 1px 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: rgba(0, 0, 0, 0);
    font-size: calc(var(--font-size-default) - 2px);
    cursor: pointer;
    padding: 0;
    border: var(--border);
    border-radius: var(--border-radius);
    user-select: none;
}
.creation-title__confirm:hover > .icon-send {
    transition: fill .6s ease;
    fill: var(--color-active);
}
.icon-send {
    fill: var(--color-text);
    width: calc(var(--icon-width) * 1.2);
    height: calc(var(--icon-height) * 1.2);
    transition: fill .6s ease;
}
</style>