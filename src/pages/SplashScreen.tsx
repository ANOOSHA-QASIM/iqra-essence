import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaMosque } from "react-icons/fa";

interface SplashScreenProps {
  onGetStarted: () => void;
}

const SplashScreen = ({ onGetStarted }: SplashScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-accent opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="text-center z-10 max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center glow-accent">
              <FaMosque className="text-4xl text-primary-foreground" />
            </div>
            <motion.div
              className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl border-2 border-accent/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* App Name */}
        <motion.h1
          className="text-5xl font-bold mb-4 text-gradient-accent font-arabic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Iqra AI
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg text-muted-foreground mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
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
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            onClick={onGetStarted}
            className="btn-hero px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Decorative Arabic Text */}
        <motion.div
          className="mt-12 text-accent/30 text-sm font-arabic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;