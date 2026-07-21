// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- IMPORT BOOTSTRAP CSS HERE
import './globals.css';

export const metadata = {
  title: 'LittleSparks Preschool',
  description: 'A place where learning meets play!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}