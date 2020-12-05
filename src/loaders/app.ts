import express from 'express';
import { whiteBright } from 'chalk';
import routers from '../routers';
import middleware from '../middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerJSDocOptions, swaggerUiOptions } from '../config/swagger';

function getApp() {
    const app = express();

    app.use(middleware);

    app.use('/docs',
        swaggerUi.serve,
        swaggerUi.setup(
            swaggerJSDoc(swaggerJSDocOptions), 
            swaggerUiOptions));

    app.use('/', routers);

    //Redirect unknown router to docs
    app.all('*', (req, res) => {
        res.redirect(301, '/docs')
    })

    return app
}

export default getApp();