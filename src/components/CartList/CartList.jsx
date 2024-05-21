

const CartList = ({cart}) => {
  return (
    <div className="h-[60vh]">
      <h1>cartlist</h1>
      {
        cart?.map((cartItem,cartIndex)=>{
            return (
              <div key={cartIndex}>
                <button className="p-2 bg-slate-700 text-white">-</button>
                <span>Quantity is : {cartItem.quantity} </span>
                <button className="p-2 bg-slate-700 text-white">+</button>
                <span>Product Name is {cartItem.name}</span>
                <img src={cartItem.image} width={50} alt="" />
                <span>DiscountPrice ${cartItem.discountPrice} </span>
                <br />
                <span>Original Price ${cartItem.price} </span>
              </div>
            );
        })
      }
    </div>
  )
}

export default CartList
