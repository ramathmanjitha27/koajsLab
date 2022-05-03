const { v4 : uuid } = require('uuid');

const posts = new Map();

console.log('Api called');

const createPost = ({name,description}) => {

    const id = uuid();
    // const id = 0;
    const value = {
        id,
        name,
        description,
        postsDate : new Date()
    }
    console.log(posts)
    posts.set(id,value);
    //return value;

}

const getPosts = ()=>{
    console.log(posts.name);
    return [...posts.values()];
    //return posts;
}

const getPost = (id) => {
    return posts.get(id);
}

module.exports = {createPost,getPosts,getPost};