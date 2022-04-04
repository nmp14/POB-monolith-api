import express from 'express';

const expressApp = express();

expressApp.use('/', [
  express.json(),
  express.urlencoded({ extended: true }),
]);

export class Http { // eslint-disable-line import/prefer-default-export
  private app = expressApp;

  private _port: string;

  constructor(portNum: string) {
    this._port = portNum || '3006';
  }

  public set router(router: express.Router) {
    this.app.use(router);
  }

  public set port(port: string) {
    this._port = port;
  }

  public get port(): string {
    return this._port;
  }

  public init() {
    this.app.listen(this._port, () => {
      console.log(`Listening on port ${ this._port }`);
    });
  }
}
