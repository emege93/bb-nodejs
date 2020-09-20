const express =  require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: "mi titulo dinamico"})
})

router.get('/servicios', (req,res) => {
    res.render('services', {title: "mi titulo dinamico de servicios"})
})



module.exports = router;