//using PROMISE and thenable
/*


GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1

*/
const readLine = require('readline-sync')

function getAllPosts() {
    const targetURL = 'https://jsonplaceholder.typicode.com/posts'
    return fetch(targetURL).then(function (response) {
        return response.json()
    })
    
}

function run() {
    let userId = readLine.question('Please input your userid: ')
    let postId = readLine.question('Please input your postid: ')


    getAllPosts().then(function(posts) {
        const targetPost = posts.filter(function(post) {
            return post.userId == userId && post.id == postId
        })
        if(targetPost.length > 0) {
            console.log(targetPost);
        }else{
            console.log('not found');
        }
    })
}
run()

