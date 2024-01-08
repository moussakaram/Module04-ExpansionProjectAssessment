import db from "../config/db.js"    



//get all products
export const getProducts =(req,res)=>{
    const q = "SELECT * FROM products";
  
    db.query(q, (err, data) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      return res.json(data);
    });


}


//create new product

export const createProduct = (req,res)=>{
    const q="INSERT INTO products (`title`, `category`,`description`,`price`,`supplier`,`img`) VALUES(?)";
    const values =[req.body.title,
        req.body.category,
        req.body.description,
        req.body.price,
        req.body.supplier,
        req.body.img
        ];

    db.query(q,[values],(err,data)=>{
        if (err) {
            console.error("Error executing MySQL query:", err);
            return res.json(err);
        }
        console.log("Data from MySQL:", data);
        return res.json("Products has been created ");
    })

}


//get produvt by id 

 export const getProduct = (req,res)=>{
    const q="SELECT * FROM products WHERE id=?";
    const values =[req.params.id];
 
    db.query(q,[values],(err,data)=>{
        if (err) {
            console.error("Error executing MySQL query:", err);
            return res.json(err);
        }
        console.log("Data from MySQL:", data);
        return res.json(data);
    })
 }


//delete product 
export const deleteProduct = (req, res) => {
    app.delete("/products/:id",(req, res) => {
        const productId = req.params.id;
        const q= "DELETE FROM products WHERE id=?"
        db.query(q,[bookId], (err, data) => {
            if (err) return res.json(err);
            return res.json("products has been deleted Successfully")
        })
      })
};


//update products 
export const updateProducts =(req,res)=>{
    app.put("/products/:id",(req, res) => {
        const bookId = req.params.id;
        const q= "UPDATE products SET `title`, `category`,`description`,`price`,`supplier`,`img` WHERE id=?"
        const values =[req.body.title,
            req.body.category,
            req.body.description,
            req.body.price,
            req.body.supplier,
            req.body.img,
            productId];
        db.query(q,[values,productId], (err, data) => {
            if (err) return res.json(err);
            return res.json("product has been updated Successfully")
        })
      })
}



