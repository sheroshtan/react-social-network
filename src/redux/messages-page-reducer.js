const SEND_MESSAGE = 'SEND_MESSAGE';
const ON_CHANGE_MESSAGE_INPUT = 'ON_CHANGE_MESSAGE_INPUT';

let initialState = {
    conversationsData: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Terrance"},
        {id: 3, name: "Maria"},
        {id: 4, name: "Bob"},
        {id: 5, name: "Sarah"},
        {id: 6, name: "Victoria"}
    ],
    messagesData: [
        {
            id: 1,
            date: "Maria. Tue, 16:30",
            sender: "other",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, pariatur, voluptatibus. Alias amet animi aperiam architecto consectetur, cupiditate delectus eaque eius exercitationem hic illo iste modi neque nihil quam quia!"
        },
        {
            id: 2,
            date: "YOU. Tue, 16:32",
            sender: "own",
            message: "Nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"
        },
        {
            id: 3,
            date: "Maria. Tue, 16:38",
            sender: "other",
            message: "Accusamus asperiores corporis deserunt doloremque dolorum earum eligendi et fuga harum, hic ipsam laboriosam mollitia natus necessitatibus nobis nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"
        },
        {
            id: 4,
            date: "Maria. Tue, 16:58",
            sender: "other",
            message: "Aliquam aspernatur, assumenda blanditiis earum exercitationem inventore nesciunt, non odio quae sapiente sint vero. Laudantium minus modi nisi nostrum praesentium provident recusandae totam veniam veritatis voluptatem. Consectetur dolor est sint"
        },

    ],
    inputValue: ''
};

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            const lastMessageId = state.messagesData[state.messagesData.length - 1].id;
            const newMessage = {
                id: (lastMessageId + 1),
                date: `${action.sender}. ${getDateOfMessage()}`,
                sender: "own",
                message: state.inputValue
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                inputValue: ''
            }

        }

        case ON_CHANGE_MESSAGE_INPUT: {
            return {
                ...state,
                inputValue: action.text,
            };
        }

        default: {
            return state;
        }
    }
}

export const createSendMessageAction = (sender) => {
    return {
        type: SEND_MESSAGE,
        sender: sender
    }
}

export const createChangeMessageAction = (text) => {
    return {
        type: ON_CHANGE_MESSAGE_INPUT,
        text: text
    }
}

export const getDateOfMessage = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    return `${weekDays[now.getDay()]}, ${hours}:${minutes}`;
}

export default messagesPageReducer;