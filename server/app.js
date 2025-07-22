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

app.listen(3001,() =>  console.log('Server is listening'))