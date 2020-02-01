import {config} from "./modules/config";
import service from './modules/service';
import './modules/helloModule';
import './styles/styles.css';
import json from './assets/json'

console.log('config', config);
console.log('json', json);
const serv = new service('helloBoba');
serv.log();
