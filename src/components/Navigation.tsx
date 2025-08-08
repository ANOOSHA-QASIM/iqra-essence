import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaMosque, FaHome, FaComments, FaMicrophone, FaBook, FaUser } from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/chat', icon: FaComments, label: 'Chat' },
    { path: '/voice', icon: FaMicrophone, label: 'Voice' },
    { path: '/tafseer', icon: FaBook, label: 'Tafseer' },
    { path: '/profile', icon: FaUser, label: 'Profile' },
  ];

  if (isMobile) {
    return (
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-t border-border z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center py-2 px-3 relative"
              >
                <motion.div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-primary text-primary-foreground glow-accent' 
                      : 'text-muted-foreground hover:text-accent'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-lg" />
                </motion.div>
                <span className={`text-xs mt-1 transition-colors ${
                  isActive ? 'text-accent font-medium' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-b border-border z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FaMosque className="text-primary-foreground text-lg" />
            </div>
            <span className="text-xl font-bold text-gradient-accent font-arabic">
              Iqra AI
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-accent hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-sm" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Premium Button */}
          <Link to="/premium">
            <motion.button
              className="btn-hero px-4 py-2 text-sm font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Premium
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;