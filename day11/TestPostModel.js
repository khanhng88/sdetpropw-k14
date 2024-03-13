const readLine = require('readline-sync')
const RequestHandler = require('./RequestHandler')

test()
async function test() {
    let requestHandler = new RequestHandler();
    console.log(await requestHandler.getAllPosts());
    let userId = readLine.question('Please input your userid: ')
    let postId = readLine.question('Please input your postid: ')
    await requestHandler.printAllPost(userId)
    await requestHandler.printTargetPost(userId, postId)
}