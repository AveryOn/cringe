<!-- SUBJECT -->
<template>
    <creationBlock 
    :is-confirm="props.isConfirm"
    :is-except="props.isExcept"
    >
        <!-- header -->
        <template v-slot:header>
            Choose a subject
        </template>
        <!-- body -->
        <template v-slot:body>
            <!-- BODY CONTAINER -->
            <div class="creation-subject__container">
                <!-- SUBJECT LIST -->
                <div class="creation-subject__subject-list">
                    <subject-comp 
                    class="subject-list__item"
                    @click="() => setSubject(subject)"
                    v-for="subject in store.subjects"
                    :key="subject.id"
                    >
                        {{ subject.title }}
                    </subject-comp>
                </div>
                <!-- SELECTED SUBJECT -->
                <p class="creation-subject__selected-subject">
                    Your choose: 
                    <p 
                    class="subject-example"
                    :style="(selectedSubject === 'null') ? {color: 'var(--color-error)'} : {}"
                    >
                        {{ selectedSubject }}
                    </p> 
                </p>
                <!-- FORM FOR CREATE A SUBJECT -->
                <form 
                class="creation-subject__subject-create" 
                @submit.prevent
                v-show="isCreateNewSubject"
                >
                    <!-- Уведомление ограничения на ввод символов -->
                    <p 
                    class="subject-create__remain-letters"
                    >
                        Remain letters: {{ acceptableLetters }}
                    </p>
                    
                    <!-- Поле ввода и кнопка send -->
                    <div class="subject-create__input-block">
                        <input-comp 
                        :type="'text'" 
                        :placeholder="'Enter title'" 
                        v-model:value="title"
                        @input-letter="remainLetters"
                        ></input-comp>
                        <button 
                        class="subject-create__execute"
                        @click="createNewSubject"
                        :disabled="acceptableLetters < 0"
                        >
                            <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path
                                    d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                            </svg>
                        </button>
                    </div>
                </form>
                <!-- DOWN BUTTONS -->
                <div class="creation-subject__buttons">
                    <button-comp @click="handlerOpenClosed">{{ (isCreateNewSubject === false)? 'Create subject' : 'Undo' }}</button-comp>
                    <button-comp @click="confirmChooseSubject">Confirm</button-comp>
                </div>

            </div>
        </template>
    </creationBlock>
</template>

<script setup>
import creationBlock from './creationBlock.vue';
import useMainStore from '../../store/';
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    isConfirm: {
        type: Boolean,
        required: true,
        default: false,
    },
    isExcept: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const emit = defineEmits(['confirmSubject']);

const store = useMainStore();
const title = ref('');
const acceptableLetters = ref(50);
const selectedSubject = ref('null');
const isCreateNewSubject = ref(false);

// Управляет строкой ограничения символов ввода
function remainLetters() {
    const remainLetters = document.querySelector('.subject-create__remain-letters');
    // Если допустимое оставшееся количество символов меньше нуля то компонент горит красным
    if(acceptableLetters.value <= 0) {
        remainLetters.style.color = 'var(--color-error)';
        remainLetters.style.fontWeight = 'bolder';
        console.log('Всё харош чувак');
    }
    // Если допустимое оставшееся кол-во символов более нуля то подсветка пропадает
    if((50 - title.value.split('').length) >= 0) {
        remainLetters.style.color = '';
        remainLetters.style.fontWeight = '';
    }
    acceptableLetters.value = 50 - title.value.split('').length;
}

// Устанавливает выбранный subject в переменную
function setSubject(subject) {
    selectedSubject.value = subject.title;
}

// Создание нового предмета
function createNewSubject() {
    const subjectList = document.querySelector('.creation-subject__subject-list');
    store.createSubject(title.value);
    handlerOpenClosed();
    title.value = '';
    setTimeout(() => {
        const afterScroll = subjectList.scrollHeight;
        subjectList.scroll({
            top: afterScroll,
            behavior: 'smooth',
        })
    }, 0);
}

// Подтверждение установленного предмета subject
function confirmChooseSubject() {
    emit('confirmSubject', selectedSubject.value);
}

// Обработчик закрытия и открытия блока для создания subjuects
function handlerOpenClosed() {
    if(isCreateNewSubject.value === false) {
        isCreateNewSubject.value = true;
    } else {
        isCreateNewSubject.value = false;
    }
}
</script>

<style scoped>
.creation-subject__container {
    display: flex;
    flex-direction: column;
    height: max-content;
    min-height: 50px;
    width: 90%;
}
.creation-subject__subject-list {
    display: flex;
    height: max-content;
    max-block-size: 100px;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    border-top: var(--border);
    padding: 5px 0;
}
.subject-list__item {
    margin: 0 5px 5px 0;
}
.creation-subject__selected-subject {
    display: flex;
    padding: 0 5px;
    background-color: var(--bg-color-reverse);
    color: var(--color-reverse);
    user-select: none;
}
.subject-example {
    margin-left: 10px;
    font-weight: bolder;
}
.creation-subject__subject-create {
    position: relative;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0;
}
.subject-create__input-block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.subject-create__execute {
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
.subject-create__execute:hover > .icon-send {
    transition: fill .6s ease;
    fill: var(--color-active);
}
.icon-send {
    fill: var(--color-text);
    width: calc(var(--icon-width) * 1.2);
    height: calc(var(--icon-height) * 1.2);
    transition: fill .6s ease;
}
.creation-subject__buttons {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
</style>