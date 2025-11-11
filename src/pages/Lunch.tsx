import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UtensilsCrossed, 
  MapPin, 
  Clock, 
  Users, 
  Plus,
  Search,
  Calendar
} from "lucide-react";

const Lunch = () => {
  const lunchEvents = [
    {
      id: "1",
      host: "Sarah Chen",
      time: "12:30 PM",
      location: "Campus Cafeteria",
      cuisine: "Asian",
      maxPeople: 4,
      currentPeople: 2,
      mutualFriends: 3
    },
    {
      id: "2",
      host: "Mike Johnson",
      time: "1:00 PM",
      location: "Pizza Place",
      cuisine: "Italian",
      maxPeople: 6,
      currentPeople: 4,
      mutualFriends: 1
    },
    {
      id: "3",
      host: "Emma Wilson",
      time: "12:45 PM",
      location: "Burger Joint",
      cuisine: "American",
      maxPeople: 3,
      currentPeople: 1,
      mutualFriends: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Lunch Matcher
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Find dining companions and make new friends over lunch
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1 gap-2" size="lg">
                  <Plus className="h-5 w-5" />
                  Create Lunch Event
                </Button>
                <Button variant="outline" className="gap-2" size="lg">
                  <Search className="h-5 w-5" />
                  Find Matches
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              {lunchEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                          {event.host.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-semibold">
                            {event.host}'s Lunch
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {event.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-success/10 text-success">
                        Open
                      </Badge>
                    </div>

                    <div className="mb-4 grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                        <span>{event.cuisine}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.currentPeople}/{event.maxPeople} joined</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        Join Lunch
                      </Button>
                      <Button variant="outline">
                        Message
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold">
                Today's Schedule
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-semibold">3 matches available</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Peak lunch time: 12:30 - 1:30 PM
                </div>
              </div>
            </Card>

            <Card className="gradient-success p-6 text-success-foreground">
              <h3 className="mb-2 font-heading text-lg font-semibold">
                Why Lunch Together?
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Make new friends</li>
                <li>✓ Share meal costs</li>
                <li>✓ Discover new places</li>
                <li>✓ Break study monotony</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
