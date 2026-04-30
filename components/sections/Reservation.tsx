import React from 'react'

const Reservation = () => {
  return (
        <section id="privatization" className="py-24 md:py-40 relative">
          <div className="absolute inset-0 bg-surface-container overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-primary/5 to-transparent opacity-50" />
          </div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col gap-8">
            <span className="text-label-caps text-primary tracking-[0.2em]">Exclusivité</span>
            <h2 className="text-display-lg text-on-surface leading-tight">
              Pour vos moments <br />
              <span className="italic text-primary">les plus précieux</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              L&apos;Élixir Doré Studio est disponible pour vos événements privés. 
              Une privatisation totale ou partielle pour sublimer vos soirées, 
              réceptions professionnelles ou célébrités intimes.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:brightness-110 transition-all shadow-2xl">
                Demander un devis
              </button>
            </div>
          </div>
        </section>
  )
}

export default Reservation
