import { hostName } from "./indexAPI";
import axios from 'axios';

// Создание тематики
async function createSubjectDB(value) {
    try {
        const response = await axios.post(hostName + 'subjects/create', {
            value,
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

// Получение всех тематик
async function getAllSubjectsDB() {
    try {
        const response = await axios.get(hostName + 'subjects/', {
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
    createSubjectDB,
    getAllSubjectsDB,
}