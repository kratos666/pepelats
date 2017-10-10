import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import history from 'connect-history-api-fallback';


const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(history());
app.use('/dist', express.static('dist'));

/* devOptions(app);

//ROUTES
app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV)); */


	import webpack from 'webpack'
	import webpackMiddleware from 'webpack-dev-middleware'
	import webpackHotMiddleware from 'webpack-hot-middleware'
	import webpackConfig from '../webpack.config.dev'

if(process.env.NODE_ENV === 'development'){
	const compiler = webpack(webpackConfig)
	app.use(webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	}))
	app.use(webpackHotMiddleware(compiler))
}

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, ()=> console.log('Server listener on port =', port, 'ENV = ', process.env.NODE_ENV))