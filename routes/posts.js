
const express = require('express')

const Post = require('../Model/model')

const router = express.Router()



// Post method
router.post('/', async (req, res) => {
    
    let newPost = new Post({
            title: req.body.title,
            description: req.body.description
        })

        try {
            const saveData = await newPost.save()
            res.status(200).json(saveData)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
})


//Get all items Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Post.find()
        res.send(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Get one item by ID Method
router.get('/getOne/:id', async (req, res) => {

    try {
        const data = await Post.findById(req.params.id)
        res.send(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})


//Update one item by ID Method
router.patch('/update/:id', async (req, res) => {

    try {

        const id = req.params.id
        const updatedData = req.body
        const options = {new : true}


        const result = await Post.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})


//Delete one item by ID Method
router.delete('/delete/:id', async (req, res) => {

    try {

        const id = req.params.id
        const data = await Post.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)

    } catch (error) {

        res.status(400).json({message: error.message})

    }

})






module.exports = router