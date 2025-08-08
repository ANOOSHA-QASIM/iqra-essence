import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
];

const LanguageModal = ({ isOpen, onClose, onSelect }: LanguageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="glass-card p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-center mb-6 text-gradient-accent">
                Choose Your Language
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Select your preferred language for the best experience
              </p>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.code}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => onSelect(language.code)}
                      variant="outline"
                      className="w-full p-4 h-auto hover:bg-primary/10 hover:border-accent transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-left">
                          <div className="font-semibold group-hover:text-accent transition-colors">
                            {language.name}
                          </div>
                          <div className="text-sm text-muted-foreground font-arabic">
                            {language.native}
                          </div>
                        </span>
                        <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;