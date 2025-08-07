import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

const dummySentimentData = [
  {
    id: "sent_001",
    text: "Penggunaan anggaran terlalu besar untuk rapat-rapat yang tidak berdampak nyata. Ini sangat membuang-buang uang rakyat!",
    sentiment: "Angry",
    confidence: 0.95,
    timestamp: "2025-08-07T14:30:00Z",
  },
  {
    id: "sent_002",
    text: "Saya khawatir dengan transparansi laporan anggaran daerah. Apakah ada pengawasan yang cukup ketat?",
    sentiment: "Frightened",
    confidence: 0.91,
    timestamp: "2025-08-07T11:25:00Z",
  },
  {
    id: "sent_003",
    text: "Salut! Pemerintah berhasil menghemat anggaran hingga 30% dan mengalihkan dana ke sektor pendidikan. Ini langkah positif!",
    sentiment: "Happy",
    confidence: 0.97,
    timestamp: "2025-08-07T10:15:00Z",
  },
  {
    id: "sent_004",
    text: "Banyak program masyarakat yang dipotong anggarannya. Padahal, itu sangat membantu warga kurang mampu. Saya merasa sedih.",
    sentiment: "Sad",
    confidence: 0.89,
    timestamp: "2025-08-06T18:00:00Z",
  },
  {
    id: "sent_005",
    text: "Tiba-tiba muncul laporan penggunaan anggaran untuk proyek yang tidak pernah dibahas sebelumnya. Ini sangat mengejutkan!",
    sentiment: "Surprise",
    confidence: 0.84,
    timestamp: "2025-08-06T09:00:00Z",
  },
  {
    id: "sent_006",
    text: "Anggaran untuk fasilitas publik justru digunakan untuk renovasi kantor pejabat. Ini menjijikkan dan tidak pantas!",
    sentiment: "Disgusted",
    confidence: 0.98,
    timestamp: "2025-08-05T20:10:00Z",
  },
  {
    id: "sent_007",
    text: "Ide luar biasa! Digitalisasi laporan anggaran secara real-time membuat publik bisa ikut mengawasi dengan mudah!",
    sentiment: "Enthusiastic",
    confidence: 0.96,
    timestamp: "2025-08-05T15:00:00Z",
  },
];

const sentimentTranslation = {
  Angry: "Marah",
  Frightened: "Takut",
  Sad: "Sedih",
  Happy: "Senang",
  Surprise: "Terkejut",
  Disgusted: "Jijik",
  Enthusiastic: "Percaya",
};

const getSentimentBadgeColor = (sentiment: string) => {
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

const TextList = () => {
  return (
    <div className="p-6 pb-28 -mt-8 min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-t-3xl">
      {dummySentimentData.length > 0 ? (
        <div className="flex flex-col gap-y-4">
          {dummySentimentData.map((item) => (
            <Card key={item.id} className="shadow-sm">
              <CardHeader className="flex justify-between items-center">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getSentimentBadgeColor(
                    item.sentiment
                  )}`}
                >
                  {
                    sentimentTranslation[
                      item.sentiment as keyof typeof sentimentTranslation
                    ]
                  }
                </span>
                <div className="text-xs text-gray-500">
                  {new Date(item.timestamp).toLocaleDateString("id-ID")}
                </div>
              </CardHeader>
              <CardBody>
                <p className="py-2 text-gray-700">{item.text}</p>
              </CardBody>
              <CardFooter>
                <div className="text-sm text-gray-600">
                  <div className="flex gap-2 items-center">
                    <strong>Keyakinan:</strong>
                    <span>{(item.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-neutral-500">
          Tidak ada hasil yang ditemukan
        </div>
      )}
    </div>
  );
};

export default TextList;
