import { reactive } from 'vue';

export const popup_state = reactive({
    visible: false,
    title: '',
    content: '',
});

export function showPopup(message, title = '') {
    popup_state.visible = true;
    popup_state.title = title;
    popup_state.content = message;
}

