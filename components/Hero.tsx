import { Input } from "@heroui/input";
import { HiOutlineSearch } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="px-8 pt-8 pb-16 space-y-6 bg-gradient-to-br from-blue-200 via-sky-100 to-cyan-100">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-blue-950">
          Analisis Sentimen <br /> Anggaran Publik
        </h1>
        <p className="text-lg text-neutral-700">
          Pahami pandangan masyarakat terhadap kebijakan dan efisiensi anggaran.
        </p>
      </div>
      <Input
        size="lg"
        placeholder="Masukkan teks atau opini publik..."
        endContent={<HiOutlineSearch size={32} className="text-neutral-600" />}
      />
    </div>
  );
};

export default Hero;
