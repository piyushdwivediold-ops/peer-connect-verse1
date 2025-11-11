import { useState } from "react";
import { motion } from "framer-motion";
import { Package, MapPin, Gift, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const LostFound = () => {
  const [activeTab, setActiveTab] = useState("lost");

  const lostItems = [
    {
      id: "1",
      title: "Blue Water Bottle",
      location: "Library 2nd Floor",
      reward: 50,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      postedBy: "Sarah",
      date: "2 hours ago",
    },
    {
      id: "2",
      title: "Calculus Textbook",
      location: "Lecture Hall B",
      reward: 200,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      postedBy: "Mike",
      date: "5 hours ago",
    },
    {
      id: "3",
      title: "Black Backpack",
      location: "Cafeteria",
      reward: 500,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      postedBy: "Emma",
      date: "1 day ago",
    },
  ];

  const foundItems = [
    {
      id: "4",
      title: "iPhone 13 Pro",
      location: "Basketball Court",
      image: "https://images.unsplash.com/photo-1592286927505-c5c8e3d1d88a?w=400",
      postedBy: "Alex",
      date: "3 hours ago",
    },
    {
      id: "5",
      title: "Gold Watch",
      location: "Parking Lot C",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      postedBy: "Jordan",
      date: "6 hours ago",
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Lost & Found
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Help your campus community reunite with their belongings
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="lost">Lost Items</TabsTrigger>
            <TabsTrigger value="found">Found Items</TabsTrigger>
          </TabsList>

          <TabsContent value="lost">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {lostItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <h3 className="font-heading text-lg font-semibold">
                          {item.title}
                        </h3>
                        {item.reward && (
                          <Badge className="bg-warning/10 text-warning gap-1">
                            <Gift className="h-3 w-3" />
                            ₹{item.reward}
                          </Badge>
                        )}
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="mb-4 text-xs text-muted-foreground">
                        Posted by {item.postedBy} • {item.date}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          I Found This
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="found">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {foundItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 font-heading text-lg font-semibold">
                        {item.title}
                      </h3>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="mb-4 text-xs text-muted-foreground">
                        Found by {item.postedBy} • {item.date}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm">
                          This is Mine
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LostFound;
