
import axios from "axios";

export const getList = (phone) => axios.get(`/api/listByPhone?phone=${phone}`)

