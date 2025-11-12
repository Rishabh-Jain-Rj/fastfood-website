// app/layout.js
import "./globals.css";

export const metadata = {
  title: "FlavorTown Grill - Taste the Adventure!",
  description: "Discover premium fast-food delights at FlavorTown Grill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
