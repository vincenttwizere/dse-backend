import {db} from '../config/db.js'

export const additem = (req, res) => {
    
    const { title, description } = req.body;
    if (!title , !description ) return res.json({ message: `the item is not added`});

    db.query(" INSERT INTO items ( title, description) VALUE (?, ?)", [title, description], (err) => {

        if (err) return res.json({

            message: `Your product was not added`
        });

        return res.json({ message: `The product was created`})
    })
}