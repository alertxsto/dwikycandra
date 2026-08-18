'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

const SUGGESTIONS = [
  'What does Dwiky do?',
  'Tell me about ZeroCode',
  'Why Tumbleweed?',
  'Is he available for hire?',
]

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hey. I'm NEBULA — Dwiky's portfolio assistant. Ask me about his projects, skills, or how to collaborate. Or pick a starter prompt below.",
  timestamp: new Date().toISOString(),
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString(),
    }

    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages
            .filter((m) => m.id !== 'welcome')
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const data = await res.json()
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: data.response || 'Sorry, I lost my train of thought. Try again?',
        timestamp: data.timestamp || new Date().toISOString(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      console.error('Chat error:', err)
      const errorMsg: Message = {
        id: `e-${Date.now()}`,
        role: 'assistant',
        content:
          'Connection dropped. If this keeps happening, reach Dwiky directly at dwikycandra005@gmail.com.',
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating launcher button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-2xl shadow-accent/30 hover:scale-105 transition-transform ${isOpen ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="Open chat with NEBULA"
        data-cursor="hover"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        <MessageCircle size={26} className="relative z-10" />
        {/* Online indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 w-[calc(100vw-2.5rem)] sm:w-96 h-[600px] max-h-[calc(100vh-3rem)] flex flex-col bg-background border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold">
                  <Sparkles size={16} />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-background" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm tracking-tight">
                    NEBULA
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online · Dwiky&apos;s AI
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 chatbot-scroll"
            >
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                      <Sparkles size={12} />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Suggestion chips — only show on first interaction */}
              {messages.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2 space-y-2"
                >
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground pl-9">
                    Try asking
                  </div>
                  <div className="flex flex-col gap-1.5 pl-9">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-left text-xs font-mono px-3 py-2 border border-border rounded-full text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                        data-cursor="hover"
                      >
                        → {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-3 py-3 border-t border-border bg-secondary/30"
            >
              <div className="flex items-center gap-2 bg-background border border-border rounded-full pl-4 pr-1 py-1 focus-within:border-accent transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask NEBULA anything…"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-1.5"
                  disabled={isTyping}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-accent-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="mt-1.5 px-2 font-mono text-[9px] text-muted-foreground/60 text-center">
                Powered by NEBULA · responses are AI-generated
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-2 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
          isUser
            ? 'bg-foreground text-background'
            : 'bg-accent text-accent-foreground'
        }`}
      >
        {isUser ? (
          <span className="font-display font-bold text-xs">U</span>
        ) : (
          <Sparkles size={12} />
        )}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? 'bg-foreground text-background rounded-2xl rounded-tr-sm'
            : 'bg-secondary text-foreground rounded-2xl rounded-tl-sm'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  )
}
