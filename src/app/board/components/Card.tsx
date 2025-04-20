'use client';

import React from 'react';
import Button from '@/components/Button';

interface CardProps {
  username: string;
  text: string;
  number: number;
  onDelete: () => void;
  onEdit: () => void;
  onLike: () => void;
}

const Card: React.FC<CardProps> = ({
  username,
  text,
  number,
  onDelete,
  onEdit,
  onLike,
}) => {
  return (
    <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto space-y-4 border border-zinc-700">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white">{username}</h3>
        <p className="text-zinc-300">{text}</p>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-zinc-700">
        <Button
          variant="default"
          onClick={onEdit}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-700"
        >
          Delete
        </Button>
        <Button
          variant="success"
          onClick={onLike}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Like ({number})
        </Button>
      </div>
    </div>
  );
};

export default Card;
