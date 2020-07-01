import React from "react";

import './dialogs.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    //temp data
    const usersData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Terrance"},
        {id: 3, name: "Maria"},
        {id: 4, name: "Bob"},
        {id: 5, name: "Sarah"},
        {id: 6, name: "Victoria"}
    ];

    const messagesData = [
        {id: 1, date: "Maria. Tue, 16:30", sender: "other", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, pariatur, voluptatibus. Alias amet animi aperiam architecto consectetur, cupiditate delectus eaque eius exercitationem hic illo iste modi neque nihil quam quia!"},
        {id: 2, date: "YOU. Tue, 16:32", sender: "own", message: "Nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"},
        {id: 3, date: "Maria. Tue, 16:38", sender: "other", message: "Accusamus asperiores corporis deserunt doloremque dolorum earum eligendi et fuga harum, hic ipsam laboriosam mollitia natus necessitatibus nobis nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"},
        {id: 4, date: "Maria. Tue, 16:58", sender: "other", message: "Aliquam aspernatur, assumenda blanditiis earum exercitationem inventore nesciunt, non odio quae sapiente sint vero. Laudantium minus modi nisi nostrum praesentium provident recusandae totam veniam veritatis voluptatem. Consectetur dolor est sint"},

    ];

    const dialogItems = usersData
        .map(({ name, id }, index) => <Dialog name={name} id={id} key={id} />);

    const messageItems = messagesData.map(({id, date, sender, message}, index) => {
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