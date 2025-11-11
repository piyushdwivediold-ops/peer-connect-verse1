import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Clock, 
  Video,
  MapPin,
  TrendingUp,
  Award,
  BookOpen
} from "lucide-react";

interface Tutor {
  id: string;
  name: string;
  subject: string;
  topic: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  isOnline: boolean;
  badges: string[];
  avatar: string;
  syllabusCompletion: number;
}

const Teach = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tutors: Tutor[] = [
    {
      id: "1",
      name: "Sarah Chen",
      subject: "Computer Science",
      topic: "Data Structures & Algorithms",
      rating: 4.9,
      reviews: 127,
      students: 243,
      price: 15,
      isOnline: true,
      badges: ["Top Tutor", "Quick Responder"],
      avatar: "SC",
      syllabusCompletion: 95
    },
    {
      id: "2",
      name: "Mike Johnson",
      subject: "Mathematics",
      topic: "Calculus II - Integration",
      rating: 4.8,
      reviews: 98,
      students: 186,
      price: 12,
      isOnline: false,
      badges: ["Certified", "Patient"],
      avatar: "MJ",
      syllabusCompletion: 88
    },
    {
      id: "3",
      name: "Priya Sharma",
      subject: "Web Development",
      topic: "React & TypeScript",
      rating: 5.0,
      reviews: 156,
      students: 312,
      price: 20,
      isOnline: true,
      badges: ["Top Tutor", "Expert"],
      avatar: "PS",
      syllabusCompletion: 100
    },
    {
      id: "4",
      name: "Alex Rodriguez",
      subject: "Physics",
      topic: "Quantum Mechanics Basics",
      rating: 4.7,
      reviews: 73,
      students: 142,
      price: 18,
      isOnline: true,
      badges: ["Research Scholar"],
      avatar: "AR",
      syllabusCompletion: 82
    },
    {
      id: "5",
      name: "Emma Wilson",
      subject: "Chemistry",
      topic: "Organic Chemistry Lab Prep",
      rating: 4.9,
      reviews: 104,
      students: 198,
      price: 16,
      isOnline: false,
      badges: ["Lab Expert", "Top Tutor"],
      avatar: "EW",
      syllabusCompletion: 90
    },
    {
      id: "6",
      name: "David Kim",
      subject: "Economics",
      topic: "Microeconomics Principles",
      rating: 4.6,
      reviews: 67,
      students: 128,
      price: 14,
      isOnline: true,
      badges: ["Case Study Pro"],
      avatar: "DK",
      syllabusCompletion: 85
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Learn from Peers
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Connect with top student tutors for personalized learning sessions
          </p>
        </div>

        {/* Search & Filter Bar */}
        <Card className="mb-8 p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search subjects, topics, or tutors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All Subjects
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Computer Science
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Mathematics
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Physics
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Chemistry
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
              Top Rated
            </Badge>
          </div>
        </Card>

        {/* Stats Bar */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <Card className="p-4">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Active Tutors</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-success">15,000+</div>
            <div className="text-sm text-muted-foreground">Sessions Done</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-warning">4.8⭐</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </Card>
        </div>

        {/* Tutors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <Card 
              key={tutor.id} 
              className="group overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="p-6">
                {/* Tutor Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 font-heading text-xl font-bold text-primary">
                      {tutor.avatar}
                    </div>
                    <div>
                      <h3 className="mb-1 font-heading text-lg font-semibold">
                        {tutor.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-semibold">{tutor.rating}</span>
                        <span className="text-muted-foreground">
                          ({tutor.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  {tutor.isOnline && (
                    <Badge className="bg-success/10 text-success">
                      Online
                    </Badge>
                  )}
                </div>

                {/* Subject & Topic */}
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {tutor.subject}
                  </Badge>
                  <p className="font-medium">{tutor.topic}</p>
                </div>

                {/* Badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {tutor.badges.map((badge, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-primary/20 text-xs"
                    >
                      <Award className="mr-1 h-3 w-3" />
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Syllabus Progress */}
                <div className="mb-4">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Syllabus Coverage</span>
                    <span className="font-semibold text-success">
                      {tutor.syllabusCompletion}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div 
                      className="h-full rounded-full bg-success transition-all"
                      style={{ width: `${tutor.syllabusCompletion}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tutor.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    1h
                  </div>
                  <div className="flex items-center gap-1">
                    {tutor.isOnline ? (
                      <Video className="h-4 w-4" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                    {tutor.isOnline ? "Online" : "In-person"}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-2xl font-bold text-primary">
                      ${tutor.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/hour</span>
                  </div>
                  <Button className="gap-2 group-hover:bg-primary-hover">
                    Book Session
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Become a Tutor CTA */}
        <Card className="gradient-primary mt-12 overflow-hidden p-8 text-center text-primary-foreground md:p-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
              Want to Share Your Knowledge?
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Become a tutor and earn while helping your peers succeed. Set your own schedule and rates.
            </p>
            <Button 
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90"
            >
              Start Teaching
              <Award className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Teach;
