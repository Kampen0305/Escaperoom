import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const levels = [
  { question: "8 + 5 = ?", answer: "13" },
  { question: "12 - 7 = ?", answer: "5" },
  { question: "3 x 4 = ?", answer: "12" },
  { question: "16 ÷ 4 = ?", answer: "4" },
];

export default function EscapeMath() {
  const [level, setLevel] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (input === levels[level].answer) {
      if (level + 1 < levels.length) {
        setMessage("Goed gedaan! Op naar de volgende vraag!");
        setLevel(level + 1);
        setInput("");
      } else {
        setMessage("Gefeliciteerd! Je hebt de escape room opgelost!");
      }
    } else {
      setMessage("Oeps! Probeer het nog eens.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold mb-4">Escape Room: Rekensommen</h1>
        <Card className="p-6 shadow-lg bg-white">
          <CardContent>
            <p className="text-lg mb-4">{levels[level].question}</p>
            <input
              type="text"
              className="border p-2 rounded w-full text-center"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            />
            <Button onClick={checkAnswer} className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
              Antwoord controleren
            </Button>
            {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
