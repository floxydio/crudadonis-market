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
import HistoryPengirimenController from 'App/Controllers/Http/HistoryPengirimenController'
import MarketsController from 'App/Controllers/Http/MarketsController'
import UsersController from 'App/Controllers/Http/UsersController'

Route.group(() => {
  Route.post("/create/users", async (ctx) => {
    return new UsersController().create(ctx)
  })
  Route.post("/login", async (ctx) => {
    return new UsersController().login(ctx)
  })

  // Market

  Route.post("/create/market", async (ctx) => {
    return new MarketsController().create(ctx)
  })
  Route.get("/market", async (ctx) => {
    return new MarketsController().findalldata(ctx)
  })
  Route.delete("/market/:id", async (ctx) => {
    return new MarketsController().delete(ctx)
  })
  Route.put("/market/edit/:id", async (ctx) => {
    return new MarketsController().edit(ctx)
  })

  // Pengiriman
  Route.get("/allhistory", async(ctx) => {
    return new HistoryPengirimenController().findAllData(ctx)
  })

  Route.post("/history", async(ctx) => {
    return new HistoryPengirimenController().create(ctx)
  })

  Route.put("/change-status/history/:id", async(ctx) => {
    return new HistoryPengirimenController().updateStatus(ctx)
  })
}).prefix("v2")


Route.get('/', async () => {
  return { hello: 'world' }
})
