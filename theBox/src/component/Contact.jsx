
import React from 'react';

export const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">What can us do for you?</h2>
        <p className="text-center text-gray-600 mb-6">
          We are ready to work on a project of any complexity, whether it's commercial or residential.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="reason" className="block text-gray-700">Reason for Contacting<span className="text-red-500">*</span></label>
              <input
                type="text"
                id="reason"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Reason for Contacting"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          <p className="text-sm text-gray-500 mb-4">* indicates a required field</p>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-12 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


