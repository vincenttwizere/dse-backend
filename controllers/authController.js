import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ message: "Error hashing password" });
        }

        // Insert the user
        db.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hash],
            (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Error registering user", error: err });
                }

                return res.status(201).json({
                    message: "User registered successfully",
                    userId: result.insertId,
                });
            }
        );
    });
};

// login

export const login = (req, res) =>{
    const { email, password } = req.body;

    //  check if the user exist in database

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {

    if (err) return res.json({ err:  `Error occur ${err}` });

    if(results.length === 0) return res.json({ message: "User not found" });
  });

//   compare  entered password  and the one in the database

bcrypt.compare(password, results[0].password, (err, isMatch) => {

    if (err) return res.json({ message: "Error comparing password" });
    if (!isMatch) return res.json({ message: "Incorrect password" });

    // create JWT token
    const token = jwt.sign(
        { id: results[0].id, email: results[0].email },
        "your_jwt_secret_key",
        { expiresIn: "1h" }
    );

    return res.json({
        message: "Login successful",
        token
    });

});

}