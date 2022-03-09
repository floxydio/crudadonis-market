import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'


export default class MarketsController {
    public async create({request,response}: HttpContextContract) {
        const inputUser = {
            nama: request.input("nama"),
            kota: request.input("kota"),
            pengirim: request.input("pengirim"),
            harga : request.input("harga")     
        }
        try {
            const marketInput = await Database.table("markets").insert(inputUser)
            response.status(200).json({ code: 200, status: 'success', data: inputUser })
            return marketInput
        } catch(err) {
            return response.status(500).json({ code: 500, status: 'error', message: err.message })
        }
    }

    public async findalldata({response}: HttpContextContract) {
    
        const marketdata = await Database.from("markets").select("*")
        response.status(200).json({ code: 200, status: 'success', data: marketdata })
    }
}
