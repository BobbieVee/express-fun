const express = require('express');
const nunjucks =require('nunjucks');
const path = require('path');
const routes = require('./routes')


const port = process.env.PORT || 3000;
const noCache = process.env.NOCACHE;

console.log('noCache = ', {noCache: noCache})

const app = express();
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: noCache} );
app.use(express.static(path.join(__dirname, 'node_modules')));



app.use('/', routes);

app.listen(port, ()=> {
	console.log(`Listening on port ${port}`);
});