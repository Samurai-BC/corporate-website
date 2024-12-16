import Image from 'next/image'
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
import hero from "../images/hero.png"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">株式会社サムライ・ブロックチェーン</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={hero}
              alt="未来のテクノロジー"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">テクノロジーで未来を創造する</h2>
          <p className="text-lg mb-4">
            株式会社サムライ・ブロックチェーンは、東京都八王子市に本社を置くテック企業です。
            生成AIやWeb3などの最新のWeb技術を活用し、社会の課題解決に取り組んでいます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">開発中のサービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>らくらく重説くん</CardTitle>
                <CardDescription>AIを活用した革新的な不動産業務支援システム</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline"><a href=''>詳細を見る</a></Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">会社情報</h2>
          <ul className="space-y-2">
            <li><strong>正式名称：</strong>株式会社サムライ・ブロックチェーン</li>
            <li><strong>設立年：</strong>2023年</li>
            <li><strong>所在地：</strong>東京都八王子市東町1-10</li>
            <li><strong>代表者：</strong>東山 淳</li>
            <li><strong>資本金：</strong>5,000万円</li>
            <li><strong>事業内容：</strong>ITサービス開発事業、ブロックチェーン技術の開発・提供</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

