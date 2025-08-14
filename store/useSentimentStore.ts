import { create } from "zustand";
import { dummySentimentData } from "@/utils/data";

interface SentimentItem {
  id: string;
  text: string;
  sentiment: string;
  confidence: number;
  timestamp: string;
}

interface SentimentState {
  sentiments: SentimentItem[];
  addSentiment: (
    newSentiment: Omit<SentimentItem, "id" | "timestamp" | "confidence">
  ) => void;
}

export const useSentimentStore = create<SentimentState>((set) => ({
  sentiments: dummySentimentData,

  addSentiment: (newSentiment) =>
    set((state) => ({
      sentiments: [
        {
          ...newSentiment,
          id: `sent_${Date.now()}`,
          timestamp: new Date().toISOString(),
          confidence: 0.99,
        },
        ...state.sentiments,
      ],
    })),
}));
