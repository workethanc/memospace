import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import session from 'express-session';
import api from './routes';

const devPort = 4000;
const app = express();
const port = 3000;
 
app.use('/', express.static(path.join(__dirname, './../public')));
app.use(bodyParser.json());
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));

/* handle error */
app.use((err, requ, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broken!!');
});

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
 
app.listen(port, () => {
    console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}