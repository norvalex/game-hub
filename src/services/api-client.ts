import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "322d405b21ba49509ca861fb0107f030"
    }
})