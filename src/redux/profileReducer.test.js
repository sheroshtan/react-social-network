import profilePageReducer, {addPost, deletePost} from "./profileReducer";

const initialState = {
    postsData:[
        {id: 1, likesCount: 22, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi culpa, dolores eaque exercitationem facilis fuga hic libero magni, neque odio possimus quasi quia, saepe veritatis voluptates! Ad, sunt."},
        {id: 2, likesCount: 13, text: "Aliquid aspernatur cumque debitis esse id necessitatibus nihil recusandae reprehenderit voluptate! Alias aliquam dolore eaque eveniet hic iure magni neque nisi non, pariatur quam quis ratione totam vitae voluptatibus.Fuga? Ad aperiam, atque culpa cupiditate eveniet facilis natus quae quaerat rem. Accusamus cumque dolor esse iusto, molestiae molestias natus necessitatibus non quae quam quidem quos rem rerum tempore velit vero."},
        {id: 3, likesCount: 217, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dignissimos enim facilis labore molestiae nisi non sunt tempore velit? Consequuntur, dolorum eius omnis possimus quam quibusdam quisquam sunt voluptate? Aliquam aperiam, dolore dolorum earum illum inventore mollitia necessitatibus nisi quaerat quia quidem quo, repellat reprehenderit tempore tenetur. Aliquid atque consectetur consequatur eligendi ex iure numquam recusandae sequi vero voluptas?"}
    ]
};

it('length of newState should be increased', () => {
    const action = addPost('new post text');
    const newState = profilePageReducer(initialState, action);

    expect(newState.postsData.length).toBe(4);
});

it("message of new post should be correct", () => {
    const action = addPost('new post text');
    const newState = profilePageReducer(initialState, action);

    expect(newState.postsData[3].text).toBe('new post text');
});

it("length of postsData should be decreased", () => {
    const action = deletePost(1);
    const newState = profilePageReducer(initialState, action);

    expect(newState.postsData.length).toBe(3);
});

it("length of postsData should stay the same if id is incorrect", () => {
    const action = deletePost(1000);
    const newState = profilePageReducer(initialState, action);

    expect(newState.postsData.length).toBe(3);
});