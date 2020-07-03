import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import {addPost} from "../redux/state";
import {onChangePostInput} from "../redux/state";

export function renderEntireTree(state) {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 onChangePostInput={onChangePostInput}/>
        </BrowserRouter>,

        document.getElementById('root'));
}