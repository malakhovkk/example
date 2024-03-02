import axios from "axios";

export const baseUrl = 'https://fakerapi.it/api/v1'

const $api = axios.create({
  baseURL: baseUrl
});


$api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
$api.defaults.headers.put["Content-Type"] = "application/json;charset=utf-8";
$api.defaults.headers.delete["Content-Type"] = "application/json;charset=utf-8";

export { $api };