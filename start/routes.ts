/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import MarketsController from 'App/Controllers/Http/MarketsController'
import UsersController from 'App/Controllers/Http/UsersController'

Route.group(() => {

  Route.get("/users", async () => {
    return Database.from("user").select("*")
  })

  Route.get("/users/:id", async ({ params }) => {
    return Database.from("user").where("id", params.id).first()
  })


  Route.post("/create/users", async (ctx) => {
    return new UsersController().create(ctx)
  })
  Route.delete("/users/delete/:id", async ({ params }) => {
    return Database.from("user").where("id", params.id).delete()
  })

  Route.post("/create/market", async (ctx) => {
    return new MarketsController().create(ctx)
  })

  Route.get("/market", async (ctx) => {
    return new MarketsController().findalldata(ctx)
  })
}).prefix("v2")


Route.get('/', async () => {
  return { hello: 'world' }
})
