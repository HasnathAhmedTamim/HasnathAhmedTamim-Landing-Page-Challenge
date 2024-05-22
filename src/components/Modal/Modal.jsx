import React from "react";

function Modal({ cartItems, isOpen, toggleModal }) {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50 z-50 "></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 z-[1200] overflow-y-auto   max-h-screen">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button
                onClick={toggleModal}
                className="bg-blue-300 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center border-b pb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">
                        Discount Price:
                      </span>
                      <span className="font-semibold">
                        {item.discountPrice}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Quantity:</span>
                     
                      <span className="font-semibold mx-2">
                        {item.quantity}
                      </span>
                     
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Total:</span>
                      <span className="font-semibold">
                        {item.discountPrice * item.quantity}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
              <li className="border-t pt-3">
                <div className="flex justify-end items-center">
                  <span className="mr-2 font-semibold">Total Price:</span>
                  <span className="font-semibold">{getTotalPrice()}</span>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
