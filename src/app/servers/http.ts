import express from 'express';

const expressApp = express();

expressApp.use('/', [
  express.json(),
  express.urlencoded({ extended: true }),
]);

export class Http { // eslint-disable-line import/prefer-default-export
  private app = expressApp;
  private _router: express.Router;
  private _port: string;

  constructor(portNum: string, router: express.Router) {
    this._port = portNum || '3006';
    this._router = router;
    this.useRouter();
  }

  public set router(router: express.Router) {
    this._router = router;
    this.useRouter();
  }

  public set port(port: string) {
    this._port = port;
  }

  public get port(): string {
    return this._port;
  }

  private useRouter() {
    this.app.use(this._router);
  }

  public init() {
    this.app.listen(this._port, () => {
      console.log(`Listening on port ${ this._port }`);
    });
  }
}
