import React from "react";

import './dialogs.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {

    // tempdata
    const message1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, pariatur, voluptatibus. Alias amet animi aperiam architecto consectetur, cupiditate delectus eaque eius exercitationem hic illo iste modi neque nihil quam quia!';
    const message2 = 'Nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?';
    const message3 = 'Accusamus asperiores corporis deserunt doloremque dolorum earum eligendi et fuga harum, hic ipsam laboriosam mollitia natus necessitatibus nobis nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?';
    const message4 = 'Aliquam aspernatur, assumenda blanditiis earum exercitationem inventore nesciunt, non odio quae sapiente sint vero. Laudantium minus modi nisi nostrum praesentium provident recusandae totam veniam veritatis voluptatem. Consectetur dolor est sint';

    return (
        <div className="dialogs grid">
            <div className="dialog-items">

                <Dialog name="Andrew" id={1} />

                <Dialog name="Terrance" id={2} />

                <Dialog name="Maria" id={3} />

                <Dialog name="Bob" id={4} />

                <Dialog name="Sarah" id={5} />

                <Dialog name="Victoria" id={6} />

            </div>
            <div className="messaging">

                <div className="messages">

                    <Message text={message1} date="Maria. Tue, 16:30" sender="other" />
                    <Message text={message2} date="YOU. Tue, 16:32" sender="own"/>
                    <Message text={message3} date="Maria. Tue, 16:38" sender="other" />
                    <Message text={message4} date="Maria. Tue, 16:58" sender="other" />

                </div>

                <form name="message-form" className="form-default">
                    <textarea name="new-message" id="new-message"></textarea>
                    <button className="btn purple btn-add-active">Send</button>
                </form>

            </div>
        </div>
    )
}

const Dialog = (props) => {

    const { name, id } = props;

    return (
        <div className="dialog-item">
            <NavLink to={`/dialogs/${id}`} activeClassName="active-dialog">{ name }</NavLink>
        </div>
    )
}

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

export default Dialogs;