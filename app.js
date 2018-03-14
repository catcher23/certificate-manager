import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import bb from 'express-busboy';
import pg from 'pg';
import format from 'pg-format'
import SourceMapSupport from 'source-map-support';
import routes from './routes';

const app = express();
bb.extend(app);

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 3001;

SourceMapSupport.install();

app.use('/', routes);

// catch 404
app.use((req, res, next) => {
  var filePath = "client/build/index.html"
  res.status(404).sendFile(filePath, { root: __dirname });
});
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});