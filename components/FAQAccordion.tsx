
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: 'light' | 'dark';
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, theme = 'light' }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`border rounded-2xl overflow-hidden transition-colors ${
            theme === 'dark' ? 'bg-stone-800 border-stone-700' : 'bg-white border-stone-200'
          }`}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
              theme === 'dark' ? 'hover:bg-stone-700' : 'hover:bg-stone-50'
            }`}
          >
            <span className={`font-semibold text-lg transition-colors ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
              {item.question}
            </span>
            {openId === item.id ? (
              <ChevronUp className="text-green-600" />
            ) : (
              <ChevronDown className={theme === 'dark' ? 'text-stone-500' : 'text-stone-400'} />
            )}
          </button>
          {openId === item.id && (
            <div className={`p-6 pt-0 leading-relaxed border-t animate-in fade-in slide-in-from-top-2 duration-300 transition-colors ${
              theme === 'dark' ? 'text-stone-400 border-stone-700' : 'text-stone-600 border-stone-50'
            }`}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
