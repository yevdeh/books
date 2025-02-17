import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Books",
  description: "Books editable list",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <body>{children}</body>
  </html>
);

export default RootLayout;
