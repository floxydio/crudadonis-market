 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Database from '@ioc:Adonis/Lucid/Database'
export default class UsersController {
    public async create({request, response} : HttpContextContract) {
        const inputUser = {
            nama: request.input("nama"),
            username: request.input("username"),
            password: request.input("password"),     
        }
         await Database.table("user").insert(inputUser)

        return response.status(200).json({
            code : 200,
            message : 'Sukses',
            data : inputUser
        })
    }
    
}
