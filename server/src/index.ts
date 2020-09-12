import express from 'express';
// import path from 'path';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import 'dotenv/config';

const SERVER_PORT = process.env.PORT || 8080;
const SERVER_HOST = process.env.HOST || 'localhost';
const APP_ID = process.env.APP_ID || 'mobileapp-2020-09';
// Ceci doit rester secret
const MASTER_KEY = process.env.MASTER_KEY || 'F23xUQdRmQLQwxV5N6a74kqF8aPqIM9F';
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/mobileapp-2020-09';
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const APP_NAME = process.env.APP_NAME || 'mobileapp';
const { DASHBOARD_USER, DASHBOARD_PASSWORD } = process.env;

const SERVER_URL = `http://${SERVER_HOST}:${SERVER_PORT}/parse`;

const app = express();

// app.use(express.static(path.join(__dirname, '/public')));

const parseServerAPI = new ParseServer({
    databaseURI: DATABASE_URI,
    // cloud: path.resolve(__dirname, 'cloud/main.js'),
    appId: APP_ID,
    masterKey: MASTER_KEY,
    serverURL: SERVER_URL,
    // javascriptKey: 'my-js-key',
});

const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: SERVER_URL,
            appId: APP_ID,
            masterKey: MASTER_KEY,
            appName: APP_NAME,
        },
    ],
    users: [
        {
            user: DASHBOARD_USER,
            pass: DASHBOARD_PASSWORD,
            apps: [{ appId: APP_ID }],
        },
    ],
});

app.use('/parse', parseServerAPI);

if (IS_DEVELOPMENT) {
    app.use('/dashboard', dashboard);
}
app.listen(SERVER_PORT, () => {
    console.log(`listen to the server: http://${SERVER_HOST}:${SERVER_PORT}/dashboard`);
});
