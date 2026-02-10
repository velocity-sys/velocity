'use client'

interface TacticalVideoProps {
  videoUrl?: string
  title: string
  classification: string
  status: string
  placeholder?: boolean
}

export default function TacticalVideo({ 
  videoUrl, 
  title, 
  classification, 
  status, 
  placeholder = false 
}: TacticalVideoProps) {
  return (
    <div className="relative aspect-video bg-zinc-900 border border-slate-800 overflow-hidden">
      {/* Video Content */}
      {videoUrl && !placeholder ? (
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        // Placeholder Content
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-electric-400 bg-electric-400/10 mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border border-electric-400" />
            </div>
            <p className="font-mono text-sm text-slate-400 tracking-wider">{title}</p>
            <p className="font-mono text-xs text-slate-500 tracking-widest mt-1">PASTE VIDEO URL HERE</p>
          </div>
        </div>
      )}
      
      {/* Tactical Overlay */}
      <div className="absolute top-4 left-4 right-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-slate-400 tracking-widest">{status}</span>
          </div>
          <span className="text-xs font-mono text-slate-500 tracking-widest">{classification}</span>
        </div>
      </div>
      
      {/* Bottom Controls */}
      {!placeholder && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-mono text-slate-300 tracking-wider">{status}</p>
              <p className="text-xs font-mono text-slate-500 tracking-widest">{classification}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-slate-400 tracking-widest">RECORDING</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}