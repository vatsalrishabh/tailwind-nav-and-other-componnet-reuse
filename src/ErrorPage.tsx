import React from 'react';
import error from './assets/error.avif'

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
        <img src={error} alt="404 Error" className="w-full mb-8" />
        <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Go to Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
