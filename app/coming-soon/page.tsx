import Link from 'next/link'

interface ComingSoonPageProps {
  searchParams: { topic?: string }
}

export default function ComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const topic = searchParams?.topic
    ? decodeURIComponent(searchParams.topic)
    : 'This page'

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl text-center space-y-6 px-6 py-12">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Coming soon</p>
        <h1 className="text-3xl font-bold text-gray-900">
          {topic.charAt(0).toUpperCase() + topic.slice(1)} is on its way.
        </h1>
        <p className="text-base text-gray-600">
          We&apos;re putting the finishing touches on this page. Check back soon or explore
          our existing services in the meantime.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary/90"
          >
            View services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-primary/60 hover:text-primary"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

