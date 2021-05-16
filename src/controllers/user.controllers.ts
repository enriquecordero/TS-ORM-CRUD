import {Request,response,Response} from 'express'
import { getRepository } from 'typeorm'
import {User} from '../entity/User'

class UserController{

    public async getUsers (req:Request, res:Response): Promise<Response>{
        const users = await getRepository(User).find();
        return res.json(users);
    }

    public async getUser (req:Request, res:Response): Promise<Response>{
        const results = await getRepository(User).findOne(req.params.id);
        return res.json(results);
    }

    public async createUsers (req:Request, res:Response): Promise<Response>{
        console.log(req.body);
        const newUsers =  getRepository(User).create(req.body)
        const results = await getRepository(User).save(newUsers)
        return res.json(results);
    }

    public async updateUsers (req:Request, res:Response): Promise<Response>{
     
        const user =   await getRepository(User).findOne(req.params.id);
        if (user){
            getRepository(User).merge(user,req.body);
            const results = await getRepository(User).save(user);
            return res.json(results);
        }
        
     return res.status(404).json({msg:'Not user found'})   
    }

    public async deleteUser (req:Request, res:Response): Promise<Response>{
        const results = await getRepository(User).delete(req.params.id);
        return res.json(results);
    }







}
export const userController = new UserController();
/*
export const getUsers = async (req:Request, res:Response): Promise<Response> =>{
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUser = async (req:Request, res:Response): Promise<Response> =>{
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
}


export const createUsers = async (req:Request, res:Response): Promise<Response> =>{
    console.log(req.body);
    const newUsers =  getRepository(User).create(req.body)
    const results = await getRepository(User).save(newUsers)
    return res.json(results);
}

*/