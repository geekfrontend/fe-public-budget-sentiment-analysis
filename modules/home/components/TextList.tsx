"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { getSentimentBadgeColor, sentimentTranslation } from "@/utils";
import { useSentimentStore } from "@/store/useSentimentStore";

const TextList = () => {
  const { sentiments } = useSentimentStore();
  return (
    <div className="p-6 pb-28 -mt-8 min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-t-3xl dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {sentiments.length > 0 ? (
        <div className="flex flex-col gap-y-4">
          {sentiments.map((item) => (
            <Card
              key={item.id}
              classNames={{
                base: "shadow-sm dark:bg-gray-900",
                header: "dark:bg-gray-900",
                body: "dark:bg-gray-900",
                footer: "dark:bg-gray-900",
              }}
            >
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
                <div className="text-xs text-gray-500 dark:text-neutral-100">
                  {new Date(item.timestamp).toLocaleDateString("id-ID")}
                </div>
              </CardHeader>
              <CardBody>
                <p className="py-2 text-gray-700 dark:text-neutral-200">
                  {item.text}
                </p>
              </CardBody>
              <CardFooter>
                <div className="text-sm text-gray-600 dark:text-neutral-200">
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
