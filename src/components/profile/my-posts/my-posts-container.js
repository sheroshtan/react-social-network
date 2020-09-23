import {connect} from "react-redux";
import MyPosts from "./my-posts";
import { addPost } from "../../../redux/profileReducer";
import './my-posts.css';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;