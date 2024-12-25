const express = require('express');
const app = express();
const PORT = 3000

const plNames =['javaScript','C++','Java','Python','Ruby','Flutter','etc.']
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.status(200).render('home', {pageTitle: "home page", plNames : plNames})
});
app.get('/contact', (req,res)=>{
    res.status(200).render('contact', {pageTitle: "contact page"})
});
app.get('/about',(req,res)=>{
    res.status(200).render('about', {pageTitle: "about page"})
});
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});