import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';


const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '362cddc1ebmsh5dc5074b41a6966p1269ecjsn48f47394f3ab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI=async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}