"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { HiOutlineSearch } from "react-icons/hi";
import { ThemeSwitch } from "./theme-switch";
import { useTheme } from "next-themes";
import axios from "axios";
import { useSentimentStore } from "@/store/useSentimentStore";

const Hero = () => {
  const { theme } = useTheme();

  const [inputText, setInputText] = useState("");
  const { addSentiment } = useSentimentStore();

  const handleAnalysis = async () => {
    if (!inputText.trim()) return;

    try {
      const response = await axios.post("http://localhost:5328/predict", {
        text: inputText,
      });

      const rawSentiment = response.data.sentiment;
      const capitalizedSentiment =
        rawSentiment.charAt(0).toUpperCase() + rawSentiment.slice(1);

      addSentiment({
        text: inputText,
        sentiment: capitalizedSentiment,
      });

      setInputText("");
    } catch (err) {
      console.error("Gagal memanggil API:", err);
      alert("Gagal terhubung ke server. Lihat console untuk detail error.");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAnalysis();
    }
  };

  return (
    <div className="px-8 pt-8 pb-16 space-y-6 bg-gradient-to-br from-blue-200 via-sky-100 to-cyan-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-950 dark:text-white">
            Analisis Sentimen <br /> Anggaran Publik
          </h1>
          <div className="self-start">
            <ThemeSwitch />
          </div>
        </div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Pahami pandangan masyarakat terhadap kebijakan dan efisiensi anggaran.
        </p>
      </div>
      <Input
        size="lg"
        placeholder="Masukkan teks atau opini publik..."
        color={theme === "dark" ? "primary" : "default"}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        endContent={
          <button onClick={handleAnalysis} className="focus:outline-none">
            <HiOutlineSearch
              size={32}
              className="cursor-pointer text-neutral-600 dark:text-neutral-300"
            />
          </button>
        }
      />
    </div>
  );
};

export default Hero;
