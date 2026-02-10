const mailto = "mailto:build@withvelo.city?subject=Ready%20to%20build%20the%20future%20together&body=Hi%20Velocity%20team%2C%0A%0AI%20believe%20in%20building%20a%20secure%2C%20abundant%20future%20for%20American%20energy.%0A%0A%5BIntroduce%20yourself%5D%0A%0A%5BQuick%20fun%20fact%20%2B%20any%20personal%20links%5D"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-2xl font-normal text-white tracking-normal mb-2" style={{ fontFamily: "Georgia, 'Noto Serif', 'Bitstream Charter', serif" }}>
          Velocity Systems
        </h1>
        <p className="text-sm text-slate-400" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}>
          Secure abundant energy.
        </p>
      </div>
      <a
        href={mailto}
        className="absolute bottom-8 text-sm text-slate-500 hover:text-white transition-colors duration-300"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
      >
        Join Us
      </a>
    </div>
  )
}
