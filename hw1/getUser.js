import axios from "axios"

const getUser = (Number) => {
    return new Promise(async (resolve, reject) => {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
    resolve(user);
    });
};

const getPosts = (Number) => {
    return new Promise(async (resolve, reject) => {
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + Number);
    resolve(post);
    });
};

export default async function getData(Number){
    try{
        const user = await getUser(Number);
        const post = await getPosts(Number);

        user.post = post;
        return user;
    } catch(e){
        console.log(e);
    }
}