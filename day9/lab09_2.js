//using PROMISE and async await
/*


GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1

*/
const readLine = require('readline-sync')


async function getAllPosts() {
    const targetURL = 'https://jsonplaceholder.typicode.com/posts'
    return new Promise(function(resolve, reject) {
        const allPosts = fetch(targetURL)
        resolve(allPosts)
    })
}

async function run() {
    const value = await getAllPosts()
    let valueJson = await value.json()
    // console.log(valueJson);

    let arrayObj = valueJson
    let userId = readLine.question('Please input your userid: ')
    let postId = readLine.question('Please input your postid: ')

    const targetPost = arrayObj.filter(function(post) {
        return post.userId == userId && post.id == postId
    })
    if(targetPost.length > 0) {
        console.log('Found post\n', targetPost);
    }else{
        console.log('not found');
    }
  

}

run()
