import { Server, Model, Response } from 'miragejs';

const makeServer = () => {
    let server = new Server({
        models: {
            project: Model
        },

        routes() {
            this.namespace = 'api'
            this.urlPrefix = 'http://localhost:3000'

            this.get('/projects', () => {
                return Response(200);
            });

            this.passthrough('https://api.adviceslip.com/advice');
        }
    });

    return server;
};

export default makeServer;