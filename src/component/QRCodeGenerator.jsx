// src/components/QRCode.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ value }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <QRCode value={value} size={256} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
