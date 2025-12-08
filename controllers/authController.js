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
