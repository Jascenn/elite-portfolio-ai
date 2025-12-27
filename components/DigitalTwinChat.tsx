
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../types';
import { chatWithTwin } from '../services/geminiService';
import { useLanguage } from '../App';

const DigitalTwinChat: React.FC = () => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: t.chat.intro }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set intro if chat is empty or was just cleared
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: t.chat.intro }]);
    }
  }, [lang, t.chat.intro]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatWithTwin(messages, input, lang);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: lang === 'zh' ? "抱歉，出错了。" : "Sorry, an error occurred." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    if (confirm(lang === 'zh' ? "确定要清空聊天记录吗？" : "Are you sure you want to clear the chat?")) {
      setMessages([{ role: 'model', text: t.chat.intro }]);
    }
  };

  return (
    <section id="ai-twin" className="py-24 bg-gradient-to-b from-[#0a0a0c] to-blue-900/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.chat.title}</h2>
          <p className="text-slate-400">{t.chat.desc}</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[600px]">
          <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl animate-pulse">
                🤖
              </div>
              <div>
                <h3 className="text-white font-bold leading-none">{lang === 'zh' ? 'AI 版我' : 'AI Me'}</h3>
                <span className="text-blue-400 text-xs font-semibold">{t.chat.status}</span>
              </div>
            </div>
            <button
              onClick={handleClear}
              className="p-2 text-slate-500 hover:text-red-400 transition-colors"
              title={lang === 'zh' ? "清空聊天" : "Clear Chat"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-lg'
                  : 'glass-card text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                  <div className={`prose prose-sm max-w-none ${m.role === 'user' ? 'prose-invert text-white' : 'prose-invert text-slate-200'}`}>
                    <ReactMarkdown>
                      {m.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-card px-5 py-3 rounded-2xl rounded-tl-none text-slate-400 text-sm animate-pulse flex items-center space-x-2">
                  <span>{t.chat.thinking}</span>
                  <span className="flex space-x-1">
                    <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/10 flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chat.placeholder}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
            >
              {lang === 'zh' ? '发送' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinChat;
