"use client";

import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
  return (
    <>
      <PageHeader title="Tentang" isBackButton />
      <PageWrapper>
        <div className="py-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Analisis Sentimen Efisiensi Anggaran
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Pahami persepsi publik terhadap kebijakan anggaran dengan analisis
            mendalam. Platform ini menerapkan metode{" "}
            <strong className="font-semibold">Naive Bayes</strong> untuk
            mengklasifikasikan secara akurat spektrum sentimen masyarakat dari
            berbagai sumber data digital. Kami mampu membedakan beragam
            tanggapan, mulai dari sentimen negatif seperti{" "}
            <strong className="font-semibold">Kritik</strong>,{" "}
            <strong className="font-semibold">Kekecewaan</strong>, hingga{" "}
            <strong className="font-semibold">Kemarahan</strong> terkait alokasi
            atau penggunaan dana. Di sisi lain, kami juga mengukur sentimen
            positif seperti <strong className="font-semibold">Dukungan</strong>{" "}
            dan <strong className="font-semibold">Apresiasi</strong> terhadap
            program yang dianggap efektif, serta mengidentifikasi opini{" "}
            <strong className="font-semibold">Netral</strong> untuk mendapatkan
            gambaran yang utuh. Analisis ini memberikan landasan data yang kuat
            bagi para pemangku kepentingan untuk mengevaluasi efektivitas
            anggaran dan merespons aspirasi publik secara tepat.
          </p>
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
