import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  FaSearch, 
  FaMicrophone, 
  FaComments, 
  FaBook, 
  FaPlay,
  FaQuran,
  FaLanguage,
  FaVolumeUp 
} from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const isMobile = useIsMobile();

  const quickActions = [
    {
      title: "Voice Ask",
      description: "Speak your question naturally",
      icon: FaMicrophone,
      path: "/voice",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Chat Mode",
      description: "Text conversation with AI",
      icon: FaComments,
      path: "/chat",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Read Quran",
      description: "Browse & study with tafseer",
      icon: FaBook,
      path: "/tafseer",
      gradient: "bg-gradient-accent"
    }
  ];

  const categories = [
    { name: "Quran", icon: FaQuran, count: "114 Surahs" },
    { name: "Tafseer", icon: FaBook, count: "Multiple scholars" },
    { name: "Translation", icon: FaLanguage, count: "20+ languages" },
    { name: "Recitation", icon: FaVolumeUp, count: "Famous reciters" },
  ];

  return (
    <div className={`min-h-screen bg-background ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-accent font-arabic">
            السلام عليكم
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            How can I help you understand the Quran today?
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative max-w-3xl mx-auto">
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xl" />
            <Input
              placeholder="Search Surah / Ayah / Topic..."
              className="pl-16 pr-6 py-8 text-xl rounded-2xl border-2 border-border focus:border-accent transition-all duration-300 shadow-card hover:shadow-elegant bg-card text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={action.path}>
                  <Card className="glass-card p-8 hover:shadow-elegant transition-all duration-300 group cursor-pointer border-accent/20 h-full text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${action.gradient} flex items-center justify-center glow-accent group-hover:scale-110 transition-all duration-300`}>
                      <action.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {action.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Insight */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="glass-card p-8 border-accent/20 max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-gradient-accent">Daily Insight</h2>
              <Button size="lg" variant="outline" className="text-accent hover:bg-accent hover:text-accent-foreground border-accent/30">
                <FaPlay className="mr-2" />
                Listen
              </Button>
            </div>
            <div className="space-y-6">
              <div className="text-right font-arabic text-2xl md:text-3xl text-accent leading-relaxed">
                وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
              </div>
              <div className="text-lg md:text-xl text-foreground leading-relaxed">
                "And whoever fears Allah - He will make for him a way out."
              </div>
              <div className="text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">Surah At-Talaq (65:2)</span> - This verse reminds us that when we are conscious of Allah and follow His guidance, He opens paths for us even in the most difficult situations.
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="glass-card p-6 text-center hover:shadow-elegant transition-all duration-300 group cursor-pointer border-accent/20 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:glow-accent group-hover:scale-110 transition-all duration-300">
                    <category.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;