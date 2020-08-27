import {createChangeMessageAction, createSendMessageAction} from "../../redux/messages-page-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import './dialogs.css';
import {withAuthRedirect} from "../../hoc-helpers/with-auth-redirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        conversationsData: state.messagesPage.conversationsData,
        messagesData: state.messagesPage.messagesData,
        inputValue: state.messagesPage.inputValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => dispatch(createSendMessageAction('YOU')),
        onChangeMessage: (text) => dispatch(createChangeMessageAction(text))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);