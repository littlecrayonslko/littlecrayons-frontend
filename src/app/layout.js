// src/app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";// <--- IMPORT BOOTSTRAP CSS HERE
import './globals.css';
import BootstrapClient from "./components/BootstrapClient";
export const metadata = {
  title: 'Little Crayons Preschool',
  description: 'A place where learning meets play!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <BootstrapClient />
      </body>
    </html>
  );
}