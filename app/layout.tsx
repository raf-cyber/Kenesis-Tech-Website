import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Kenesis & Tech – Next-Gen Web",
  description: "Powering digital experiences that matter for ambitious brands worldwide.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-poppins overflow-x-hidden text-white bg-black cursor-none">{children}</body>
    </html>
  )
}
