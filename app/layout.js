import "../styles/globals.css";

export const metadata = {
  title: {
    default: "CARTYR
    template: "%s",
  },
  description:
    "",

  openGraph: {
    type: "website",
    siteName: "Khaliil",
    url: "https://khaliil.com",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },


  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {

  return (
<html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
          <main style={{ position: "relative", zIndex: 0 }}>
            {children}
          </main>
      </body>
    </html>
  );
}
