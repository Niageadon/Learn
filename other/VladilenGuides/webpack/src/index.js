import {config} from "./modules/config";
import service from './modules/service';
import './modules/helloModule';
import './styles/styles.css';

console.log(config);
const serv = new service('helloBoba');
serv.log();
