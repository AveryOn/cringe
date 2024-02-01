import { defineStore } from "pinia";
import { ref, reactive, watch, computed } from "vue";
import generateUUID from "../uitls/randomUUID";
import randomID from "../uitls/randomID";
import { appendError } from '../algorithms/errorStack';

const useMainStore = defineStore("mainStore", () => {
    // STATE    ===============================================================================>>>>
    // Массив созданных разделов тематики 
    const chapters = reactive([
        { id: generateUUID(), title: "$ chapter_1" },
        { id: generateUUID(), title: "$ chapter_2" },
        { id: generateUUID(), title: "$ chapter_3" },
        { id: generateUUID(), title: "$ chapter_4" },
        { id: generateUUID(), title: "$ chapter_5" },
        { id: generateUUID(), title: "$ chapter_6" },
    ]);
    // Массив доступных предметов (жанров) для создания раздела тематики 
    const subjects = reactive([
        { id: randomID(), title: 'Math' },
        { id: randomID(), title: 'Frontend' },
        { id: randomID(), title: 'Backend' },
    ]);

    // Стек ошибок и исключений (Для отрисовки соответствующих уведомлений)
    const errorStack = ref([
        {id: randomID(), message: "Error asdasdasdasdsdd1asdasdasdasdsdd1"},
        {id: randomID(), message: "Error 2"},
        {id: randomID(), message: "Error 3"},
        {id: randomID(), message: "Error 4"},
        {id: randomID(), message: "Error 5"},
        {id: randomID(), message: "Error 6"},
    ]);

    const openChapter = reactive({
        isOpen: false,
        uuid: null,
        title: null,
    });
    const isShowCreationManager = ref(false);

    // ACTIONS    ===============================================================================>>>>
    function toOpenChapter(uuid, title) {
        openChapter.isOpen = true;
        openChapter.uuid = uuid;
        openChapter.title = title;
    }
    function toCloseChapter() {
        openChapter.isOpen = false;
        openChapter.uuid = null;
        openChapter.title = null;
    }

    // Show a Creation Manager
    function showCreationManager(value) {
        if (value === true) {
            isShowCreationManager.value = value;
        } else {
            isShowCreationManager.value = value;
        }
    }

    // Create new subject
    function createSubject(title) {
        subjects.push({ id: randomID(), title: title });
    }

    // Функция добавления и удаления ошибки (Стек Ошибок)
    function addError(error, lifetime) {
        appendError(errorStack.value, error, lifetime)
            .then((newStack) => {
                errorStack.value = newStack;
                console.log(errorStack.value);
            });
    }


    async function getChapters() {
        console.log(getChapters.name);
    }
    return {
        // state
        openChapter,
        chapters,
        subjects,
        isShowCreationManager,
        errorStack,

        // actions
        toOpenChapter,
        toCloseChapter,
        showCreationManager,
        createSubject,
        addError,
        getChapters,
    };
});

export default useMainStore;
