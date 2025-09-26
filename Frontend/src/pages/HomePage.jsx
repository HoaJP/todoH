import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "@/lib/axios";
const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTaskBuffer(res.data.task);
      setActiveTaskCount(res.data.activeCount);
      setCompleteTaskCount(res.data.completeCount);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Error fetching tasks");
    }
  };

  const filteredTasks = taskBuffer.filter((task) => {
    switch (filter) {
      case "active":
        return task.status === "active";
      case "completed":
        return task.status === "complete";
      default:
        return true;
    }
  });
  const handleTaskChange = () => {
    fetchTasks();
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Lavender Blush Flow Gradient (Top Left to Bottom Right) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, #E1BEE7 0%, #F3E5F5 20%, #FCE4EC 40%, #FFF0F5 60%, #F8BBD9 80%, #E1BEE7 100%)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="container relative z-10 pt-8 mx-auto">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* header */}
          <Header />

          {/* create task */}
          <AddTask handleNewTaskAdded={handleTaskChange} />

          {/* stats & filters */}
          <StatsAndFilters
            completedTasksCount={completeTaskCount}
            activeTasksCount={activeTaskCount}
            filter={filter}
            setFilter={setFilter}
          />

          {/* task list */}
          <TaskList
            filteredTasks={filteredTasks}
            filter={filter}
            handleTaskChange={handleTaskChange}
          />

          {/* pagination */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>
          <Footer
            activeTaskCount={activeTaskCount}
            completedTaskCount={completeTaskCount}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
