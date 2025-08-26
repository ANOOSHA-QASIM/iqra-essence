import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FaSearch, 
  FaPlay, 
  FaBookmark, 
  FaFilter,
  FaChevronRight,
  FaLanguage
} from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const TafseerMode = () => {
  const isMobile = useIsMobile();
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);

  // API will be integrated here
  // This would fetch the list of surahs from the Quran API
  const surahs = [
    { number: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7, meaning: "The Opening" },
    { number: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286, meaning: "The Cow" },
    { number: 3, name: "Ali 'Imran", arabic: "آل عمران", verses: 200, meaning: "Family of Imran" },
    { number: 4, name: "An-Nisa", arabic: "النساء", verses: 176, meaning: "The Women" },
    { number: 5, name: "Al-Ma'idah", arabic: "المائدة", verses: 120, meaning: "The Table" },
  ];

  const currentVerse = {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillahi Ar-Rahman Ar-Raheem",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
    reference: "Al-Fatihah 1:1"
  };

  return (
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
            Tafseer & Study
          </h1>
          <p className="text-muted-foreground">
            Deep understanding of Quranic verses with scholarly commentary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Surah List */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-4 border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Surahs</h2>
                <Button size="sm" variant="ghost" className="text-accent">
                  <FaFilter />
                </Button>
              </div>

              {/* Search */}
              <div className="relative mb-4">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm" />
                <Input
                  placeholder="Search surah..."
                  className="pl-10 bg-background/50 border-border/50"
                />
              </div>

              {/* Surah List */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {surahs.map((surah, index) => (
                  <motion.div
                    key={surah.number}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-between p-3 h-auto hover:bg-primary/10 ${
                        selectedSurah === surah.number ? 'bg-primary/20 border-accent/50' : ''
                      }`}
                      onClick={() => {
                        setSelectedSurah(surah.number);
                        // API will be integrated here
                        // This would fetch verses and tafseer for the selected surah
                      }}
                    >
                      <div className="text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground text-sm flex items-center justify-center">
                            {surah.number}
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{surah.name}</div>
                            <div className="text-xs text-muted-foreground">{surah.meaning}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-arabic text-accent">{surah.arabic}</div>
                        <div className="text-xs text-muted-foreground">{surah.verses} verses</div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-6 border-accent/20">
              {selectedSurah ? (
                <div>
                  {/* Verse Display */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-accent">
                          {surahs.find(s => s.number === selectedSurah)?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {currentVerse.reference}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                          <FaPlay className="mr-2" />
                          Recite
                        </Button>
                        <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                          <FaBookmark />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                          <FaLanguage />
                        </Button>
                      </div>
                    </div>

                    {/* Arabic Text */}
                    <div className="text-right mb-4 p-4 bg-gradient-surface rounded-lg">
                      <p className="text-2xl font-arabic text-accent leading-loose">
                        {currentVerse.arabic}
                      </p>
                    </div>

                    {/* Transliteration */}
                    <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        {currentVerse.transliteration}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                      <p className="text-foreground font-medium">
                        {currentVerse.translation}
                      </p>
                    </div>
                  </div>

                  {/* Tafseer Tabs */}
                  <Tabs defaultValue="short" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="short">Quick Tafseer</TabsTrigger>
                      <TabsTrigger value="detailed">Detailed Commentary</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="short" className="space-y-4">
                      <div className="p-4 bg-card/50 rounded-lg">
                        <h4 className="font-semibold text-accent mb-2">Brief Explanation</h4>
                        <p className="text-sm text-foreground leading-relaxed">
                          This is the opening verse of the Quran, known as the Basmala. It is a declaration of beginning any good deed in the name of Allah, acknowledging His mercy and compassion. The word "Rahman" refers to Allah's mercy that encompasses all creation, while "Raheem" refers to His special mercy for the believers.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="detailed" className="space-y-4">
                      <div className="p-4 bg-card/50 rounded-lg">
                        <h4 className="font-semibold text-accent mb-2">Scholarly Commentary</h4>
                        <div className="space-y-3 text-sm text-foreground leading-relaxed">
                          <p>
                            <strong>Ibn Kathir:</strong> This verse is a supplication and a declaration of seeking Allah's help and blessing. It teaches us to begin every action with the remembrance of Allah.
                          </p>
                          <p>
                            <strong>Al-Qurtubi:</strong> The repetition of Allah's attributes of mercy (Ar-Rahman Ar-Raheem) emphasizes the overwhelming nature of His compassion and the hope it should instill in believers.
                          </p>
                          <p>
                            <strong>At-Tabari:</strong> This formula was used by all the prophets and is the key to every revealed book. It represents the essence of monotheism and trust in Allah's guidance.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <FaChevronRight className="text-primary-foreground text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">
                    Select a Surah to Begin
                  </h3>
                  <p className="text-muted-foreground">
                    Choose any Surah from the list to explore its verses and commentary
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TafseerMode;