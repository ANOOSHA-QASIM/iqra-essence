import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import SplashScreen from "./pages/SplashScreen";
import Dashboard from "./pages/Dashboard";
import ChatMode from "./pages/ChatMode";
import VoiceMode from "./pages/VoiceMode";
import TafseerMode from "./pages/TafseerMode";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";

// Components
import Navigation from "./components/Navigation";
import LanguageModal from "./components/LanguageModal";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleGetStarted = () => {
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageModal(false);
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen islamic-pattern">
            <SplashScreen onGetStarted={handleGetStarted} />
            <LanguageModal 
              isOpen={showLanguageModal}
              onClose={() => setShowLanguageModal(false)}
              onSelect={handleLanguageSelect}
            />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen islamic-pattern flex flex-col">
          <BrowserRouter>
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/chat" element={<ChatMode />} />
                <Route path="/voice" element={<VoiceMode />} />
                <Route path="/tafseer" element={<TafseerMode />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/premium" element={<Premium />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;