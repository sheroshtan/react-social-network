import React from "react";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import './dialogs.css';
import {createChangeMessageAction, createSendMessageAction} from "../../redux/messages-page-reducer";


const Dialogs = (props) => {

    const { conversationsData, messagesData } = props;

    const newMessage = React.createRef();

    const sendMessage = () => {
        props.onSendMessage();
    }

    const changeMessage = (e) => {
        const text = e.target.value;
        props.onChangeMessage(text);
    }

    const formPreventDefault = (e) => {
        e.preventDefault();
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

                <form name="message-form" className="form-default" onSubmit={formPreventDefault}>
                    <textarea name="new-message"
                              id="new-message"
                              ref={newMessage}
                              onChange={changeMessage}
                              value={props.inputValue}
                    />
                    <button className="btn purple btn-add-active" onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;