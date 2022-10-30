import HttpClient from './HttpClient'
import backendconstant from './backendconstant'

const {login}=backendconstant

//export API call for posts route

export default {

    // //get all posts
    // getAllPosts(){       
    //     return HttpClient.get(posts)
    // },
    // //get post by Id
    // getPostById(id:string){
    //     return HttpClient.get(`${posts}/${id}`)
    // },
    // create a new post
    create(payload:{email:String, password:String}){
        return HttpClient.post(login,{...payload})
    }, 
}