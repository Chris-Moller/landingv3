const axios = require('axios').default;

export const masterJobsList = async () => {
    const listRes = await axios.get("https://boards-api.greenhouse.io/v1/boards/layrlabs/jobs");
    return listRes.data.jobs;
}