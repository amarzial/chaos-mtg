import { reactive } from 'vue';
import lst from '../assets/list.json';

const history = reactive([]);

export function getLists() {
    return lst.lists;
}

export function getHistory() {
    return history;
}

function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

export function roll(list_name) {
    for (let list of lst.lists) {
        if (list.name == list_name) {
            let elem = getRandom(list.list);
            history.unshift(elem);
            return elem;
        }
    }
    return null;
}
