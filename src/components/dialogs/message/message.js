import React from "react";

import './../dialogs.css';

const Message = (props) => {

    const { text, date , sender} = props;
    const styles = (sender === 'own' ? "message-item own-message" : "message-item");

    return (
        <div className={styles}>
            <span className="message-info">{ date }</span>
            <span className="message">{ text }</span>
        </div>
    )
}

export default Message;