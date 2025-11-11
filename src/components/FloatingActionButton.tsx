import { useState } from "react";
import { Plus, X, ListTodo, BookOpen, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

type ActionType = "task" | "session" | "lostfound" | null;

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<ActionType>(null);

  const actions = [
    {
      type: "task" as ActionType,
      icon: ListTodo,
      label: "Create Task",
      color: "bg-primary",
    },
    {
      type: "session" as ActionType,
      icon: BookOpen,
      label: "Teaching Session",
      color: "bg-accent",
    },
    {
      type: "lostfound" as ActionType,
      icon: Package,
      label: "Lost/Found Item",
      color: "bg-warning",
    },
  ];

  const handleSubmit = (type: ActionType) => {
    toast({
      title: "Success!",
      description: `${type === "task" ? "Task" : type === "session" ? "Session" : "Item"} created successfully!`,
    });
    setDialogType(null);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setDialogType(action.type);
                      setIsOpen(false);
                    }}
                    className={`${action.color} flex items-center gap-2 rounded-2xl px-4 py-3 text-white shadow-lg hover:scale-105 transition-transform`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Create Task Dialog */}
      <Dialog open={dialogType === "task"} onOpenChange={() => setDialogType(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>Add a new task to your to-do list</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit("task"); }} className="space-y-4">
            <div>
              <Label htmlFor="task-title">Title</Label>
              <Input id="task-title" placeholder="Study for midterms" required />
            </div>
            <div>
              <Label htmlFor="task-subject">Subject</Label>
              <Input id="task-subject" placeholder="Mathematics" />
            </div>
            <div>
              <Label htmlFor="task-deadline">Deadline</Label>
              <Input id="task-deadline" type="date" />
            </div>
            <Button type="submit" className="w-full">Create Task</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Create Session Dialog */}
      <Dialog open={dialogType === "session"} onOpenChange={() => setDialogType(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Teaching Session</DialogTitle>
            <DialogDescription>Offer a peer-to-peer teaching session</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit("session"); }} className="space-y-4">
            <div>
              <Label htmlFor="session-subject">Subject</Label>
              <Input id="session-subject" placeholder="Data Structures" required />
            </div>
            <div>
              <Label htmlFor="session-topic">Topic</Label>
              <Input id="session-topic" placeholder="Binary Trees" />
            </div>
            <div>
              <Label htmlFor="session-price">Price per hour</Label>
              <Input id="session-price" type="number" placeholder="50" />
            </div>
            <div>
              <Label htmlFor="session-desc">Description</Label>
              <Textarea id="session-desc" placeholder="What will you teach?" />
            </div>
            <Button type="submit" className="w-full">Create Session</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Create Lost/Found Dialog */}
      <Dialog open={dialogType === "lostfound"} onOpenChange={() => setDialogType(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Post Lost/Found Item</DialogTitle>
            <DialogDescription>Help the campus community find their belongings</DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit("lostfound"); }} className="space-y-4">
            <div>
              <Label htmlFor="item-title">Item Name</Label>
              <Input id="item-title" placeholder="Blue water bottle" required />
            </div>
            <div>
              <Label htmlFor="item-location">Location</Label>
              <Input id="item-location" placeholder="Library 2nd floor" />
            </div>
            <div>
              <Label htmlFor="item-desc">Description</Label>
              <Textarea id="item-desc" placeholder="Additional details..." />
            </div>
            <div>
              <Label htmlFor="item-reward">Reward (optional)</Label>
              <Input id="item-reward" type="number" placeholder="100" />
            </div>
            <Button type="submit" className="w-full">Post Item</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingActionButton;
