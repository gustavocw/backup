import * as jwt from 'jsonwebtoken';

export const generateToken = (params = {}) =>{
    return jwt.sign(params, "8297a83ba8203dab9b11428cc425c998", {
        expiresIn:"20d"
    });
};
