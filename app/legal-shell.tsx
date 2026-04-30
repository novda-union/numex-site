import Link from 'next/link'

type LegalShellProps = {
  title: string
  description: string
  updatedAt: string
  children: React.ReactNode
}

export function LegalShell({
  title,
  description,
  updatedAt,
  children,
}: LegalShellProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-8 sm:px-8 sm:py-12">
        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-semibold text-slate-950">
            Numex
          </Link>
          <div className="flex items-center gap-4 text-slate-600">
            <Link href="/privacy" className="hover:text-[#059669]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#059669]">
              Terms
            </Link>
          </div>
        </nav>

        <header className="space-y-4 border-b border-slate-200 pb-8">
          <p className="text-sm font-medium text-[#059669]">
            Effective {updatedAt}
          </p>
          <h1 className="text-4xl font-bold tracking-normal text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
        </header>

        <article className="legal-content space-y-8">{children}</article>
      </div>
    </main>
  )
}
