import {sendMessage} from "../../redux/messages-page-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import './dialogs.css';
import {withAuthRedirect} from "../../hoc-helpers/with-auth-redirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        conversationsData: state.messagesPage.conversationsData,
        messagesData: state.messagesPage.messagesData,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);