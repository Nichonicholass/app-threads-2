"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import ModalCreate from "./components/ModalCreate";

export interface CardData {
  username: string;
  text: string;
  like: number;
}

export default function Home() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCard = (newCard: Omit<CardData, "like">) => {
    setCards((prev) => [...prev, { ...newCard, like: 0 }]);
    setIsModalOpen(false);
  };

  const deleteCard = (index: number) => {
    setCards((prev) => prev.filter((_, i) => i !== index));
  };

  const editCard = (index: number) => {
    const newText = prompt("Edit Card", cards[index].text);
    if (newText) {
      setCards((prev) =>
        prev.map((item, i) => (i === index ? { ...item, text: newText } : item))
      );
    }
  };

  const handleLike = (index: number) => {
    setCards((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, like: item.like + 1 } : item
      )
    );
  };

  useEffect(() => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <main className="w-full min-h-screen mx-auto px-4 py-8 text-center bg-danger-main">
      <h1 className="text-4xl font-bold mb-6 text-white bg-primary-info-main">Threads</h1>

      {isModalOpen && (
        <ModalCreate onSubmit={addCard} onClose={() => setIsModalOpen(false)} />
      )}

      <div className="grid space-y-4 gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            username={card.username}
            text={card.text}
            number={card.like}
            onDelete={() => deleteCard(index)}
            onEdit={() => editCard(index)}
            onLike={() => handleLike(index)}
          />
        ))}
      </div>

      <button
        className="fixed bottom-6 right-6 bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600"
        onClick={() => setIsModalOpen(true)}
      >
        + Create Content
      </button>
    </main>
  );
}
