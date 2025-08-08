import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FaUser, 
  FaBookmark, 
  FaHistory, 
  FaFire, 
  FaStar,
  FaCog,
  FaDownload,
  FaShare
} from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const isMobile = useIsMobile();

  const stats = [
    { label: "Questions Asked", value: "147", icon: FaHistory, color: "text-accent" },
    { label: "Verses Studied", value: "89", icon: FaBookmark, color: "text-primary" },
    { label: "Current Streak", value: "12", icon: FaFire, color: "text-orange-500" },
    { label: "Knowledge Score", value: "85", icon: FaStar, color: "text-yellow-500" },
  ];

  const recentActivity = [
    { title: "Asked about Ayat al-Kursi", time: "2 hours ago", type: "question" },
    { title: "Saved Surah Al-Mulk commentary", time: "1 day ago", type: "bookmark" },
    { title: "Completed daily reading goal", time: "2 days ago", type: "achievement" },
    { title: "Asked about prayer times", time: "3 days ago", type: "question" },
  ];

  const recommendations = [
    { title: "Surah Ar-Rahman", description: "Beautiful chapter about Allah's blessings", progress: 60 },
    { title: "Concept of Taqwa", description: "Understanding God-consciousness", progress: 30 },
    { title: "Stories of the Prophets", description: "Inspiring narratives from the Quran", progress: 80 },
  ];

  return (
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
            <FaUser className="text-3xl text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-accent mb-2">
            Muhammad Ahmed
          </h1>
          <p className="text-muted-foreground">
            Learning the Quran since March 2024
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <Card className="glass-card p-4 text-center border-accent/20">
                <div className={`w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-primary flex items-center justify-center`}>
                  <stat.icon className={`text-lg text-primary-foreground`} />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="glass-card p-6 border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-accent">Recent Activity</h2>
                <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'question' ? 'bg-accent/20 text-accent' :
                      activity.type === 'bookmark' ? 'bg-primary/20 text-primary' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {activity.type === 'question' ? <FaHistory className="text-xs" /> :
                       activity.type === 'bookmark' ? <FaBookmark className="text-xs" /> :
                       <FaFire className="text-xs" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="glass-card p-6 border-accent/20">
              <h2 className="text-xl font-semibold text-accent mb-4">AI Recommendations</h2>
              
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="p-4 rounded-lg bg-gradient-surface border border-border/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <p className="text-xs text-muted-foreground">{rec.description}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                        Start
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-accent">{rec.progress}%</span>
                      </div>
                      <Progress value={rec.progress} className="h-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Daily Streak */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="glass-card p-6 border-accent/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-accent">Daily Streak</h2>
              <div className="flex items-center space-x-2 text-orange-500">
                <FaFire />
                <span className="font-bold">12 days</span>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`h-10 rounded-lg flex items-center justify-center text-xs font-medium ${
                    i < 5 
                      ? 'bg-gradient-accent text-accent-foreground' 
                      : 'bg-muted/20 text-muted-foreground'
                  }`}
                >
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}
                </div>
              ))}
            </div>
            
            <Progress value={71} className="h-3 mb-2" />
            <p className="text-sm text-muted-foreground">
              5 more days to reach your weekly goal of 7 days!
            </p>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button variant="outline" className="border-accent/20 hover:bg-accent/10 p-4 h-auto">
            <div className="text-center">
              <FaCog className="mx-auto mb-2 text-accent" />
              <span className="text-sm">Settings</span>
            </div>
          </Button>
          
          <Button variant="outline" className="border-accent/20 hover:bg-accent/10 p-4 h-auto">
            <div className="text-center">
              <FaDownload className="mx-auto mb-2 text-accent" />
              <span className="text-sm">Offline Mode</span>
            </div>
          </Button>
          
          <Button variant="outline" className="border-accent/20 hover:bg-accent/10 p-4 h-auto">
            <div className="text-center">
              <FaShare className="mx-auto mb-2 text-accent" />
              <span className="text-sm">Share App</span>
            </div>
          </Button>
          
          <Button variant="outline" className="border-accent/20 hover:bg-accent/10 p-4 h-auto">
            <div className="text-center">
              <FaStar className="mx-auto mb-2 text-accent" />
              <span className="text-sm">Rate Us</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;