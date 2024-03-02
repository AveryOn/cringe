import axios from 'axios';
import { hostName } from './indexAPI';

// Unit - это сущность сообщения в разделе (аналог классическим сообщениям в чатах)

// Создание нового юнита на сервере
async function createUnit(title, message, images, videos, audios, subject, chapterId) {
    try {
        const response = await axios.post(hostName + 'units/create', {
            title,
            message,
            images,
            videos,
            audios,
            subject,
            chapterId,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const { data: { data } } = response;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error(`api/unitAPI:createUnit => ${err}`);
    }
}

// Получение всех юнитов чата
async function getAllUnitsDB(chapterId) {
    try {
        const response = await axios.get(hostName + `units/${chapterId}`, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            }
        });
        const { data: { data } } = response;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error(`api/unitAPI: getAllUnitsDB => ${err}`);
    }
}


export {
    createUnit,
    getAllUnitsDB,
}