import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';

const QUICK_ACTIONS = [
  { label: '🌐 Web Development', payload: 'web' },
  { label: '📱 Mobile Apps', payload: 'mobile' },
  { label: '☁️ Cloud Services', payload: 'cloud' },
  { label: '💰 Request Estimate', payload: 'pricing' },
  { label: '📞 Contact Team', payload: 'contact' }
];

const getSmartResponse = (query) => {
  const q = query.toLowerCase();

  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('greetings')) {
    return {
      text: "Hello! 👋 Welcome to Dacitos Technologies. What project or service can I help you with today?",
      suggestions: ['🌐 Web Development', '📱 Mobile Apps', '💰 Request Estimate']
    };
  }

  if (q.includes('web') || q.includes('react') || q.includes('next') || q.includes('website') || q.includes('frontend')) {
    return {
      text: "We engineer high-performance React & Next.js web applications, custom single-page apps, and scalable frontend solutions optimized for speed and conversion.",
      suggestions: ['View Web Tech Stack', 'Request Estimate', 'Explore Mobile Apps']
    };
  }

  if (q.includes('mobile') || q.includes('app') || q.includes('ios') || q.includes('android') || q.includes('flutter')) {
    return {
      text: "Our team builds cross-platform iOS & Android mobile applications using React Native and Flutter with native 60fps UI performance and offline support.",
      suggestions: ['App Development Process', 'Request Estimate', 'Cloud Integration']
    };
  }

  if (q.includes('cloud') || q.includes('aws') || q.includes('azure') || q.includes('devops') || q.includes('docker')) {
    return {
      text: "We provide AWS & Azure cloud migration, serverless setup, Docker containerization, and zero-downtime CI/CD deployment pipelines.",
      suggestions: ['Cloud Security', 'Request Estimate', 'Custom Software']
    };
  }

  if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('estimate') || q.includes('pricing')) {
    return {
      text: "Project costs vary based on scope, technical complexity, and timeline. You can fill out our brief contact form or schedule a direct architecture review with our team.",
      suggestions: ['Go to Contact Page', 'Talk to an Expert', 'Explore Services']
    };
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach')) {
    return {
      text: "You can reach our engineering team directly via email or through our Contact page.",
      suggestions: ['Go to Contact Page', 'Request Estimate']
    };
  }

  if (q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('framework')) {
    return {
      text: "Our core technology stack includes React 19, Next.js, Node.js, Express, Python, Tailwind CSS, PostgreSQL, MongoDB, Docker, and AWS.",
      suggestions: ['Web Development', 'Mobile Apps', 'Custom Software']
    };
  }

  // Fallback for unmatched queries
  return {
    text: "Thanks for your question! I can help guide you through our software services, tech stack, or project estimations. Select an option below or send us a message through our Contact page.",
    suggestions: ['🌐 Web Development', '📱 Mobile Apps', '💰 Request Estimate', '📞 Contact Team']
  };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to Dacitos Technologies. How can I assist you with your software project today?",
      suggestions: ['🌐 Web Development', '📱 Mobile Apps', '💰 Request Estimate']
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const processUserMessage = (userText) => {
    if (!userText.trim()) return;

    // Add User Message
    const userMsg = { id: Date.now(), sender: 'user', text: userText.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate instant natural response delay
    setTimeout(() => {
      const responseData = getSmartResponse(userText);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: responseData.text,
          suggestions: responseData.suggestions
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processUserMessage(input);
  };

  const handleChipClick = (suggestionText) => {
    processUserMessage(suggestionText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[90vw] sm:w-[380px] h-[540px] rounded-3xl bg-[#0F111A] border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-[#0A0C14] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    Dacitos Assistant <Sparkles size={13} className="text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Frontend Interactive Engine
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={msg.id} className="space-y-2">
                    <div className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
                      {isBot && (
                        <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mb-0.5 border border-blue-500/20">
                          <Bot size={13} />
                        </div>
                      )}

                      <div
                        className={`max-w-[82%] text-xs leading-relaxed px-3.5 py-2.5 rounded-2xl ${isBot
                            ? 'bg-white/5 text-slate-200 border border-white/10 rounded-bl-xs'
                            : 'bg-blue-600 text-white rounded-br-xs shadow-md shadow-blue-600/20'
                          }`}
                      >
                        {msg.text}
                      </div>

                      {!isBot && (
                        <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mb-0.5">
                          <User size={13} />
                        </div>
                      )}
                    </div>

                    {/* Interactive Suggestion Chips */}
                    {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="pl-8 flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestions.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleChipClick(chip)}
                            className="text-[11px] font-medium px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 text-blue-300 hover:text-white transition-all flex items-center gap-1"
                          >
                            <span>{chip}</span>
                            <ChevronRight size={12} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-400 pl-1">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <RefreshCw size={12} className="animate-spin" />
                  </div>
                  <span className="text-[11px] font-mono">Dacitos Assistant is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Toolbar */}
            <div className="px-3 py-2 bg-[#0A0C14]/80 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.payload}
                  onClick={() => handleChipClick(action.label)}
                  className="text-[10px] font-mono whitespace-nowrap px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-colors shrink-0"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-[#0A0C14] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about web, mobile, cloud, estimates..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 shrink-0"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all relative group"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-300 border-2 border-[#07080E] animate-ping" />
        )}
      </button>

    </div>
  );
}