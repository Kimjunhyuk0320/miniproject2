import axios from "axios";

export const imageUpload = (file, headers) => axios.post('/api/file', file, headers)