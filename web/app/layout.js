import "./globals.css";
import { Inter, Anek_Gujarati } from "next/font/google";

const gujarati = Anek_Gujarati({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "StaticStorm - Effortless Website Deployment.",
  description:
    "Build simple, fast, and secure websites without worrying about technical expertise or maintenance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gujarati.className}>{children}</body>
    </html>
  );
}
