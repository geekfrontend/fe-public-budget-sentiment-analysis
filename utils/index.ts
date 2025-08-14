export const getSentimentBadgeColor = (sentiment: string) => {
  switch (sentiment) {
    case "Happy":
    case "Enthusiastic":
      return "bg-green-100 text-green-800";
    case "Angry":
    case "Disgusted":
      return "bg-red-100 text-red-800";
    case "Sad":
      return "bg-gray-200 text-gray-800";
    case "Frightened":
      return "bg-purple-100 text-purple-800";
    case "Surprise":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const sentimentTranslation = {
  Angry: "Marah",
  Frightened: "Takut",
  Sad: "Sedih",
  Happy: "Senang",
  Surprise: "Terkejut",
  Disgusted: "Jijik",
  Enthusiastic: "Percaya",
};
