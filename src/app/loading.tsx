export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center">
      {/* Gold M Logo */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gold rounded-lg flex items-center justify-center">
          <span className="text-gold font-display text-4xl font-bold">M</span>
        </div>
        {/* Pulse animation ring */}
        <div className="absolute inset-0 border-4 border-gold/30 rounded-lg animate-ping" />
      </div>
      
      {/* Loading text */}
      <p className="mt-6 text-muted-blue font-body text-sm tracking-wider animate-pulse">
        Loading...
      </p>
    </div>
  )
}
