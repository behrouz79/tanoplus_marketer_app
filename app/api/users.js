import http from './';

export const login = async (user) => {
    try{
        const {data} = http.post(`${http.url}/marketer/login/`,
            JSON.stringify(user)
        );
    } catch (err) {

    }
}