import {config} from "./modules/config";
import service from './modules/service';
import './modules/helloModule';
import './modules/react.jsx';
import './styles/styles.css';
import json from '@ass/json'
import image from '@ass/google.svg'
import './styles/index.less'
import './styles/index.scss'
import './babel'

console.log('config', config);
console.log('json', json);
const serv = new service('helloBoba', image);
serv.log();
