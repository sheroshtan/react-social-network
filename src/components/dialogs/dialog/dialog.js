import React from "react";
import {NavLink} from "react-router-dom";

import './../dialogs.css';

const Dialog = (props) => {

    const { name, id } = props;

    return (
        <div className="dialog-item">
            <NavLink to={`/dialogs/${id}`} activeClassName="active-dialog">{ name }</NavLink>
        </div>
    )
}

export default Dialog;