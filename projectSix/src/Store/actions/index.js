import Axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com`;
const FirebaseDB = `https://projectsix-94eec.firebaseio.com`;
const APIKey = `AIzaSyD0j5d-nnlerFI5p_ZmQv9NvlWoacDTLlc`
const REGISTER = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=`
const LOGIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=`
const TOKEN = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwOTBjZGI5MmIzOTZiNTQyM2JhYjYyOWM5ZTk4MmFkYzIxYmQxMTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdHNpeC05NGVlYyIsImF1ZCI6InByb2plY3RzaXgtOTRlZWMiLCJhdXRoX3RpbWUiOjE1NDQyMDczNDksInVzZXJfaWQiOiJvZzduRmRieUZyYU1Lam5EUnpsNFRnMUFyUk4yIiwic3ViIjoib2c3bkZkYnlGcmFNS2puRFJ6bDRUZzFBclJOMiIsImlhdCI6MTU0NDIwNzM0OSwiZXhwIjoxNTQ0MjEwOTQ5LCJlbWFpbCI6InJhcGhhZWxicmF2bzE5MDgxM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmFwaGFlbGJyYXZvMTkwODEzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NffHP5WXiNxsXyc3ZuYoXHPebAWYs0W17jz7FbT8_MaYzlVczvlRaBFjLpZPlDK2UQ_KyGC20Nq5NsSOssqGX9LsDKok2lTTV_ZRbkqoaOM174v7I1rtuy_-pVUFurq-xioQYI07jIM-nK6h_0pugSBuCqaW9aEtwCR-NR6tKhyIJnBh0twitZBRBpyOau_nvFrgL-kYEnYXV6lP4lFXcW1vdkraPRJosSUFaP5qv1Vmhlz7Voi_-U3_R9Foq-KJ284lczLbQigOp1Ez9bJq-OXKZr15WnzH9qgy2b9chT43hJCkXy2OGRu5jwhopSt4vTg4O1y4I8PKC4Pjdw_Qiw`
const REFRESH = `https://securetoken.googleapis.com/v1/token?key=`


export function getArticles(){
    const request = fetch(`${URL}/posts`)
    .then(response => response.json())
    .then(json => json)
    /*axios.get(`${URL}/posts`)
    .then(response => response.data)*/

    return {
        type: 'GET_ARTICLES',
        payload: request
    }
}

export function addPost(post){
const request = Axios({
        method: "POST",
        url: `${FirebaseDB}/posts.json`,
        data: post
    }).then(response => response.data)

    return{
        type: 'ADD_POST',
        payload: request
    }
}

export function getPosts(post){
    const request = Axios(`${FirebaseDB}/posts.json?auth=${TOKEN}`)
        .then(response => {
            let posts =[]

            for(let key in response.data){
                posts.push({
                    ...response.data[key],
                    id:key
                })
            }

            return posts
            
        })
    
    return{
        type: 'GET_POSTS',
        payload: request
    }
}
export function getPost(postId){

    const request = Axios(`${FirebaseDB}/posts/${postId}.json`)
        .then(response => {
            const post = {...response.data, id:postId}
            

            return post
            
        })
    
    return{
        type: 'GET_POST',
        payload: request
    }
}
export function updatePost(postId){

    const request = Axios({
        method: "PATCH",
        url: `${FirebaseDB}/posts/${postId}.json`,
        data: {title:"updated title",body: "updated body"}
    }).then(response => response.data)
    
    return{
        type: 'UPDATE_POST',
        payload: request
    }
}
export function deletePost(postId){

    const request = Axios({
        method: "DELETE",
        url: `${FirebaseDB}/posts/${postId}.json`
    }).then(response => response.data)
    
    return{
        type: 'DELETE_POST',
        payload: request
    }
}

export function registerUser(data){
    const request = Axios({
        method: "POST",
        url:`${REGISTER}${APIKey}`,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.data)

    return{
        type:"USER_REGISTER",
        payload: request
    }
}

export function loginUser(data){
    const request = Axios({
        method: "POST",
        url:`${LOGIN}${APIKey}`,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.data)

    return{
        type:"USER_LOGIN",
        payload: request
    }
}

export function refreshToken(REFRESHTOKEN){
    const request = Axios({
        method: "POST",
        url: `${REFRESH}${APIKey}`,
        data: `grant_type=refresh_token&refresh_token=${REFRESHTOKEN}`,
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }).then(response=>{
        return response.data
    }).catch(err=>{
        console.log('ops something wrong')
    })

    return{
        type:"REFRESH_USER",
        payload: request
    }
}
