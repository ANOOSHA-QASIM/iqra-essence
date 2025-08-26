import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FaCheck, 
  FaTimes, 
  FaCrown, 
  FaDownload,
  FaInfinity,
  FaUsers,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const Premium = () => {
  const isMobile = useIsMobile();

  const features = [
    {
      name: "Daily Questions",
      free: "5 per day",
      premium: "Unlimited",
      icon: FaInfinity
    },
    {
      name: "Offline Access",
      free: false,
      premium: true,
      icon: FaDownload
    },
    {
      name: "Deep Tafseer",
      free: "Basic",
      premium: "Scholarly commentaries",
      icon: FaUsers
    },
    {
      name: "Voice Recognition",
      free: "Standard",
      premium: "Advanced multilingual",
      icon: FaShieldAlt
    },
    {
      name: "Ad-free Experience",
      free: false,
      premium: true,
      icon: FaShieldAlt
    },
    {
      name: "Priority Support",
      free: false,
      premium: true,
      icon: FaStar
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with Quran study",
      features: [
        "5 questions per day",
        "Basic tafseer",
        "Standard voice recognition",
        "Community support"
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline" as const,
      isPopular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Unlock the full potential of AI-powered Quran study",
      features: [
        "Unlimited questions",
        "Offline access to all content",
        "Deep scholarly tafseer",
        "Advanced voice recognition",
        "Ad-free experience",
        "Priority support",
        "Early access to new features"
      ],
      buttonText: "Upgrade Now",
      buttonVariant: "default" as const,
      isPopular: true
    }
  ];

  return (
    <div className={`min-h-screen ${isMobile ? 'pb-20 pt-4' : 'pt-20'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center glow-accent">
            <FaCrown className="text-2xl text-accent-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-accent mb-4">
            Unlock Premium Features
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your Quranic learning to the next level with unlimited access, 
            offline mode, and scholarly insights from renowned Islamic scholars.
          </p>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="glass-card p-6 border-accent/20 overflow-x-auto">
            <h2 className="text-2xl font-semibold text-center text-accent mb-6">
              Feature Comparison
            </h2>
            
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-lg font-semibold text-muted-foreground">Features</div>
                <div className="text-lg font-semibold text-center">Free</div>
                <div className="text-lg font-semibold text-center text-accent">Premium</div>
              </div>
              
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="grid grid-cols-3 gap-4 py-4 border-b border-border/50 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center space-x-3">
                    <feature.icon className="text-accent" />
                    <span className="font-medium">{feature.name}</span>
                  </div>
                  
                  <div className="text-center">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? (
                        <FaCheck className="mx-auto text-green-500" />
                      ) : (
                        <FaTimes className="mx-auto text-red-500" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground">{feature.free}</span>
                    )}
                  </div>
                  
                  <div className="text-center">
                    {typeof feature.premium === 'boolean' ? (
                      feature.premium ? (
                        <FaCheck className="mx-auto text-accent" />
                      ) : (
                        <FaTimes className="mx-auto text-red-500" />
                      )
                    ) : (
                      <span className="text-sm text-accent font-medium">{feature.premium}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-accent text-accent-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`glass-card p-8 h-full border-accent/20 ${
                plan.isPopular ? 'ring-2 ring-accent/30 scale-105' : ''
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <FaCheck className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.isPopular ? 'btn-hero' : 'border-accent/20 hover:bg-accent/10'
                  }`}
                  disabled={plan.name === 'Free'}
                  onClick={() => {
                    if (plan.name === 'Premium') {
                      // Stripe integration will be added here
                      // This would initiate the Stripe checkout process
                      console.log("Stripe checkout would be initiated here");
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="glass-card p-8 border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Why Choose Premium?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="text-left">
                <p>• Cancel anytime, no questions asked</p>
                <p>• 7-day free trial for new users</p>
                <p>• Secure payment processing</p>
              </div>
              <div className="text-left">
                <p>• Regular feature updates</p>
                <p>• Community of serious learners</p>
                <p>• 24/7 customer support</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Premium;