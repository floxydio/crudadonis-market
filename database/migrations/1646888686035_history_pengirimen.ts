import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class HistoryPengirimen extends BaseSchema {
  protected tableName = 'history_pengirimen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("nama")
      table.string("barang")
      table.string("status")
      table.string("ke")
      table.string("dari")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
