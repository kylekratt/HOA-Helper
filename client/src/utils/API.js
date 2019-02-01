import axios from "axios";

export default {
    login: function(userData) {
        return axios.post("/api/passport/login", userData)
    },
    signup: function(userData) {
        return axios.post("/api/passport/signup", userData)
    },
    list: function(id) {
        return axios.get("/api/resident/list/"+id)
    },
    add: function(resData) {
        return axios.post("/api/resident/add", resData)
    },
    display: function(resId) {
        return axios.get("/api/resident/"+resId)
    },
    remove: function(resId) {
        return axios.delete("/api/resident/"+resId)
    },
    update: function(resData) {
        return axios.post("/api/resident/update", resData)
    },
    send: function(mailData) {
        return axios.post("/api/mail/send", mailData)
    },
    infract: function(infData){
        return axios.post("/api/infraction/add", infData)
    }
}