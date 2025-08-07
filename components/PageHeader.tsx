"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft as BackIcon } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
  isBackButton?: boolean;
}

const PageHeader = ({ title, isBackButton = false }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-5 items-center px-8 pt-8 pb-16">
      {isBackButton && (
        <div
          className="absolute p-2 bg-white rounded-full cursor-pointer"
          onClick={() => router.back()}
        >
          <BackIcon size={20} />
        </div>
      )}
      <div className="flex-grow font-medium text-center">{title}</div>
    </div>
  );
};

export default PageHeader;
