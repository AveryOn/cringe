function randomID() {
    let array = new Uint16Array(3);
    crypto.getRandomValues(array);

    let id = '';
    for (let i = 0; i < array.length; i++) {
        if(id[id.length-1] !== '-' && i !== 0) {
            id += '-';
        }
        let item = array[i].toString(16).padEnd(4, '0');
        id += item; 
    }
    return id;
}
export default randomID;