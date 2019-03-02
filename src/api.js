import axios from 'axios';

export default axios.create({
    // baseURL: `http://localhost:8080/api/`
    baseURL: `https://nodejs-mongo-persistent-instazz.7e14.starter-us-west-2.openshiftapps.com/api/`
    
});
