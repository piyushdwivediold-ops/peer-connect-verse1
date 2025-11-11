import { motion } from "framer-motion";
import { ArrowLeftRight, Star, MessageCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SkillExchange = () => {
  const teachOffers = [
    {
      id: "1",
      name: "Sarah Chen",
      skill: "Python Programming",
      level: "Advanced",
      tags: ["Backend", "ML", "Data Science"],
      availability: "Weekends",
      avatar: "SC",
    },
    {
      id: "2",
      name: "Mike Johnson",
      skill: "UI/UX Design",
      level: "Intermediate",
      tags: ["Figma", "Prototyping", "Design Systems"],
      availability: "Evenings",
      avatar: "MJ",
    },
    {
      id: "3",
      name: "Emma Wilson",
      skill: "Guitar",
      level: "Pro",
      tags: ["Acoustic", "Classical", "Theory"],
      availability: "Flexible",
      avatar: "EW",
    },
  ];

  const learnRequests = [
    {
      id: "4",
      name: "Alex Kumar",
      skill: "Web Development",
      tags: ["React", "Next.js", "TypeScript"],
      offering: "Video Editing",
      avatar: "AK",
    },
    {
      id: "5",
      name: "Priya Sharma",
      skill: "Data Structures",
      tags: ["Algorithms", "DSA", "Competitive"],
      offering: "Content Writing",
      avatar: "PS",
    },
    {
      id: "6",
      name: "Raj Patel",
      skill: "Photography",
      tags: ["DSLR", "Editing", "Composition"],
      offering: "Graphic Design",
      avatar: "RP",
    },
  ];

  const matches = [
    {
      person1: "Sarah Chen",
      skill1: "Python",
      person2: "Alex Kumar",
      skill2: "Video Editing",
      compatibility: 92,
    },
    {
      person1: "Mike Johnson",
      skill1: "UI/UX Design",
      person2: "Raj Patel",
      skill2: "Graphic Design",
      compatibility: 88,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <ArrowLeftRight className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Skill Exchange
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Trade skills with fellow students — learn together, grow together
          </p>
        </motion.div>

        {/* Matched Pairs */}
        <div className="mb-12">
          <h2 className="mb-4 font-heading text-2xl font-semibold">
            🎯 Perfect Matches
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4 lg:grid-cols-2"
          >
            {matches.map((match, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 gradient-primary text-primary-foreground">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge className="bg-white/20 text-white gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {match.compatibility}% Match
                    </Badge>
                  </div>
                  <div className="mb-4 grid grid-cols-[1fr,auto,1fr] items-center gap-4">
                    <div className="text-center">
                      <div className="mb-2 font-semibold">{match.person1}</div>
                      <Badge className="bg-white/20 text-white">{match.skill1}</Badge>
                    </div>
                    <ArrowLeftRight className="h-6 w-6" />
                    <div className="text-center">
                      <div className="mb-2 font-semibold">{match.person2}</div>
                      <Badge className="bg-white/20 text-white">{match.skill2}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" className="flex-1 gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Chat
                    </Button>
                    <Button variant="secondary" className="flex-1 gap-2">
                      <Calendar className="h-4 w-4" />
                      Schedule
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* I Can Teach */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-semibold">
              📚 I Can Teach
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {teachOffers.map((offer) => (
                <motion.div key={offer.id} variants={itemVariants}>
                  <Card className="p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                        {offer.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <h3 className="font-heading text-lg font-semibold">
                            {offer.name}
                          </h3>
                          <Badge className="bg-accent/10 text-accent">
                            {offer.level}
                          </Badge>
                        </div>
                        <p className="mb-2 text-sm font-medium">{offer.skill}</p>
                        <div className="mb-3 flex flex-wrap gap-1">
                          {offer.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Available: {offer.availability}
                          </span>
                          <Button size="sm">Connect</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* I Want to Learn */}
          <div>
            <h2 className="mb-4 font-heading text-2xl font-semibold">
              🎓 I Want to Learn
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {learnRequests.map((request) => (
                <motion.div key={request.id} variants={itemVariants}>
                  <Card className="p-4 transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent">
                        {request.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 font-heading text-lg font-semibold">
                          {request.name}
                        </h3>
                        <p className="mb-2 text-sm font-medium">
                          Wants to learn: {request.skill}
                        </p>
                        <div className="mb-3 flex flex-wrap gap-1">
                          {request.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Can teach: {request.offering}
                          </span>
                          <Button size="sm" variant="outline">
                            Propose Exchange
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillExchange;
