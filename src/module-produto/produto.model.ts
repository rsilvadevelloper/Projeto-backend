import {Knex} from 'knex'
import { KnexService } from "../service/knex"

export class produto {
  
  private db: Knex
  
  constructor (knexService: KnexService) {
   this.db = knexService.obterConexao()
   
  }
  
async getall () {
  return this.db('produtos').select()
};

async store (params: any) {

  return this.db ( 'produtos').insert(params)
};

}