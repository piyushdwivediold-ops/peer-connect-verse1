import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Award, Flame, Star, Crown } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  cgpa?: number;
  syllabusComplete: number;
  badges: string[];
  streak: number;
  change: "up" | "down" | "same";
}

const Leaderboard = () => {
  const leaders: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "SC",
      points: 9850,
      cgpa: 9.8,
      syllabusComplete: 95,
      badges: ["🏆 Top Learner", "📚 Bookworm", "🔥 Streak Master"],
      streak: 45,
      change: "same"
    },
    {
      rank: 2,
      name: "Alex Kumar",
      avatar: "AK",
      points: 9720,
      cgpa: 9.6,
      syllabusComplete: 92,
      badges: ["🎯 Quiz Master", "💻 Code Ninja"],
      streak: 38,
      change: "up"
    },
    {
      rank: 3,
      name: "Emma Wilson",
      avatar: "EW",
      points: 9580,
      cgpa: 9.5,
      syllabusComplete: 90,
      badges: ["🌟 Rising Star", "👥 Peer Mentor"],
      streak: 32,
      change: "down"
    },
    {
      rank: 4,
      name: "Mike Johnson",
      avatar: "MJ",
      points: 9320,
      cgpa: 9.3,
      syllabusComplete: 88,
      badges: ["📖 Consistent", "🎓 Scholar"],
      streak: 28,
      change: "up"
    },
    {
      rank: 5,
      name: "Priya Sharma",
      avatar: "PS",
      points: 9180,
      syllabusComplete: 87,
      badges: ["💪 Dedicated", "🚀 Fast Learner"],
      streak: 25,
      change: "same"
    }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-warning";
    if (rank === 2) return "text-muted-foreground";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-6 w-6 text-warning" />;
    if (rank === 2) return <Trophy className="h-5 w-5 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-2 font-heading text-3xl font-bold sm:text-4xl">
            Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Top performers across campus
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Button variant="default" size="sm">
            All Campus
          </Button>
          <Button variant="outline" size="sm">
            My Department
          </Button>
          <Button variant="outline" size="sm">
            My Year
          </Button>
          <Button variant="outline" size="sm">
            This Month
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">10,234</div>
            <div className="text-sm text-muted-foreground">Active Learners</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-success">1.2M</div>
            <div className="text-sm text-muted-foreground">Points Earned</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-warning">4.5k</div>
            <div className="text-sm text-muted-foreground">Badges Unlocked</div>
          </Card>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-8">
          <Card className="overflow-hidden">
            <div className="gradient-primary p-6 text-center text-primary-foreground">
              <h2 className="mb-2 font-heading text-2xl font-bold">
                🏆 Top 3 Champions
              </h2>
              <p className="opacity-90">This semester's highest achievers</p>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-3">
              {leaders.slice(0, 3).map((leader) => (
                <div
                  key={leader.rank}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${leader.rank * 100}ms` }}
                >
                  <div className="relative mb-4 inline-block">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover font-heading text-2xl font-bold text-primary-foreground shadow-lg">
                      {leader.avatar}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-card">
                        {getRankIcon(leader.rank)}
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-1 font-heading text-lg font-bold">
                    {leader.name}
                  </h3>

                  <div className="mb-3 flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold text-primary">
                      {leader.points.toLocaleString()} pts
                    </span>
                  </div>

                  {leader.cgpa && (
                    <Badge variant="secondary" className="mb-2">
                      CGPA: {leader.cgpa}
                    </Badge>
                  )}

                  <div className="flex flex-wrap justify-center gap-1">
                    {leader.badges.slice(0, 2).map((badge, idx) => (
                      <span key={idx} className="text-xs">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Full Leaderboard */}
        <Card>
          <div className="p-6">
            <h3 className="mb-6 font-heading text-xl font-bold">
              Complete Rankings
            </h3>

            <div className="space-y-4">
              {leaders.map((leader) => (
                <div
                  key={leader.rank}
                  className="group flex items-center gap-4 rounded-xl border-2 border-border p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  {/* Rank */}
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-secondary font-heading text-xl font-bold ${getRankColor(
                        leader.rank
                      )}`}
                    >
                      #{leader.rank}
                    </div>
                  </div>

                  {/* Avatar */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                    {leader.avatar}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h4 className="font-heading text-lg font-semibold">
                        {leader.name}
                      </h4>
                      {leader.change === "up" && (
                        <Badge className="bg-success/10 text-success">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Rising
                        </Badge>
                      )}
                    </div>

                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        <Star className="mr-1 h-3 w-3" />
                        {leader.points.toLocaleString()} pts
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Flame className="mr-1 h-3 w-3" />
                        {leader.streak} day streak
                      </Badge>
                      {leader.cgpa && (
                        <Badge variant="secondary" className="text-xs">
                          CGPA: {leader.cgpa}
                        </Badge>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-1">
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Syllabus Progress
                        </span>
                        <span className="font-semibold text-success">
                          {leader.syllabusComplete}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-success transition-all"
                          style={{ width: `${leader.syllabusComplete}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 text-xs">
                      {leader.badges.map((badge, idx) => (
                        <span key={idx}>{badge}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* How to Earn Points */}
        <Card className="mt-8 p-6">
          <h3 className="mb-4 font-heading text-lg font-bold">
            📈 How to Earn Points
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-primary/5 p-4">
              <div className="mb-2 font-semibold text-primary">
                +50 pts
              </div>
              <div className="text-sm text-muted-foreground">
                Complete a teaching session
              </div>
            </div>
            <div className="rounded-lg bg-success/5 p-4">
              <div className="mb-2 font-semibold text-success">
                +20 pts
              </div>
              <div className="text-sm text-muted-foreground">
                Complete daily tasks
              </div>
            </div>
            <div className="rounded-lg bg-warning/5 p-4">
              <div className="mb-2 font-semibold text-warning">
                +30 pts
              </div>
              <div className="text-sm text-muted-foreground">
                Ace a quiz
              </div>
            </div>
            <div className="rounded-lg bg-danger/5 p-4">
              <div className="mb-2 font-semibold text-danger">
                +10 pts
              </div>
              <div className="text-sm text-muted-foreground">
                Help via lost & found
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
