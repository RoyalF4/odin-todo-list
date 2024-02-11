export default fixIndex;

function fixIndex(array) {
    for(let i = 0; i < array.length; i++) {
        array[i].index = i;
    }
    return array;
}