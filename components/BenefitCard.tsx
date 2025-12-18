
import React from 'react';
import { Benefit } from '../types';
import { Leaf, Scissors, Sprout, Calendar, Sparkles, Layout } from 'lucide-react';

const IconMap: Record<string, any> = {
  Leaf,
  Scissors,
  Sprout,
  Calendar,
  Sparkles,
  Layout
};

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  const Icon = IconMap[benefit.icon] || Leaf;
  const titleId = `benefit-title-${benefit.id}`;

  return (
    <article 
      className="group relative p-10 rounded-[40px] border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 focus-within:ring-4 focus-within:ring-green-500/30 outline-none"
      aria-labelledby={titleId}
      tabIndex={0}
    >
      <div className="flex flex-col gap-6">
        {/* Ícone Minimalista */}
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center bg-green-50 dark:bg-green-900/20 text-green-600 shadow-inner"
          aria-hidden="true"
        >
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <div>
          <h3 
            id={titleId} 
            className="text-2xl font-black mb-3 text-stone-900 dark:text-stone-100 tracking-tight"
          >
            {benefit.title}
          </h3>
          <p className="leading-relaxed text-stone-600 dark:text-stone-400 font-medium text-lg">
            {benefit.description}
          </p>
        </div>
      </div>
      
      {/* Detalhe Decorativo de Fundo */}
      <div className="absolute -bottom-2 -right-2 opacity-[0.03] dark:opacity-[0.05] text-stone-900 dark:text-white pointer-events-none" aria-hidden="true">
        <Icon size={120} />
      </div>
    </article>
  );
};

export default BenefitCard;
