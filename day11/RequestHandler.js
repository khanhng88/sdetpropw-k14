const Post = require('./Post')
class RequestHandler {

    async printAllPost(userId) {
        console.log('========Print all post========');
        let posts = await this.getAllPosts()
        let userPosts = posts.filter(function(post) {
            return post.userId == userId
        })
        // console.log(posts);
        console.log('user id: ', userId);
        if(userPosts.length == 0) {
            console.log('Not found posts');

        }else {
            for (const userPost of userPosts) {
                console.log('\nUser postbody--------------\n', userPost.body);
                console.log('-------------------');
            }
        }
        
    
    }

    async getAllPosts() {
        const targetURL = 'https://jsonplaceholder.typicode.com/posts'
        const allPosts = await fetch(targetURL)
        const jsonResult = await allPosts.json()
        const result = []
        for (const value of jsonResult) {
            result.push(new Post(value.userId, value.id, value.title, value.body))
        }
    
        return result
    }

    async printTargetPost(userId, postId) {
        console.log('=======Print target post=========');
        let posts = await this.getAllPosts()
        let userPosts = posts.filter(function(post) {
            return post.userId == userId && post.postId == postId
        })
        console.log('user id: ', userId);
        console.log('post id: ', postId);
        if(userPosts.length == 0) {
            console.log('not found post');
        }else{

        for (const userPost of userPosts) {
            console.log('\nTarget post body:---------\n ', userPost.body);
            console.log('--------------------------');
        }
    }
        
    }
}
module.exports = RequestHandler