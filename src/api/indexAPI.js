import axios from 'axios';

const hostName = 'http://localhost:3000';

async function testGet() {
    try {
        const response = await axios.get(hostName + '/', {
            headers: {
                'Content-Type': 'application/www-form-urlencoded'
            }
        });
        console.log(response);
    } catch (err) {
        console.log(err);
        throw new Error(`api/indexAPI:testGet => ${err}`)
    }
}

export {
    hostName,

    testGet,
}