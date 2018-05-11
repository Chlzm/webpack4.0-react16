const path =require('path')
const express =require('express')
const history = require('connect-history-api-fallback');
// const ReactSSR = require('react-dom/server')
// const serverEntry = require('./dist/server-entry').default
const app = express()
app.use('/',history());
app.use('/', express.static(path.join(__dirname)))
app.use(express.static(path.join(__dirname, 'dist')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.get('*', (req, res) => {
//     const appStr = ReactSSR.renderToString(serverEntry)
//     res.render('index',{
//         content: appStr,
//         version: Date.now().toString()
//     })
// })
app.get('/', (req, res) => {
    //const appStr = ReactSSR.renderToString(serverEntry)
    res.status(200).render('index', {
        title: '首页'
    })
})
app.listen(3000, () => {
    console.log('server is listening on 3000')
})