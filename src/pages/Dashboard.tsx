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
      description: "Speak your question",
      icon: FaMicrophone,
      path: "/voice",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Chat Mode",
      description: "Text conversation",
      icon: FaComments,
      path: "/chat",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Read Quran",
      description: "Browse & study",
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
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-accent">
            Assalamu Alaikum
          </h1>
          <p className="text-muted-foreground">
            How can I help you understand the Quran today?
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search Surah / Ayah / Topic..."
              className="pl-12 pr-4 py-6 text-lg glass-card border-accent/20 focus:border-accent"
            />
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Link to={action.path}>
                  <Card className="glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer border-accent/20">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center group-hover:glow-accent transition-all duration-300`}>
                        <action.icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Insight */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="glass-card p-6 border-accent/20">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-semibold text-gradient-accent">Daily Insight</h2>
              <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                <FaPlay className="mr-2" />
                Listen
              </Button>
            </div>
            <div className="space-y-4">
              <div className="text-right font-arabic text-xl text-accent leading-relaxed">
                وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
              </div>
              <div className="text-foreground">
                "And whoever fears Allah - He will make for him a way out."
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">Surah At-Talaq (65:2)</span> - This verse reminds us that when we are conscious of Allah and follow His guidance, He opens paths for us even in the most difficult situations.
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
          <h2 className="text-xl font-semibold mb-4">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <Card className="glass-card p-4 text-center hover:scale-105 transition-all duration-300 group cursor-pointer border-accent/20">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:glow-accent transition-all duration-300">
                    <category.icon className="text-xl text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
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