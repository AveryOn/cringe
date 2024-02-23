import axios from 'axios';
import { hostName } from './indexAPI';

// Unit - это сущность сообщения в разделе (аналог классическим сообщениям в чатах)

// Создание нового юнита на сервере
async function createUnit(title, message, images, videos, audios, subject) {
    try {
        const response = await axios.post(hostName + '/units/create', {
            title,
            message,
            images,
            videos,
            audios,
            subject,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
    } catch (err) {
        throw new Error(`api/unitAPI:createUnit => ${err}`);
    }
}

export {
    createUnit
}