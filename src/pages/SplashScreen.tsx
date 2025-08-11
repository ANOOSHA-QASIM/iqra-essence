import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaMosque } from "react-icons/fa";

interface SplashScreenProps {
  onGetStarted: () => void;
}

const SplashScreen = ({ onGetStarted }: SplashScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-primary opacity-8"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-accent opacity-12"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-secondary opacity-6"
          animate={{
            scale: [1, 1.5, 1],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="text-center z-10 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center glow-accent shadow-elegant">
              <FaMosque className="text-5xl text-primary-foreground" />
            </div>
            <motion.div
              className="absolute inset-0 w-32 h-32 mx-auto rounded-3xl border-3 border-accent/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* App Name */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 text-gradient-accent font-arabic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Iqra AI
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Understand the Quran your way — through{" "}
          <span className="text-accent font-semibold">Voice</span>,{" "}
          <span className="text-accent font-semibold">Chat</span>, and{" "}
          <span className="text-accent font-semibold">AI</span>
        </motion.p>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            onClick={onGetStarted}
            variant="hero"
            size="lg"
            className="px-12 py-8 text-xl font-bold rounded-2xl hover:scale-110 transition-all duration-300 shadow-elegant"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Decorative Arabic Text */}
        <motion.div
          className="mt-16 text-accent/60 text-lg font-arabic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;