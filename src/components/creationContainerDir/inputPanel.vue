<template>
    <form class="creation-container__input-panel" @submit.prevent>
        <inputText v-model="message"></inputText>
        <div class="input-panel__buttons">
            <!-- Кнопка отправки Юнита -->
            <button 
            class="input-panel__btn"
            @click="confirmUnit"
            >
                <svg 
                class="icon-send" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 -960 960 960"
                :style="(!store.openChapter.isOpen)? {fill: 'gray'} : {}"
                >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
            </button>

            <!--  >_  -->
            <button-comp 
            class="input-panel__btn" 
            :disabled="!store.openChapter.isOpen"
            :style="(!store.openChapter.isOpen)? {color: 'gray'} : {}"
            >
                <strong>{{ ">_" }}</strong>
            </button-comp>
        </div>
    </form>
</template>

<script setup>
import useMainStore from "../../store";
import inputText from "./inputTextComp.vue";
import { ref, defineEmits } from "vue";

const store = useMainStore();
const emit = defineEmits(['confirmUnit']);

const title = ref(null);
const message = ref('');
const videos = ref([]);
const audios = ref([]);
const images = ref([]);

// Функция подтверждает или отвергает сохранение нового юнита
function confirmUnit() {
    try {
        if(message.value.length || images.value.length || videos.value.length || audios.value.length) {
            emit('confirmUnit', { 
                title: title.value,
                message: message.value,
                images: images.value,
                videos: videos.value,
                audios: audios.value,
            });
            title.value = null;
            message.value = '';
            videos.value = [];
            images.value = [];
            audios.value = [];
        } else return;
    } catch (err) {
        throw new Error(`components/inputPanel:confirmUnit => ${err}`);
    }
}

</script>

<style scoped>
.creation-container__input-panel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.input-panel__buttons {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98%;
    width: 12%;
    padding: 10px 15px;
    /* border: 1px solid black; */
}

.input-panel__btn {
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
.input-panel__btn:hover {
  transition: color 0.5s ease;
  color: var(--color-active);
}

.input-panel__btn:active {
  color: var(--color-reverse);
  background-color: var(--bg-color-reverse);
}

.input-panel__btn + .input-panel__btn {
    margin-left: 10px;
}

.input-panel__btn > .icon-send:hover {
    fill: var(--color-active);
    transition: fill .6s ease;
}
.icon-send {
    fill: var(--color-text);
    width: calc(var(--icon-width) * 1.5);
    height: calc(var(--icon-height) * 1.5);
    transition: fill .6s ease;
}
</style>
