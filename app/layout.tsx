import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LayoutClient from "./LayoutClient"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Jordan Bobadilla",
  description: "Personal site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background min-h-screen font-sans antialiased`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
