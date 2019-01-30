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
    }
}