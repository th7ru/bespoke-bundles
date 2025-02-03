// ThankYou.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#F0E6FF] pt-20 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-4xl font-serif text-indigo-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-lg text-indigo-800/70 mb-6">
            Your order has been successfully placed. You will receive an email confirmation shortly with your order details.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-4 mb-8 mx-auto max-w-md">
            <h2 className="font-medium text-indigo-900 mb-2">What's Next?</h2>
            <ul className="text-left text-indigo-800/70 space-y-2">
              <li>• Check your email for order confirmation</li>
              <li>• We'll notify you when your bundle ships</li>
              <li>• Track your order status via email updates</li>
            </ul>
          </div>

          <Link 
            to="/"
            className="inline-block bg-indigo-900 text-white px-8 py-3 rounded-lg 
                     hover:bg-indigo-800 transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;