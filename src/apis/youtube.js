import axios from 'axios';

const KEY = 'AIzaSyD1f-mp6Et9pgvn5iptx3DG6AGwgJgkCqg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    } 
    
});
