import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Calendar,
  Clock,
  Tag,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  category: string;
  dueDate?: string;
}

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Complete Data Structures assignment", completed: false, priority: "high", category: "Study", dueDate: "2025-11-15" },
    { id: "2", title: "Review Calculus notes", completed: false, priority: "medium", category: "Study" },
    { id: "3", title: "Prepare for Chemistry lab", completed: true, priority: "low", category: "Lab" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        priority: "medium",
        category: "General"
      }]);
      setNewTask("");
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-heading text-3xl font-bold sm:text-4xl">
            My To-Do List
          </h1>
          <p className="text-muted-foreground">
            Stay organized and productive with smart task management
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Tasks Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-4">
                <div className="text-2xl font-bold">{totalCount}</div>
                <div className="text-sm text-muted-foreground">Total Tasks</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-success">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </Card>
              <Card className="p-4">
                <div className="text-2xl font-bold text-primary">{completionRate}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </Card>
            </div>

            {/* Add Task */}
            <Card className="p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  className="flex-1"
                />
                <Button onClick={addTask} size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* Tasks List */}
            <div className="space-y-3">
              {tasks.map((task) => (
                <Card 
                  key={task.id}
                  className={cn(
                    "group p-4 transition-all hover:shadow-md",
                    task.completed && "opacity-60"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground hover:text-primary" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className={cn(
                        "mb-2 font-medium",
                        task.completed && "line-through"
                      )}>
                        {task.title}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge 
                          variant="secondary"
                          className={cn(
                            "text-xs",
                            task.priority === "high" && "bg-danger/10 text-danger",
                            task.priority === "medium" && "bg-warning/10 text-warning",
                            task.priority === "low" && "bg-success/10 text-success"
                          )}
                        >
                          {task.priority}
                        </Badge>
                        
                        <Badge variant="secondary" className="text-xs">
                          <Tag className="mr-1 h-3 w-3" />
                          {task.category}
                        </Badge>

                        {task.dueDate && (
                          <Badge variant="secondary" className="text-xs">
                            <Calendar className="mr-1 h-3 w-3" />
                            {task.dueDate}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="h-4 w-4 text-danger" />
                    </Button>
                  </div>
                </Card>
              ))}

              {tasks.length === 0 && (
                <Card className="p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    All caught up!
                  </h3>
                  <p className="text-muted-foreground">
                    No tasks yet. Add one to get started.
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar - Pomodoro Timer */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-xl font-semibold">
                🍅 Pomodoro Timer
              </h3>
              
              <div className="mb-6 text-center">
                <div className="mb-4 inline-flex h-40 w-40 items-center justify-center rounded-full border-8 border-primary/20 bg-primary/5">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {formatTime(pomodoroTime)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant={isPomodoroActive ? "secondary" : "default"}
                    onClick={() => setIsPomodoroActive(!isPomodoroActive)}
                  >
                    {isPomodoroActive ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setPomodoroTime(25 * 60)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg bg-secondary p-3 text-sm">
                  <div className="mb-1 font-medium">Focus Session</div>
                  <div className="text-xs text-muted-foreground">
                    Work for 25 minutes, then take a 5-minute break
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold">
                Today's Focus
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Study Hours</span>
                  <span className="font-semibold">3.5h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pomodoros</span>
                  <span className="font-semibold">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Streak</span>
                  <Badge className="bg-success text-success-foreground">
                    🔥 5 days
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
