// QRCodeGenerator.js

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import 'tailwindcss/tailwind.css';

const Qr = () => {
  const [text, setText] = useState('https://example.com'); // Replace with your desired URL or text

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">QR Code Generator</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="urlInput">
            URL or Text
          </label>
          <input
            type="text"
            id="urlInput"
            className="w-full border rounded-md py-2 px-3"
            placeholder="Enter URL or Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <QRCode value={text} size={200} />
        </div>

        <p className="text-sm text-gray-600">
          Scan the QR code with your device to access the content.
        </p>
      </div>
    </div>
  );
};

export default Qr;
