import { Badge } from '@/components/ui/badge'
import { Geist_Mono } from 'next/font/google';
const _geistMono = Geist_Mono({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="min-h-screen flex-col bg-linear-to-br from-[#0F172A] via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Soon Badge */}
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className="bg-[#059669] hover:bg-emerald-700 font-semibold px-3 text-white py-1.5"
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
        <div className="social flex flex-wrap items-center justify-center space-x-4">
          <a href="https://x.com/numexuz" className='transition-all text-white hover:text-[#059669]' style={{ fontFamily: _geistMono.style.fontFamily }} target='_blank'>x</a> <span className='text-white'>/</span> <a href="https://instagram.com/numex.uz" className='transition-all text-white hover:text-[#059669]' style={{ fontFamily: _geistMono.style.fontFamily }} target='_blank'>instagram</a>
        </div>
      </div>
    </main>
  )
}
