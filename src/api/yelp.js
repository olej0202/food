import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer E4ZLGR_MKbZJvxBpYTIPqTuG20xNFJ_wPSjmjukI1x2fA0lV7efjbwBP8ecjdTtlK6TiJkvWSMgiQpyop5OdAFUbcSjw-JihDK2Qk_GmgssMTHCbHql8IslWFw9yXnYx'
    }
});