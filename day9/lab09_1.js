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
        console.log('Target post is: ');
        if(targetPost.length > 0) {
            for (const each of targetPost) {
                console.log(each.body);
            }
        }else{
            console.log('not found');
        }

        const userPosts = posts.filter(function(post) {
            return post.userId == userId
        })

        console.log('\nUser posts: ');

        if(userPosts.length > 0) {
            for (const each of userPosts) {
                console.log(each.body);
                console.log('------------\n');
            }
        }else{
            console.log('not found');
        }
    })
}
run()

