"use client";

import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
  return (
    <>
      <PageHeader title="Tentang" isBackButton />
      <PageWrapper>
        <div className="py-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Analisis Sentimen Efisiensi Anggaran
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700">
            Pahami persepsi publik terhadap kebijakan anggaran dengan analisis
            mendalam. Platform ini menerapkan metode{" "}
            <strong>Naive Bayes</strong> untuk mengklasifikasikan secara akurat
            spektrum sentimen masyarakat dari berbagai sumber data digital. Kami
            mampu membedakan beragam tanggapan, mulai dari sentimen negatif
            seperti <strong>Kritik</strong>, <strong>Kekecewaan</strong>, hingga{" "}
            <strong>Kemarahan</strong> terkait alokasi atau penggunaan dana. Di
            sisi lain, kami juga mengukur sentimen positif seperti{" "}
            <strong>Dukungan</strong> dan <strong>Apresiasi</strong> terhadap
            program yang dianggap efektif, serta mengidentifikasi opini{" "}
            <strong>Netral</strong> untuk mendapatkan gambaran yang utuh.
            Analisis ini memberikan landasan data yang kuat bagi para pemangku
            kepentingan untuk mengevaluasi efektivitas anggaran dan merespons
            aspirasi publik secara tepat.
          </p>
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
