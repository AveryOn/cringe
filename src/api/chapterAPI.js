import axios from 'axios';
import { hostName } from './indexAPI';

// Создание раздела
async function createChapterDB(title, subjectId, color) {
    try {
        const response = await axios.post(hostName + 'chapters/create', {
            title,
            subjectId,
            color,
        }, {
            headers: {
                "Content-Type": 'application/json',
            }
        });
        const { data: { data } } = response;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error(`api/chapterAPI: createChapterDB => ${err}`);
    }
}

// Получение всех разделов
async function getAllChaptersDB() {
    try {
        const response = await axios.get(hostName + 'chapters/', {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            }
        });
        const { data: { data } } = response;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error(`api/chapterAPI: getAllChaptersDB => ${err}`);
    }
}

export { 
    createChapterDB,
    getAllChaptersDB,
}