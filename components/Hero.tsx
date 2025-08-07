import { Input } from "@heroui/input";
import { HiOutlineSearch } from "react-icons/hi";
import { ThemeSwitch } from "./theme-switch";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
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
        endContent={
          <HiOutlineSearch
            size={32}
            className="text-neutral-600 dark:text-neutral-300"
          />
        }
      />
    </div>
  );
};

export default Hero;
