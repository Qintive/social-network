import DialogsReduce from "./DialogsReducer";
import ProfileReduce from "./ProfileReducer";

let store = {
    _state: {

        profilePage: {
            post: [
                { message: 'HI MY NAME IS DANIEL', like: '15' },
                { message: 'This is my social network', like: '55' },
                { message: 'I a, crazy', like: '189' },
            ],
            newPostText: 'Введите текст'
        },

        messagesPage: {
            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Whats up man' },
                { id: 3, message: 'What a u doing' },
            ],
            nameData: [
                { id: 1, name: 'Yaroslav', },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Vladimir' },
                { id: 4, name: 'Grek' },
                { id: 5, name: 'Daniil' },
            ],
            newMessageBody: 'Введите тек'
        },
        friendsPage: {
            friendsData: [
                { id: 1, name: 'Vladimir' },
                { id: 2, name: 'Yaroslav' },
                { id: 3, name: 'Grek' },
                { id: 4, name: 'Kankash' }

            ]
        },
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = ProfileReduce(this._state.profilePage, action);
        this._state.messagesPage = DialogsReduce(this._state.messagesPage, action);

        this._callSubscriber(this._state)

    }
}

export default store;