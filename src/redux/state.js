import {renderEntireTree} from "../components/render";

let state = {
    profilePage: {
        postsData:[
            {id: 1, likesCount: 22, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi culpa, dolores eaque exercitationem facilis fuga hic libero magni, neque odio possimus quasi quia, saepe veritatis voluptates! Ad, sunt."},
            {id: 2, likesCount: 13, text: "Aliquid aspernatur cumque debitis esse id necessitatibus nihil recusandae reprehenderit voluptate! Alias aliquam dolore eaque eveniet hic iure magni neque nisi non, pariatur quam quis ratione totam vitae voluptatibus.Fuga? Ad aperiam, atque culpa cupiditate eveniet facilis natus quae quaerat rem. Accusamus cumque dolor esse iusto, molestiae molestias natus necessitatibus non quae quam quidem quos rem rerum tempore velit vero."},
            {id: 3, likesCount: 217, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dignissimos enim facilis labore molestiae nisi non sunt tempore velit? Consequuntur, dolorum eius omnis possimus quam quibusdam quisquam sunt voluptate? Aliquam aperiam, dolore dolorum earum illum inventore mollitia necessitatibus nisi quaerat quia quidem quo, repellat reprehenderit tempore tenetur. Aliquid atque consectetur consequatur eligendi ex iure numquam recusandae sequi vero voluptas?"}
        ],
        inputValue: ''
    },
    messagesPage: {
        conversationsData: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Terrance"},
            {id: 3, name: "Maria"},
            {id: 4, name: "Bob"},
            {id: 5, name: "Sarah"},
            {id: 6, name: "Victoria"}
        ],
        messagesData: [
            {
                id: 1,
                date: "Maria. Tue, 16:30",
                sender: "other",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, pariatur, voluptatibus. Alias amet animi aperiam architecto consectetur, cupiditate delectus eaque eius exercitationem hic illo iste modi neque nihil quam quia!"
            },
            {
                id: 2,
                date: "YOU. Tue, 16:32",
                sender: "own",
                message: "Nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"
            },
            {
                id: 3,
                date: "Maria. Tue, 16:38",
                sender: "other",
                message: "Accusamus asperiores corporis deserunt doloremque dolorum earum eligendi et fuga harum, hic ipsam laboriosam mollitia natus necessitatibus nobis nulla officia omnis pariatur porro quaerat, quia suscipit tenetur voluptatem! Amet, sit?"
            },
            {
                id: 4,
                date: "Maria. Tue, 16:58",
                sender: "other",
                message: "Aliquam aspernatur, assumenda blanditiis earum exercitationem inventore nesciunt, non odio quae sapiente sint vero. Laudantium minus modi nisi nostrum praesentium provident recusandae totam veniam veritatis voluptatem. Consectetur dolor est sint"
            },

        ]
    },
};

export function addPost() {
    const lastPostId = (state.profilePage.postsData[state.profilePage.postsData.length-1].id)
    const postText = state.profilePage.inputValue;

    const newPost = {
        id: lastPostId + 1,
        likesCount: 0,
        text: postText
    }

    state.profilePage.postsData.push(newPost);
    onChangePostInput('');
    renderEntireTree(state);


    console.log(state.profilePage.postsData);
}

export function onChangePostInput(text) {
    state.profilePage.inputValue = text;
    renderEntireTree(state);
    console.log(state.profilePage.inputValue);
}

export default state;