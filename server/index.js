import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import session from 'express-session'
import KnexSessionStore from 'connect-session-knex'
import db from './controllers/config/knex'
import Debug from 'debug'
import DevOptions from './controllers/config/DevOptions'

import auth from './routes/auth'

const SessionStore = KnexSessionStore(session);

const debug = Debug('server:app');
const port = process.env.PORT || 5000;
const app = express();
const store = new SessionStore({
	knex: db,
	tablename: 'session'
})

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/dist', express.static('dist'));
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true,
	store: store
}))

DevOptions(app);

//ROUTES
app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV)); 


