import React from "react";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import './dialogs.css';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    const { conversationsData, messagesData } = props;

    const sendMessage = (formData) => {
        props.sendMessage('YOU', formData.newMessage);
    }

    const dialogItems = conversationsData
        .map(({ name, id }, index) => <Dialog name={name} id={id} key={id} />);

    const messageItems = messagesData.map(({id, date, sender, message}) => {
        return <Message  text={message} date={date} sender={sender} key={id} />
    });

    return (
        <div className="dialogs grid">
            <div className="dialog-items">
                {
                    dialogItems
                }
            </div>

            <div className="messaging">
                <div className="messages">
                    {
                        messageItems
                    }
                </div>
                <MessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    )
}

const MessageForm = (props) => {
    return (
        <form name="messageForm" className="form-default" onSubmit={props.handleSubmit}>
            <Field name="newMessage" component='textarea' />
            <button className="btn purple btn-add-active">Send</button>
        </form>
    )
}

const MessageFormRedux = reduxForm({form:'message'})(MessageForm);

export default Dialogs;