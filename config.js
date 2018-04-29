const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(){
    
};

export default{
    port: env.PORT || 8080
};

