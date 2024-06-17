import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-300">
      <div className="text-center">
        {/* <img src={notFoundImage} alt="404 Not Found" className="w-80 mx-auto mb-8 rounded-md" /> */}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className="primary-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
