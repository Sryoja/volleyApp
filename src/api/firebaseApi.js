import axios from "axios";


const instance = axios.create({
    baseURL: "https://mycite-426b2.firebaseio.com/voley/",
    withCredentials: true

})

const abc = {
    a: 1,
    time: "qwerty"
}

// export const req = () => { return instance({
//     url: "teams.json",
//     method: "POST",
//     data: abc,
//     headers: {
//         'Access-Control-Allow-Credentials': true,
//         'Content-Type': 'application/json'
//     }
// }).then(res => console.log(res))}
export const req = () => { return instance({
    url: "dodzeek.json",
    method: "get"
}).then(res => console.log(res))}