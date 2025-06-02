
import { memo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quel est le délai pour assembler un PC gaming sur mesure ?",
    answer: "Le délai d'assemblage varie entre 3 à 7 jours ouvrés selon la complexité de la configuration et la disponibilité des composants. Nous vous tenons informé à chaque étape du processus."
  },
  {
    question: "Proposez-vous une garantie sur vos PC gaming assemblés ?",
    answer: "Oui, tous nos PC gaming bénéficient d'une garantie complète. Les composants sont couverts par leur garantie constructeur, et notre assemblage est garanti 2 ans. Nous assurons également le support technique."
  },
  {
    question: "Puis-je choisir mes propres composants pour l'assemblage ?",
    answer: "Absolument ! Nous acceptons vos composants ou vous conseillons sur la sélection optimale selon votre budget et vos besoins gaming. Notre expertise garantit la compatibilité et les performances."
  },
  {
    question: "Quel budget prévoir pour un PC gaming performant ?",
    answer: "Un PC gaming entrée de gamme commence à partir de 800€. Pour du milieu de gamme comptez 1200-1800€, et pour du haut de gamme 2000€+. Nous adaptons chaque configuration à votre budget."
  },
  {
    question: "Effectuez-vous la maintenance de PC gaming ?",
    answer: "Oui, nous proposons des services de maintenance complète : nettoyage interne, remplacement de pâte thermique, optimisation logicielle, et diagnostic de pannes. Service disponible sur site ou en atelier."
  },
  {
    question: "Quelles marques de composants utilisez-vous ?",
    answer: "Nous travaillons exclusivement avec des marques premium : ASUS, MSI, Gigabyte, AMD, Intel, NVIDIA, Corsair, G.Skill, Samsung, Western Digital, et bien d'autres marques reconnues pour leur fiabilité."
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
            Tout ce que vous devez savoir sur nos services d'assemblage PC gaming
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
