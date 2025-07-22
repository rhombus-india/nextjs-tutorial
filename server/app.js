const express = require('express')
const cors = require('cors')

app = express()
app.use(express.json())
app.use(cors())
app.get("/", async (req,res) => {
    console.log("Get API Called")
    const data  = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    // res.send(posts) 
    res.send([...posts, {
    "userId": 999,
    "id": 9991,
    "title": "Lorem Ipsum",
    "body": "Lorem Ipsym"
  }])
})


var users = [{
  'id' : 1,
  'name' : 'john'
}]
app.get('/users', (req,res) => {
  console.log(users)
  res.send(users)
})

app.post('/users', (req,res) => {
  const data = res.body;
  console.log(data)
  users.push(data)
  res.send("Data Update").status(201)
})

app.listen(3001,() =>  console.log('Server is listening'))