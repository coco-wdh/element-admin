const express = require('express');

const app = express();

app.use(require('cors')())

app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/element-admin')
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String }
}))

app.get('/', async (req, res) => {
  res.send('index')
})
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
app.get('/api/articles', async (req, res) => {
  const article = await Article.find()
  res.send(article)
})
app.delete("/api/article/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})
app.get("/api/article/:id", async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
app.put("/api/article/:id", async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})
app.listen(3000, () => console.log('http://localhost:3000'));
