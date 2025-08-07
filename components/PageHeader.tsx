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
    <div className="flex relative gap-5 items-center px-8 pt-8 pb-16">
      {isBackButton && (
        <div
          className="absolute left-8 p-2 text-black bg-white rounded-full cursor-pointer dark:bg-gray-900 dark:text-white"
          onClick={() => router.back()}
        >
          <BackIcon size={20} />
        </div>
      )}
      <div
        className={`flex-grow font-medium text-center ${
          isBackButton ? "pl-[44px]" : "text-black"
        } dark:text-white`}
      >
        {title}
      </div>
    </div>
  );
};

export default PageHeader;
