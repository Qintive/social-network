const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    newMessageBody: 'Введите тек',

    friendsPage: {
        friendsData: [
            { id: 1, name: 'Vladimir' },
            { id: 2, name: 'Yaroslav' },
            { id: 3, name: 'Grek' },
            { id: 4, name: 'Kankash' }

        ]
    }
}


const DialogsReduce = (state = initialState, action) => {

    switch (action.type) {
      
        case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = {...state.newMessageBody}
            let body = action.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messageData = [...state.messageData, { id: 4, message: body }]
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: 'SEND_MESSAGE',
        newMessageBody
    }
}


export default DialogsReduce;