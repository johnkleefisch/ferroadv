import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Página não encontrada</p>
          <Link
            href="/"
            className="bg-gradient-to-r from-[#cc8c5d] to-[#d4956a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
