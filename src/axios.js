//this is a library we use to make requests to any server or end point
import axios from 'axios';

/*base url to make requests tp the movie database */

const instance  = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});  //the above appends the url to the front of the requests 
export default instance;