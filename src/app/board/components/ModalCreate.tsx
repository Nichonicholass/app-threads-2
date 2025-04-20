'use client';

import { useState } from 'react';

interface ModalCreateProps {
  onSubmit: (card: { username: string; text: string }) => void;
  onClose: () => void;
}

const ModalCreate: React.FC<ModalCreateProps> = ({ onSubmit, onClose }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (username && text) {
      onSubmit({ username, text });
      setUsername('');
      setText('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 bg-danger-main">
      <div className="bg-white rounded-lg p-6 w-80 text-center">
        <h2 className="text-lg font-bold mb-4">Create New Card</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-indigo-500 text-white w-full py-2 rounded hover:bg-indigo-600"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="mt-2 w-full text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalCreate;
