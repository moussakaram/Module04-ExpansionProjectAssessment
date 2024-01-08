import db from "../config/db.js"    
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


// register new user

export const register = (req, res) => {
    const checkUser = "SELECT * FROM users WHERE username=? OR email=?";
    db.query(checkUser, [req.body.username, req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");
  
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = typeof req.body.password === 'string' ? bcrypt.hashSync(req.body.password, salt) : null;
  
        if (!hashedPassword) {
            return res.status(400).json("Invalid password format");
        }
  
        const insertUserQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
        const values = [req.body.username, req.body.email, hashedPassword];
  
        db.query(insertUserQuery, values, (err, data) => {
            if (err) return res.json(err);
            res.status(200).json("User has been created");
        });
    });
  };

  export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username =?";
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.json(err);
      if (!data.length) return res.status(404).json("User not found");
  
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (!isPasswordCorrect) return res.status(400).json("Invalid password");
      const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET);
      const { password, ...other } = data[0];
      res
        .cookie(
          "access_token",
          token,
          { expires: new Date(Date.now() + 100 * 1000) }, 
          {
            httpOnly: true,
          }
        )
        .status(200)
        .json(other);
    });
  };
