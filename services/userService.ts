import userModel from "../models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


interface RegisterParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export const register = async ({ firstName, lastName, email, password }: RegisterParams) => {
    const findUser = await userModel.findOne({ email})

    if(findUser){
        return { data: "! المستخدم موجود مسبقا", statusCode: 400 }
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new userModel({ email, password: hashedPassword, firstName, lastName })
    await newUser.save();
    
    return { data: generateJWT ({firstName, lastName, email }), statusCode: 200 };
};

interface loginParams {
    email: string;
    password: string;
}

export const login = async ({email, password}: loginParams) =>{
    const findUser = await userModel.findOne({email})

    if(!findUser) {
        return { data: "الرقم السري أو الإيميل غير صحيح", statusCode: 400};
    }

    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if(passwordMatch){
        return {data : generateJWT({email, firstName: findUser.firstName, lastName: findUser.lastName}), statusCode: 200};
    }

    return { data: "الرقم السري أو الإيميل غير صحيح", statusCode: 400};

};

const generateJWT = (data:any) => {
    return jwt.sign(data, 'iSqUAkEpJRgMZMCHspvID0DZGcY0AZeD')
}