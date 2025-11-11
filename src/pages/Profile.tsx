import { motion } from "framer-motion";
import { User, Award, BookOpen, CheckCircle2, Flame, Edit, Star, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const userStats = {
    name: "Sarah Chen",
    college: "MIT Campus",
    year: "3rd Year",
    department: "Computer Science",
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    rank: 15,
    tasksCompleted: 47,
    sessionsTaught: 12,
    streak: 15,
  };

  const skills = [
    "Python", "React", "Data Structures", "Machine Learning", "UI/UX Design"
  ];

  const badges = [
    { name: "Early Bird", icon: "🌅", earned: true },
    { name: "Peer Mentor", icon: "👨‍🏫", earned: true },
    { name: "Quiz Master", icon: "🧠", earned: true },
    { name: "Campus Hero", icon: "🦸", earned: true },
    { name: "Study Streak", icon: "🔥", earned: true },
    { name: "Top Contributor", icon: "⭐", earned: false },
  ];

  const recentActivity = [
    { type: "task", text: "Completed Data Structures assignment", time: "2 hours ago" },
    { type: "teach", text: "Taught Python Basics to 3 students", time: "1 day ago" },
    { type: "lunch", text: "Joined lunch meetup at Cafeteria", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="p-6 gradient-primary text-primary-foreground">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 font-heading text-3xl font-bold backdrop-blur">
                  SC
                </div>
                <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-warning">
                  <span className="font-heading text-sm font-bold">12</span>
                </div>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                  <h1 className="font-heading text-2xl font-bold">
                    {userStats.name}
                  </h1>
                  <Badge className="bg-white/20 text-white gap-1">
                    <Flame className="h-3 w-3" />
                    {userStats.streak} day streak
                  </Badge>
                </div>
                <p className="mb-4 opacity-90">
                  {userStats.college} • {userStats.year} • {userStats.department}
                </p>
                
                <div className="mb-2">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>Level {userStats.level}</span>
                    <span>{userStats.xp} / {userStats.nextLevelXp} XP</span>
                  </div>
                  <Progress value={(userStats.xp / userStats.nextLevelXp) * 100} className="h-2" />
                </div>
              </div>

              <Button variant="secondary" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Stats */}
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-4 text-center">
                <Trophy className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="mb-1 font-heading text-2xl font-bold">#{userStats.rank}</div>
                <div className="text-sm text-muted-foreground">Campus Rank</div>
              </Card>
              <Card className="p-4 text-center">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-accent" />
                <div className="mb-1 font-heading text-2xl font-bold">{userStats.tasksCompleted}</div>
                <div className="text-sm text-muted-foreground">Tasks Done</div>
              </Card>
              <Card className="p-4 text-center">
                <BookOpen className="mx-auto mb-2 h-8 w-8 text-warning" />
                <div className="mb-1 font-heading text-2xl font-bold">{userStats.sessionsTaught}</div>
                <div className="text-sm text-muted-foreground">Sessions Taught</div>
              </Card>
            </div>

            {/* Skills */}
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="bg-primary/10 text-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-xl font-semibold">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 border-l-2 border-primary pl-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Badges */}
          <div>
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-xl font-semibold">Badges</h3>
              <div className="grid grid-cols-3 gap-4">
                {badges.map((badge) => (
                  <motion.div
                    key={badge.name}
                    whileHover={{ scale: 1.1 }}
                    className={`text-center ${!badge.earned && "opacity-40 grayscale"}`}
                  >
                    <div className="mb-2 text-4xl">{badge.icon}</div>
                    <div className="text-xs font-medium">{badge.name}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
