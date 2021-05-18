import axios from 'axios'
const instance = axios.create();

instance.defaults.baseURL = "https://disease.sh"
instance.defaults.timeout = 122500;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();


const get =async  (url) => {
    try
    {
        let res = await instance.get(url, {cancelToken: source.token})
          return res.data
    } catch (e)
    {
    console.log("erro",e)
   }

// await instance.get(url, {
//   cancelToken: source.token
// })
//     .then((res) => {
//     console.log("res==>",res.data)
//     return res.data
// })
// .catch(function (thrown) {
//     console.log("thrown===>",thrown)
//   if (axios.isCancel(thrown)) {
//     console.log('Request canceled', thrown.message);
//   } else {
//     // handle error
//   }
// })
};


// Execute before any method get Executed
instance.interceptors.request.use(async (config) => {
    // let token = await getToken();
    // if (token !== null && token !== "") {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    config.headers['Access-Control-Allow-Origin'] = "*";
    return config;
}, function (err) {
    return Promise.reject(err);
});


// Execute after any method get Executed
instance.interceptors.response.use(response => {
    return response;
}, async (error) => {
        return Promise.reject(error);
});


export {
    get
}
