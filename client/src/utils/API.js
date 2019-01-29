import axios from "axios";

export default {
    login: function(userData) {
        return axios.post("/api/passport/login", userData)
    },
    signup: function(userData) {
        return axios.post("/api/passport/signup", userData)
    }
}