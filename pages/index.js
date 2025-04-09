import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Head>
        <title>保险理财网站</title>
      </Head>
      <main className="text-center space-y-4">
        <h1 className="text-4xl font-bold">欢迎来到我的保险理财网站</h1>
        <p className="text-gray-600">专业服务，可靠方案，助您安心未来。</p>
      </main>
    </div>
  )
}
