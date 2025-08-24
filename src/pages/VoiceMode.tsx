import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMicrophone, FaStop, FaPlay, FaLanguage } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const VoiceMode = () => {
  const isMobile = useIsMobile();
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [response, setResponse] = useState("");

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate listening
      setTimeout(() => {
        setTranscription("What is the meaning of Ayat al-Kursi?");
        setIsListening(false);
        // Simulate AI response
        setTimeout(() => {
          setResponse("Ayat al-Kursi is one of the most powerful verses in the Quran, found in Surah Al-Baqarah verse 255. It speaks about Allah's supreme authority, His eternal nature, and His all-encompassing knowledge...");
        }, 1000);
      }, 3000);
    } else {
      setTranscription("");
      setResponse("");
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 5000);
    }
  };

  return (
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
            Voice Mode
          </h1>
          <p className="text-muted-foreground">
            Speak naturally and get detailed explanations
          </p>
        </motion.div>

        {/* Language Toggle */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
            <FaLanguage className="mr-2" />
            English
          </Button>
        </motion.div>

        {/* Main Voice Interface */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            {/* Animated Microphone */}
            <motion.div
              className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isListening 
                  ? 'bg-gradient-accent glow-accent' 
                  : 'bg-gradient-primary hover:scale-105'
              }`}
              onClick={toggleListening}
              animate={isListening ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px hsl(var(--accent) / 0.3)",
                  "0 0 40px hsl(var(--accent) / 0.6)",
                  "0 0 20px hsl(var(--accent) / 0.3)"
                ]
              } : {}}
              transition={isListening ? {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              } : {}}
            >
              {isListening ? (
                <FaStop className="text-4xl text-accent-foreground" />
              ) : (
                <FaMicrophone className="text-4xl text-primary-foreground" />
              )}
            </motion.div>

            {/* Wave Animation */}
            {isListening && (
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 rounded-full border-2 border-accent/30"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <motion.p
            className="mt-6 text-lg"
            animate={{ opacity: isListening ? [1, 0.5, 1] : 1 }}
            transition={isListening ? { duration: 1, repeat: Infinity } : {}}
          >
            {isListening ? "Listening..." : "Tap to speak"}
          </motion.p>
        </motion.div>

        {/* Transcription */}
        {transcription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Card className="glass-card p-6 border-accent/20">
              <h3 className="text-sm font-semibold text-accent mb-2">You said:</h3>
              <p className="text-foreground">{transcription}</p>
            </Card>
          </motion.div>
        )}

        {/* AI Response */}
        {response && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Card className="glass-card p-6 border-accent/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-accent">AI Response:</h3>
                <Button
                  size="sm"
                  onClick={togglePlayback}
                  className={`btn-hero ${isPlaying ? 'animate-pulse' : ''}`}
                >
                  <FaPlay className="mr-2" />
                  {isPlaying ? 'Playing...' : 'Play Audio'}
                </Button>
              </div>
              <p className="text-foreground leading-relaxed">{response}</p>
            </Card>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="glass-card p-6 border-accent/20">
            <h3 className="text-lg font-semibold text-accent mb-4">Voice Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Speak clearly and at a normal pace</li>
              <li>• Ask about specific verses, concepts, or topics</li>
              <li>• You can ask in English, Urdu, or Arabic</li>
              <li>• Say "repeat" to hear the response again</li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VoiceMode;