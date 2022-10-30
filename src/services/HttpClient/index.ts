import axios from 'axios'

//attach authorization token and other common stuffs

// let token=''
// token = localStorage.getItem('token') || ''

export default axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        "Content-Type": "application/json"
    }
})
