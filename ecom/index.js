import express from 'express'

// INITIALISATION DE L'APPLICATION EXPRESS
const app = express()
// CREATION D'UNE 'ROUTE' AVEC LA METHODE HTTP
// GET DONT LE CHEMAIN EST '/'
app.get('/', function (req, res) {
    // LOG DE LA REQUETE ENTRANTE
    console.log('object request: ', httpResponse)
    // ENVOIE DE LA REPONSE HTTP
    httpResponse.send('Hello les BTS')
})

app.listen('3033')
