import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'    
import History from 'App/Models/HistoryPengiriman'
import { DateTime } from 'luxon'

export default class HistoryPengirimenController {
    public async create({response, request}: HttpContextContract) {
        const history = await History.create({
            nama : request.input("nama"),
            barang : request.input("barang"),
            ke : request.input("ke"),
            dari : request.input("dari")
            
        })

       const db = await history.save()
        response.status(200).json({
        status : 200,
        data : history,
        message : 'Successfully Create'
    })
        return db
    }

    public async updateStatus({params, response, request}: HttpContextContract) {
        const id = params.id
        const history = await History.query().where('id', id).first()
        if (!history) {
            return response.status(404).json({
                status : 404,
                message : 'Not Found'
            })
        }
        const update = await history.merge({
            nama: request.input("nama"),
            barang: request.input("barang"),
            ke: request.input("ke"),
            status: request.input("status"),
            updatedAt:  DateTime.local()

        })

        await history.save()
        response.status(200).json({
            status : 200,
            data : update,
            message : 'Successfully Update'
        })
        return update
    }

    public async findAllData({response}: HttpContextContract) {
        const history = await History.all()
        response.status(200).json({
            status : 200,
            data : history,
            message : 'Successfully Get All Data'
        })
        return history
    }
}
