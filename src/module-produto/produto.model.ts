import {knex} from 'knex'
import { knexService } from "../../service/knex';

export class produto {
  
  private db: knex
  
  constructor (knexService: KnexService) {
   this.db = knexService.obterConexao()
   
  }
  
 }

getAll = async () => {
  return this.db('produtos').select():
};

store = async (params: any) => {

  return this.db ( 'produtos').insert(params):
};
