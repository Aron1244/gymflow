import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GymFlow",
  description: "Tu compañero personal para alcanzar tus metas fitness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen py-8">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
