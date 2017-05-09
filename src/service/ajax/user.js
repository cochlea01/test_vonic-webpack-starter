import http from 'service/http';

export default{
    getUserInfo(){
        return http.get('/user/info');
    }
}