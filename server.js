const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21savage': {
        'age': 29,
        'birthName': 'Sir Savage, the 21st',
        'birthLocation': 'London, England'
    },
    'chancetherapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') // start wherever server.js is and find index
})

app.get('/api/:rapperName', (req,res)=>{
    const rapperName = req.params.rapperName.toLowerCase()
    const rapperInfo = rappers[rapperName] || rappers['dylan']
    res.json(rapperInfo)

    // if (rappers[rapperName]){
    //     res.json(rappers[rapperName])
    // } else {
    //     res.json(rappers['Dylan'])
    // }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}, better go catch it.`)
})