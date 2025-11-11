import { motion } from "framer-motion";
import { Bell, BookOpen, Users, Package, CheckCircle2, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const notifications = [
    {
      id: "1",
      type: "booking",
      icon: BookOpen,
      title: "New Session Booked!",
      message: "Alex Kumar booked your Data Structures session",
      time: "5 minutes ago",
      unread: true,
      color: "text-primary",
    },
    {
      id: "2",
      type: "lunch",
      icon: Users,
      title: "Lunch Match Found",
      message: "You've been matched with 3 students for lunch at 1 PM",
      time: "1 hour ago",
      unread: true,
      color: "text-accent",
    },
    {
      id: "3",
      type: "lostfound",
      icon: Package,
      title: "Item Claim Request",
      message: "Someone claimed your lost water bottle",
      time: "2 hours ago",
      unread: true,
      color: "text-warning",
    },
    {
      id: "4",
      type: "task",
      icon: CheckCircle2,
      title: "Task Reminder",
      message: "Your Calculus assignment is due tomorrow",
      time: "3 hours ago",
      unread: false,
      color: "text-muted-foreground",
    },
    {
      id: "5",
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      message: "Priya sent you a message about the project",
      time: "5 hours ago",
      unread: false,
      color: "text-muted-foreground",
    },
    {
      id: "6",
      type: "achievement",
      icon: CheckCircle2,
      title: "Level Up! 🎉",
      message: "You've reached Level 12! Keep up the great work!",
      time: "1 day ago",
      unread: false,
      color: "text-muted-foreground",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-8 w-8 text-primary" />
              <h1 className="font-heading text-3xl font-bold sm:text-4xl">
                Notifications
              </h1>
            </div>
            <Button variant="outline" size="sm">
              Mark all as read
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Stay updated with your campus activity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <motion.div key={notification.id} variants={itemVariants}>
                <Card
                  className={`p-4 transition-all hover:shadow-md ${
                    notification.unread ? "border-l-4 border-l-primary bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        notification.unread ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${notification.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="font-heading text-base font-semibold">
                          {notification.title}
                        </h3>
                        {notification.unread && (
                          <Badge className="bg-primary/10 text-primary">New</Badge>
                        )}
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                        {notification.unread && (
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;
