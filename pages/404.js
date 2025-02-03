import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="mt-6 text-blue-500">Go back to Home</a>
      </Link>
    </div>
  );
};

export default Custom404;