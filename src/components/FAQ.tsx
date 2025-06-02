
import { memo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Combien de temps faut-il pour assembler un PC gaming ?",
    answer: "En général, il me faut 2 à 5 jours pour assembler votre PC selon la complexité de la configuration et la disponibilité des composants. Je vous tiens informé régulièrement de l'avancement."
  },
  {
    question: "Proposez-vous une garantie sur l'assemblage ?",
    answer: "Oui ! Mon travail d'assemblage est garanti, et tous les composants bénéficient de leur garantie constructeur. Je reste disponible pour vous aider en cas de problème."
  },
  {
    question: "Puis-je fournir mes propres composants ?",
    answer: "Absolument ! Je peux assembler votre PC avec vos composants ou vous conseiller sur les meilleurs choix selon votre budget. Je vérifie toujours la compatibilité avant l'assemblage."
  },
  {
    question: "Quel budget prévoir pour un bon PC gaming ?",
    answer: "Cela dépend de vos besoins ! Un PC gaming correct commence vers 700-800€. Pour du milieu de gamme, comptez 1000-1500€, et pour du haut de gamme 1800€+. Je m'adapte à tous les budgets."
  },
  {
    question: "Faites-vous de la maintenance de PC gaming ?",
    answer: "Oui, je propose du nettoyage interne, remplacement de pâte thermique, diagnostic de pannes et optimisation. La maintenance régulière prolonge la durée de vie de votre PC."
  },
  {
    question: "Comment choisissez-vous les composants ?",
    answer: "Je sélectionne les composants en fonction de vos jeux favoris, votre budget et vos préférences. J'utilise uniquement des marques fiables que j'ai testées dans mes précédents montages."
  }
];

const FAQItem = memo(({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => (
  <Card className="glass-card">
    <CardContent className="p-0">
      <button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-forge-orange/5 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-forge-orange flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-forge-orange flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </CardContent>
  </Card>
));

const FAQ = memo(() => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-forge-black/20" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forge-orange">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-300">
            Les réponses aux questions les plus courantes sur mes services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;
