
import 'dotenv/config'
import express from 'express'

const app = express()

const port =process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hey Saamir this side")
})
app.get("/do-work", (req, res) => {
    res.send("Okay! I got you!")
})
app.get("/instagram", (req, res) => {
    res.send("rangrej.saamir")
})

app.use(express.json())

let bikeData = []
let nextId = 1
//add a new bike
app.post('/bikes', (req, res)=>{
const{name, price}= req.body
const newBike= {id: nextId++, name, price}
bikeData.push(newBike)
res.status(201).send(newBike)
console.log("newBike",newBike)
})
// get all bikes
app.get('/bikes', (req, res)=>{
    res.status(200).send(bikeData)
})

//find a particular bike
app.get('/bikes/:id', (req, res)=>{
    const bike =bikeData.find(b=> b.id===parseInt(req.params.id))
    if (!bike) {
        return res.status(404).send('bike not found')
    }
    res.status(200).send(bike)
})

//update bike
app.put('/bikes/:id', (req, res)=>
{
    let bike =bikeData.find(b=> b.id===parseInt(req.params.id))
    if (!bike) {
        return res.status(404).send('bike not found')
    }
    const{name, price}= req.body
    bike.name= name;
    bike.price= price;
    res.status(200).send(bike)
})

//delete bike
app.delete('/bikes/:id',(req, res)=>{
    const index= bikeData.findIndex(b=>b.id===parseInt(req.params.id))
    if (index==-1) {
        return res.status(404).send('bike not found')
    }
    bikeData.splice(index,1)
      res.status(202).send('deleted')
})







app.listen(port, () => {
    console.log(`Server is running at port: ${port}....`)
})