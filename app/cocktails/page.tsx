import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  {
    name: "Signatures",
    items: [
      {
        name: "L'Or Liquide",
        ingredients: "Bourbon premium, Infusion de Safran, Miel d'Acacia, Bitters aromatiques, Écorce d'orange.",
        description: "Un élixir puissant et velouté aux reflets dorés.",
        price: "22€"
      },
      {
        name: "Élixir de Minuit",
        ingredients: "Cognac VSOP, Liqueur de Framboise Noire, Citron Jaune, Sirop de Vanille fumé au bois de chêne.",
        description: "Une expérience fumée et mystérieuse.",
        price: "20€"
      },
      {
        name: "Sillage d'Orient",
        ingredients: "Gin infusé au Thé Earl Grey, Sirop de Rose, Jus de Lychee, Blanc d'œuf, Pétales séchés.",
        description: "Floral, aérien et d'une élégance rare.",
        price: "19€"
      }
    ]
  },
  {
    name: "Les Classiques Revisités",
    items: [
      {
        name: "Old Fashioned Studio",
        ingredients: "Rye Whiskey, Sirop d'Érable fumé, Bitters de Noix, Zeste de Pamplemousse.",
        description: "La force du whiskey équilibrée par la douceur du bois.",
        price: "18€"
      },
      {
        name: "Negroni Doré",
        ingredients: "Gin Sec, Vermouth Rouge infusé au Cacao, Campari, Poussière d'Or comestible.",
        description: "L'amertume classique avec une touche de luxe.",
        price: "21€"
      }
    ]
  },
  {
    name: "Sans Alcool (Spiritueux 0%)",
    items: [
      {
        name: "L'Innocence",
        ingredients: "Distillat de Genièvre 0%, Concombre, Menthe Fraîche, Eau Tonique premium.",
        description: "Fraîcheur absolue sans compromis.",
        price: "14€"
      }
    ]
  }
];

export default function LaCartePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      
      <main className="grow pt-32 pb-24">
        {/* Header */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
            <span className="text-label-caps text-primary tracking-[0.3em]">Édition Été 2026</span>
            <h1 className="text-display-lg text-on-surface">La Carte <br /><span className="italic text-primary">des Élixirs</span></h1>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              Une sélection méticuleuse de spiritueux rares et de créations originales, 
              élaborées pour éveiller vos sens et suspendre le temps.
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col gap-12">
                <div className="flex items-center gap-6">
                  <h2 className="text-label-caps text-primary tracking-[0.4em] whitespace-nowrap">
                    {category.name}
                  </h2>
                  <div className="h-px w-full bg-outline-variant/30" />
                </div>

                <div className="flex flex-col gap-16">
                  {category.items.map((item) => (
                    <div key={item.name} className="group flex flex-col gap-2">
                      <div className="flex justify-between items-baseline gap-4">
                        <h3 className="font-serif text-3xl text-on-surface group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dotted border-outline-variant/50 h-px mb-1.5" />
                        <span className="font-sans text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-body-md text-on-surface-variant font-light leading-relaxed max-w-2xl italic mb-1">
                        {item.description}
                      </p>
                      <p className="text-[12px] font-sans text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">
                        {item.ingredients}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <section className="mt-32 border-t border-outline-variant/20 pt-24">
          <div className="max-w-2xl mx-auto px-6 text-center italic text-on-surface-variant font-light">
            <p className="text-body-md mb-8">
              L&apos;alcool ne soigne rien, mais il aide à oublier les questions restées sans réponse.&quot;
            </p>
            <p className="text-label-caps text-primary text-[10px] tracking-[0.2em] not-italic">
              L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
