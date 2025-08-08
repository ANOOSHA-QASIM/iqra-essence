import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPaperPlane, FaMicrophone, FaPaperclip, FaPlay, FaLink } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  audioUrl?: string;
  references?: string[];
}

const ChatMode = () => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Assalamu Alaikum! I'm here to help you understand the Quran. Feel free to ask me about any verse, concept, or topic you'd like to explore.",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "This verse from Surah Al-Baqarah (2:255) is known as Ayat al-Kursi, one of the most powerful verses in the Quran. It speaks about Allah's supreme authority and knowledge. The verse emphasizes that Allah's knowledge encompasses all things, and His throne extends over the heavens and the earth.",
        isUser: false,
        timestamp: new Date(),
        audioUrl: "#",
        references: ["Surah Al-Baqarah 2:255", "Tafseer Ibn Kathir"]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
            Chat with Iqra AI
          </h1>
          <p className="text-muted-foreground">
            Ask anything about the Quran and receive detailed explanations
          </p>
        </motion.div>

        {/* Chat Messages */}
        <div className="h-[60vh] overflow-y-auto mb-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <Card className={`max-w-[80%] p-4 ${
                  message.isUser 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'glass-card border-accent/20'
                }`}>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    
                    {/* AI Message Features */}
                    {!message.isUser && (
                      <div className="flex items-center justify-between pt-2 border-t border-border/30">
                        <div className="flex items-center space-x-2">
                          {message.audioUrl && (
                            <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                              <FaPlay className="mr-1" />
                              Play Audio
                            </Button>
                          )}
                          {message.references && (
                            <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                              <FaLink className="mr-1" />
                              References
                            </Button>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    )}

                    {/* User Message Timestamp */}
                    {message.isUser && (
                      <div className="flex justify-end">
                        <span className="text-xs text-primary-foreground/70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <Card className="glass-card p-4 border-accent/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">AI is typing...</span>
                </div>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="glass-card p-4 border-accent/20">
            <div className="flex items-end space-x-3">
              <Button
                size="icon"
                variant="ghost"
                className="text-accent hover:bg-accent/10 shrink-0"
              >
                <FaPaperclip />
              </Button>
              
              <div className="flex-1">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about any verse, concept, or topic..."
                  className="border-none bg-transparent focus:ring-0"
                />
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-accent hover:bg-accent/10"
                >
                  <FaMicrophone />
                </Button>
                
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="btn-hero"
                  disabled={!inputValue.trim()}
                >
                  <FaPaperPlane />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatMode;