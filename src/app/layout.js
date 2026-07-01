import "./globals.css";

export const metadata = {
  title: "Uroots Quiz",
  description: "Find your hair's root case in 2 minutes.",
  icons: {
    icon: "https://theuroots.com/cdn/shop/files/Uroots_Favicon.webp?crop=center&height=32&v=1768985585&width=32",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
