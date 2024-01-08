

const Card = ({product}) => {
  return (
   <div className="container">
    <div className="card" style={{width: '18rem'}}>
  <img src={product.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.price}</p>
    <p className="card-text text-danger">{product.supplier}</p>
    <a href="#" className="btn btn-primary">Continue Reading</a>
  </div>
</div>
</div>
  )
}

export default Card