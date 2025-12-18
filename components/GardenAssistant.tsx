
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, ExternalLink } from 'lucide-react';
import { getGardenAdvice } from '../services/gemini';
import { Message } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface GardenAssistantProps {
  currentTheme?: 'light' | 'dark';
}

const GardenAssistant: React.FC<GardenAssistantProps> = ({ currentTheme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente botânico do Roberto. Como posso ajudar seu jardim hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getGardenAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  const isDark = currentTheme === 'dark';

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir assistente inteligente de jardinagem"
        className="fixed bottom-24 right-8 z-50 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 p-3 rounded-2xl shadow-2xl hover:scale-110 transition-all flex items-center gap-3 border border-stone-800 dark:border-stone-200 group focus:ring-4 focus:ring-green-500/50 outline-none"
      >
        <Bot size={20} className="text-green-500" aria-hidden="true" />
        <span className="font-bold text-xs">Dúvida sobre plantas?</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-8 z-50" role="dialog" aria-label="Chat com assistente do Roberto">
      <div className={`rounded-[32px] shadow-3xl w-80 sm:w-96 flex flex-col border overflow-hidden animate-in slide-in-from-bottom-5 duration-500 transition-colors ${
        isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
      }`}>
        <div className="bg-green-700 p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <Bot size={28} aria-hidden="true" />
            <div>
                <p className="font-black leading-none">Bio-Assistente</p>
                <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Roberto Jardinagem</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            aria-label="Fechar assistente"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors focus:ring-2 focus:ring-white outline-none"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div 
          ref={scrollRef} 
          className={`h-[400px] overflow-y-auto p-6 space-y-6 transition-colors ${
            isDark ? 'bg-stone-950' : 'bg-stone-50'
          }`}
          aria-live="polite"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-4 rounded-3xl text-sm leading-relaxed transition-colors ${
                m.role === 'user' 
                  ? 'bg-green-600 text-white rounded-tr-none shadow-xl' 
                  : isDark 
                    ? 'bg-stone-800 text-stone-200 border border-stone-700 rounded-tl-none shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none shadow-sm'
              }`}>
                {m.text}
                {m.role === 'model' && i > 0 && (
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 px-4 rounded-xl font-bold hover:bg-green-700 transition-all text-xs focus:ring-2 focus:ring-white/50 outline-none"
                  >
                    Falar com Especialista <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-3 p-4">
                <Loader2 size={18} className="animate-spin text-green-600" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-400">Analisando jardim...</span>
              </div>
            </div>
          )}
        </div>

        <div className={`p-6 border-t transition-colors ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-100'}`}>
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Minha murta está amarela..."
              aria-label="Digite sua dúvida sobre plantas"
              className={`flex-1 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                isDark ? 'bg-stone-800 text-white placeholder-stone-500 border-stone-700' : 'bg-stone-100 text-stone-900 border-transparent'
              } border`}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              aria-label="Enviar pergunta"
              className="bg-green-600 text-white p-3 rounded-2xl hover:bg-green-700 transition-all disabled:opacity-50 active:scale-90 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <Send size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenAssistant;
