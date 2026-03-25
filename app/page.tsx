import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Soon Badge */}
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-1.5"
          >
            SOON
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          <span className="text-balance">
            Men xarajatlaringiz haqida hech kimga aytmayman.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 tracking-normal max-w-2xl mx-auto font-normal leading-relaxed">
          Numex AI - sizning ishonchli moliyaviy maslahatchingiz
        </p>
      </div>
    </main>
  )
}
