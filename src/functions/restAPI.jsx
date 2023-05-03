import axios from 'axios';
 axios.defaults.baseURL = "http://localhost:4000";

const restAPI = async (path, method, databody) => {

    try {
        // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
        let options = {
            url:path,
            method: method,
            data: databody
        }
        let res = await axios(options)
        return res.data
    }
    catch (err) {
        console.log("err = ",err);
        throw err;
    }
}

export default restAPI;