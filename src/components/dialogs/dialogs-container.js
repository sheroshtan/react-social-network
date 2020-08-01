import React from "react";
import Message from "./message/message";
import './dialogs.css';
import {createChangeMessageAction, createSendMessageAction} from "../../redux/messages-page-reducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {

    const state = props.store.getState();

    const sendMessage = () => {
        const action = createSendMessageAction('YOU');
        props.store.dispatch(action);
    }

    const changeMessage = (text) => {
        const action = createChangeMessageAction(text);
        props.store.dispatch(action);
    }

    return <Dialogs conversationsData={state.messagesPage.conversationsData}
                    messagesData={state.messagesPage.messagesData}
                    inputValue={state.messagesPage.inputValue}
                    onSendMessage={sendMessage}
                    onChangeMessage={changeMessage}/>
}

export default DialogsContainer;