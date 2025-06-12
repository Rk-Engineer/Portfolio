import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ram Kumar - Software Developer Portfolio",
  description:
    "Aspiring Software Developer | MERN Stack Enthusiast | Java & Spring Boot Developer | AI & Projects Explorer. Passionate about building software that solves real-world problems.",
  keywords: "Ram Kumar, Software Developer, MERN Stack, Java, Spring Boot, AI, Portfolio, Chennai",
  authors: [{ name: "Ram Kumar" }],
  creator: "Ram Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramkumar-portfolio.vercel.app",
    title: "Ram Kumar - Software Developer Portfolio",
    description: "Aspiring Software Developer passionate about building innovative software solutions",
    siteName: "Ram Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Kumar - Software Developer Portfolio",
    description: "Aspiring Software Developer passionate about building innovative software solutions",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
