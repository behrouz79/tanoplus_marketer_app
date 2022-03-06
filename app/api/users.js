import http from './';

export const login = async (user) => {
    try{
        const {data} = await http.post(`${http.url}/marketer/login/`,
            JSON.stringify(user)
        );
        return data;
    }catch(err){
        console.log(err)
    }
        
}

export const verify = async (code) => {
    try{
            const {data} = await http.post(`${http.url}/marketer/verify/`,
        JSON.stringify(code)
    );
    return data;
    }catch(err){
        console.log(err)
    }

}