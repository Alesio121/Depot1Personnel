import bodyParser from 'body-parser'
import express from 'express'
import mysql from 'mysql2'

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
port: '3307',
database: 'ecom',
}).once('connection',(stream) => {
    console.log('Ah, we have our first user!')
})

// INITIALISATION DE L'APPLICATION EXPRESS
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

// CREATION D'UNE 'ROUTE' AVEC LA METHODE HTTP
// GET DONT LE CHEMAIN EST '/'
app.get('/', function (httpRequest, httpResponse) {
    connection.query('select * from commentaire', (err, result, fields) => {
    // LOG DE LA REQUETE ENTRANTE
    console.log('object request: ', httpRequest)
    // ENVOIE DE LA REPONSE HTTP
    httpResponse.render('pages/index', {commentaire: result})
    })
})

app.get('/EastBlue', (req, res) => {
    res.render('pages/EastBlue')
})

app.get('/Alabasta', (req, res) => {
    res.render('pages/Alabasta')
})

app.get('/Skypiea', (req, res) => {
    res.render('pages/Skypiea')
})

app.get('/WaterSeven', (req, res) => {
    res.render('pages/WaterSeven')
})
app.get('/commentaire', (req, res) => {
    res.render('pages/commentaire')
})
app.post('/commentaire', (req, res) => {
    console.log(req.body);
    res.render('pages/commentaire')
})

app.get('/figurine', (req, res) => {
    res.render('pages/figurine')
})

figurine
app.listen('3033')
