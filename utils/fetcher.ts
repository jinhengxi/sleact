import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, { withCredentials: true })
    .then((response) => response.data)
    .catch((error) => console.log(error));

export default fetcher;
