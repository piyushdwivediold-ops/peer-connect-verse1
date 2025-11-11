import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  CheckSquare, 
  Trophy, 
  UtensilsCrossed, 
  Search as SearchIcon,
  Package,
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-campus.jpg";

const Home = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "Smart To-Do Lists",
      description: "Organize tasks with Pomodoro timer",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: BookOpen,
      title: "Peer Teaching",
      description: "Learn from top students",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "Gamified academic tracking",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: UtensilsCrossed,
      title: "Lunch Matcher",
      description: "Find dining companions",
      color: "text-danger",
      bgColor: "bg-danger/10"
    },
    {
      icon: SearchIcon,
      title: "Lost & Found",
      description: "Reunite with lost items",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Skill Exchange",
      description: "Trade skills with peers",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const trendingSessions = [
    { tutor: "Sarah Chen", topic: "Data Structures", rating: 4.9, price: 15, students: 24 },
    { tutor: "Mike Johnson", topic: "Calculus II", rating: 4.8, price: 12, students: 18 },
    { tutor: "Priya Sharma", topic: "Web Development", rating: 5.0, price: 20, students: 31 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
              <Badge className="w-fit bg-success/10 text-success hover:bg-success/20">
                🎓 Join 10,000+ students
              </Badge>
              
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Your Campus,
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Connected
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground sm:text-xl">
                Learn from peers, organize your academics, and build meaningful campus connections. 
                Everything you need for college success in one platform.
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/teach">
                  <Button size="lg" variant="hero" className="w-full sm:w-auto">
                    Explore Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/todo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Start Organizing
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="font-heading text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Peer Tutors</div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold">15K+</div>
                  <div className="text-sm text-muted-foreground">Sessions</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-success/20 blur-2xl" />
              <img 
                src={heroImage} 
                alt="Students collaborating on campus" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From academic organization to social connections, CampusConnect has you covered
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-xl ${feature.bgColor} p-3`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-full" />
              </Card>
            );
          })}
        </div>
      </section>

      {/* Trending Sessions */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 font-heading text-3xl font-bold">
                🔥 Trending Sessions
              </h2>
              <p className="text-muted-foreground">
                Learn from the best students on campus
              </p>
            </div>
            <Link to="/teach">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingSessions.map((session, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10" />
                        <div>
                          <div className="font-semibold">{session.tutor}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 fill-warning text-warning" />
                            {session.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      Hot
                    </Badge>
                  </div>

                  <h3 className="mb-3 font-heading text-lg font-semibold">
                    {session.topic}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {session.students}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        1h
                      </div>
                    </div>
                    <div className="font-heading text-xl font-bold text-primary">
                      ${session.price}
                    </div>
                  </div>

                  <Button className="mt-4 w-full" variant="default">
                    Book Session
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="gradient-primary overflow-hidden p-12 text-center text-primary-foreground">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Ready to Transform Your Campus Experience?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of students already using CampusConnect to excel academically and socially
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-card text-card-foreground hover:bg-card/90"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
