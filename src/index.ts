import config from 'config';
import { HTTP } from './app';

const app = new HTTP.Http(config.get('PORT'));

app.init();
