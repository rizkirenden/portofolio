import React from "react";
import { Dot } from "../../atoms/dot";
import { Divider } from "../../atoms/divider";
import { Title } from "../../atoms/title";
import { Subtitle } from "../../atoms/subtitle";

const Experience = () => {
  return (
    <div className="flex justify-center pt-1">
      <div className="max-w-xl w-full px-4">
        {/* Experience 1 */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 24, height: 24 }}>
              <Dot
                dotsize="w-6 h-6"
                dotcolor="bg-white"
                className="absolute top-0 left-0"
              />
              <Dot
                dotsize="w-3 h-3"
                dotcolor="bg-[#62D9F6]"
                className="absolute top-1.5 left-1.5 z-10"
              />
            </div>
            <Divider className="h-16 w-[2px] bg-white mt-1" />
          </div>
          <div className="flex flex-col">
            <Title textClass="text-white text-2xl font-normal">
              FULL STACK DEVELOPER{" "}
              <span style={{ color: "#62D9F6" }}>@Bank Sulteng</span>
            </Title>
            <Subtitle className="text-[#C7C7C7]">
              Des 2023 - Jan 2024 | Palu, Indonesia - Magang
            </Subtitle>
            <Subtitle className="text-white">
              Mengembangkan aplikasi E-Monitoring internal untuk kebutuhan
              operasional Divisi IT
            </Subtitle>
            <Subtitle className="text-white">
              Mengotomatisasi proses rekonsiliasi dan pelaporan kas ATM untuk
              meningkatkan akurasi data
            </Subtitle>
            <Subtitle className="text-white">
              Mengelola sistem pelaporan insiden ATM dan koordinasi teknis
              dengan vendor
            </Subtitle>
            <Subtitle className="text-white">
              Melakukan dokumentasi teknis dan optimalisasi alur kerja sistem
            </Subtitle>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex items-start space-x-4 mt-8">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 24, height: 24 }}>
              <Dot
                dotsize="w-6 h-6"
                dotcolor="bg-white"
                className="absolute top-0 left-0"
              />
              <Dot
                dotsize="w-3 h-3"
                dotcolor="bg-[#62D9F6]"
                className="absolute top-1.5 left-1.5 z-10"
              />
            </div>
            <Divider className="h-16 w-[2px] bg-white mt-1" />
          </div>
          <div className="flex flex-col">
            <Title textClass="text-white text-2xl font-normal">
              IT DIGITAL <span style={{ color: "#62D9F6" }}>@Bank BPR</span>
            </Title>
            <Subtitle className="text-[#C7C7C7]">
              Okt 2025 - Present | Palu, Indonesia
            </Subtitle>
            <Subtitle className="text-white">
              Memimpin pengembangan dan implementasi solusi digital internal
              perusahaan
            </Subtitle>
            <Subtitle className="text-white">
              Mengelola full-cycle project IT (analisis kebutuhan, perancangan,
              development, hingga deployment)
            </Subtitle>
            <Subtitle className="text-white">
              Melakukan monitoring, maintenance, dan troubleshooting sistem
              untuk memastikan high availability
            </Subtitle>
            <Subtitle className="text-white">
              Berkolaborasi dengan stakeholder lintas divisi dalam integrasi
              sistem
            </Subtitle>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="flex items-start space-x-4 mt-8">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 24, height: 24 }}>
              <Dot
                dotsize="w-6 h-6"
                dotcolor="bg-white"
                className="absolute top-0 left-0"
              />
              <Dot
                dotsize="w-3 h-3"
                dotcolor="bg-[#62D9F6]"
                className="absolute top-1.5 left-1.5 z-10"
              />
            </div>
            <Divider className="h-16 w-[2px] bg-white mt-1" />
          </div>
          <div className="flex flex-col">
            <Title textClass="text-white text-2xl font-normal">
              FULL STACK DEVELOPER{" "}
              <span style={{ color: "#62D9F6" }}>Premier Motors</span>
            </Title>
            <Subtitle className="text-[#C7C7C7]">
              May 2025 - Present | Palu, Indonesia
            </Subtitle>
            <Subtitle className="text-white">
              Merancang dan mengembangkan Service Management System berbasis
              Laravel
            </Subtitle>
            <Subtitle className="text-white">
              Mengimplementasikan modul Warehouse & Vehicle Inventory Management
            </Subtitle>
            <Subtitle className="text-white">
              Membangun sistem pembayaran dan manajemen transaksi dengan
              validasi serta integritas data
            </Subtitle>
            <Subtitle className="text-white">
              Mendesain skema database relasional dan melakukan optimasi query
              menggunakan Eloquent ORM
            </Subtitle>
            <Subtitle className="text-white">
              Mengembangkan antarmuka responsif dan reusable component
              menggunakan Tailwind CSS
            </Subtitle>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="flex items-start space-x-4 mt-8">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 24, height: 24 }}>
              <Dot
                dotsize="w-6 h-6"
                dotcolor="bg-white"
                className="absolute top-0 left-0"
              />
              <Dot
                dotsize="w-3 h-3"
                dotcolor="bg-[#62D9F6]"
                className="absolute top-1.5 left-1.5 z-10"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Title textClass="text-white text-2xl font-normal">
              FULL STACK DEVELOPER{" "}
              <span style={{ color: "#62D9F6" }}>@PT TriPutra</span>
            </Title>
            <Subtitle className="text-[#C7C7C7]">
              Nov 2025 - Present | Palu, Indonesia
            </Subtitle>
            <Subtitle className="text-white">
              Merancang dan mengembangkan Financial & Project Management System
              berbasis web
            </Subtitle>
            <Subtitle className="text-white">
              Membangun modul analisis harga material, pengeluaran, dan
              pemasukan toko secara terintegrasi
            </Subtitle>
            <Subtitle className="text-white">
              Mengimplementasikan sistem monitoring pembayaran project, unit,
              tenaga kerja, dan biaya operasional
            </Subtitle>
            <Subtitle className="text-white">
              Mengembangkan fitur analisis pengeluaran per unit (material &
              tukang) dengan pelaporan terstruktur
            </Subtitle>
            <Subtitle className="text-white">
              Mengintegrasikan seluruh transaksi ke dalam dashboard monitoring
              keuangan project
            </Subtitle>
            <Subtitle className="text-white">
              Mendesain arsitektur backend dan relasi database menggunakan
              Laravel serta membangun UI responsif dengan Tailwind CSS
            </Subtitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
