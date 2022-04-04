import config from 'config';
import { HTTP } from './app';
import router from './app/services';

const app = new HTTP.Http(config.get('PORT'), router);

app.init();
