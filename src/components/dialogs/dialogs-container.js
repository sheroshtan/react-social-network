import {createChangeMessageAction, createSendMessageAction} from "../../redux/messages-page-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import './dialogs.css';

const mapStateToProps = (state) => {
    return {
        conversationsData: state.messagesPage.conversationsData,
        messagesData: state.messagesPage.messagesData,
        inputValue: state.messagesPage.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => dispatch(createSendMessageAction('YOU')),

        onChangeMessage: (text) => dispatch(createChangeMessageAction(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);