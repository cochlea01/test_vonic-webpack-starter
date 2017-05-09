// 公用的http请求方法
import axios from 'axios'
import config from 'service/config'

/*在创建实例时设置配置默认值*/
var instance = axios.create({
   baseURL:config.baseURL,
   withCredentials:true
});

export default instance;