import {config} from "./modules/config";
import service from './modules/service';
import './modules/helloModule'

console.log(config);
const serv = new service('helloBoba');
serv.log();