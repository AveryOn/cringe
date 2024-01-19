import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import generateUUID from '../uitls/randomUUID';

const useMainStore = defineStore('mainStore', () => {
    const chapters = reactive([
        { id: generateUUID(), name: '$ chapter_1' },
        { id: generateUUID(), name: '$ chapter_2' },
        { id: generateUUID(), name: '$ chapter_3' },
        { id: generateUUID(), name: '$ chapter_4' },
        { id: generateUUID(), name: '$ chapter_5' },
        { id: generateUUID(), name: '$ chapter_6' },
    ]);
    const openChapter = reactive({ isOpen: false, uuid: null });

    function toOpenChapter(uuid) {
        openChapter.isOpen = true
        openChapter.uuid = uuid;
    }

    async function getChapters() {
        console.log(getChapters.name);
    }
    return {
        // state
        openChapter,
        chapters,
        
        // actions
        toOpenChapter,
        getChapters
    }
});

export default useMainStore;