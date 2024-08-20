import React, { useContext, useState } from 'react';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [paymentMode, setPaymentMode] = useState('Cash on Delivery');

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  return (
    <div className='w-[65%] h-[90vh] bg-zinc-100 p-10 flex flex-col justify-center items-center gap-5'>
      
      <div className='flex gap-10'>
        <label htmlFor="cash-on-delivery" className='flex items-center gap-1'>
          <input
            type="radio"
            id="cash-on-delivery"
            name="payment-mode"
            value="Cash on Delivery"
            checked={paymentMode === 'Cash on Delivery'}
            onChange={handlePaymentModeChange}
          />
          Cash on Delivery
        </label>

        <label htmlFor="credit-card" className='flex items-center gap-1'>
          <input
            type="radio"
            id="credit-card"
            name="payment-mode"
            value="Credit Card"
            checked={paymentMode === 'Credit Card'}
            onChange={handlePaymentModeChange}
          />
          Credit Card
        </label>
      </div>

      <div className='w-[80%]  bg-zinc-200 shadow-xl rounded-md px-[10vw] py-8'>
        {paymentMode === 'Credit Card' && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">Enter Credit Card Details</h2>

            <form>
              <div className="mb-4">
                <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                <input
                  type="text"
                  id="cardholder-name"
                  name="cardholder-name"
                  placeholder="John Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  id="expiration-date"
                  name="expiration-date"
                  placeholder="MM/YY"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div className="mt-6">
                <Link to="/"
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Pay Now
                </Link>
              </div>
            </form>
          </div>
        )}

        {paymentMode === 'Cash on Delivery' && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">Cash on Delivery</h2>
            <p className="text-center">Please pay the total amount of ${total} to the delivery person upon receiving your order.</p>
            <div className="mt-6">
              <button
                type="button"
                className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
