import React from "react";
import Post from "../post/post";

import './my-posts.css';

const MyPosts = () => {

    // temp data
    const message1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi culpa, dolores eaque exercitationem facilis fuga hic libero magni, neque odio possimus quasi quia, saepe veritatis voluptates! Ad, sunt.';
    const message2 = 'Aliquid aspernatur cumque debitis esse id necessitatibus nihil recusandae reprehenderit voluptate! Alias aliquam dolore eaque eveniet hic iure magni neque nisi non, pariatur quam quis ratione totam vitae voluptatibus.Fuga? Ad aperiam, atque culpa cupiditate eveniet facilis natus quae quaerat rem. Accusamus cumque dolor esse iusto, molestiae molestias natus necessitatibus non quae quam quidem quos rem rerum tempore velit vero.';
    const message3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dignissimos enim facilis labore molestiae nisi non sunt tempore velit? Consequuntur, dolorum eius omnis possimus quam quibusdam quisquam sunt voluptate? Aliquam aperiam, dolore dolorum earum illum inventore mollitia necessitatibus nisi quaerat quia quidem quo, repellat reprehenderit tempore tenetur. Aliquid atque consectetur consequatur eligendi ex iure numquam recusandae sequi vero voluptas?';

    return (
        <div className="posts-wrapper">
            <form name="new-post" className="form-default">
                <label htmlFor="new-post">New post</label>
                <textarea name="new-post" id="new-post"></textarea>
                <button className="btn purple btn-add-post">Publish</button>
            </form>
            <div className="posts">
                <span className="title-posts">Recent posts:</span>

                <Post message={message1}/>

                <Post message={message2}/>

                <Post message={message3}/>

            </div>
        </div>
    )
}

export default MyPosts;