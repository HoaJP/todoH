import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/axios";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Task "${newTaskTitle}" added successfully`);
        handleNewTaskAdded();
      } catch (error) {
        console.error("Error adding task:", error);
        toast.error("Error adding task");
      }
      setNewTaskTitle("");
    } else {
      toast.error("Task title cannot be empty");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  return (
    <Card className="p-6 border-0 shadow-custome-lg bg-gradient-card">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Add a task"
          className="h-12 text-base border bg-slate-50 sm:flex-1 border-border focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button variant="gradient" size="xl" className="px-6" onClick={addTask}
        disabled={!newTaskTitle.trim()}>
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
