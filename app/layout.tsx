import '../src/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '株式会社サムライ・ブロックチェーン',
  description: '不動産×テクノロジーで未来を創造する',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

