import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import randomID from "../uitls/randomID";

const useMainStore = defineStore("mainStore", () => {
    // STATE    ===============================================================================>>>>
    // Массив созданных разделов тематики 
    const chapters = reactive([]);
    // Массив доступных предметов (жанров) для создания раздела тематики 
    const subjects = reactive([
        { id: randomID(), title: 'Math' },
        { id: randomID(), title: 'Frontend' },
        { id: randomID(), title: 'Backend' },
    ]);

    // Стек ошибок и исключений (Для отрисовки соответствующих уведомлений)
    const errorStack = ref([]);

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

    // Создание раздела
    function createChapter(chapter) {
        try {
            chapter.id = randomID();
            isShowCreationManager.value = false;
            chapters.push(chapter);
        } catch (err) {
            throw Error('store/index:createChapter', err)
        }
    }

    // Show a Creation Manager
    function showCreationManager(isShow) {
        if (isShow === true) {
            isShowCreationManager.value = isShow;
        } else {
            isShowCreationManager.value = isShow;
        }
    }

    // Create new subject
    function createSubject(title) {
        subjects.push({ id: randomID(), title: title });
    }
    // Функция добавления и удаления ошибки (Стек Ошибок)
    function addError(error, secondExpires) {
        try {
            error.id = randomID();
            errorStack.value.push(error);
            setTimeout(() => {
                errorStack.value = errorStack.value.filter((err) => {
                    return error.id !== err.id;
                });
            }, secondExpires * 1000);
        } catch (err) {
            throw Error('store/index:addError', err)
        }
    }

    // Функция получения списка разделов
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
        createChapter,
        getChapters,
    };
});

export default useMainStore;
