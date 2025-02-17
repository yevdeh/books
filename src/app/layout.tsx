"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru">
    <body>
      <Provider store={store}>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
