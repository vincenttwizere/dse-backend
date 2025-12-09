import {db} from '../config/db.js';

// get all items 

export const getAllItems = ( req, res) => {

    db.query( " SELECT * FROM items ", (err, results) => {

        if(err) return res.status(500).json({error: `Failed to fetch items: ${err}`});

        if(results.lenght === 0) return res.status(400).json({ message: `No items found`});

        return res.status(200).json(results);
    })
}

// get item by id

export const getItemById = (req, res) => {

    const {id} = req.params;

    db.query("SELECT * FROM items WHERE id = ?", [id], (err, results) => { 

        if(err) return res.status(500).json({error: `Failed to fetch item: ${err}`});
        if(results.length === 0) return res.status(404).json({message: `Item not found`});
        return res.status(200).json(results[0]);
    });

}

// create a new item

export const createItem = (req, res) => {

    const { name, description, price } = req.body;

    // validate input

    if(!title || !description){

        return res.status(400).json({ message: "Title and description are required" });
    }

    const query = " INSERT INTO items ( title, description) VALUES (?, ?) ";
    db.query(query, [title, description], (err, results) => {

        if(err) return res.status(500).json({error: `Failed to create item: ${err}`});

        return res.status(201).json({ message: "Item created successfully", itemId: results.insertId });
    });
}

//updating item

export const updateItem = (req, res) => {

    const { id } = req.params;
    const { title, description } = req.body;

    db.query(
        "UPDATE items SET title = ?, description = ? WHERE id = ?",
        [title, description, id],
        (err, results) => {

            if (err) return res.status(500).json({ error: `Failed to update item: ${err}` });

            return res.status(200).json({ message: "Item updated successfully", results });
        }
    );
};

// delete item

export const deleteItem = (req, res) => {

    const { id } = req.params;

    db.query(" DELETE FROM items WHERE id = ? ", [id], (err, results) => {

        if(err) return res.status(500).json({error: `Failed to delete item: ${err}`});
        return res.status(200).json({ message: "Item deleted successfully" });

    });
}