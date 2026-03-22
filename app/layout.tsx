import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Harintha_J — Developer",
  description: "Personal portfolio of Harintha Jayashivani , a Software Engineering Undergraduate.",
  openGraph: {
    title: "Harintha_J — Developer",
    description: "Check out my projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}