import axios from 'axios';
const API_URL = 'http://api.everest-app.com/api/';
//const API_URL = 'http://localhost/toko/public/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'register', {
            username: user.username,
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name
        });
    }
}
export default new AuthService();