import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Spring Meadow Mist Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(90deg, #D4F1C5 0%, #E8F5E8 20%, #F0F8E8 40%, #FFF9E6 60%, #FFE5B4 80%, #FFDAB9 100%)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* header */}
          <Header />

          {/* create task */}
          <AddTask />

          {/* stats & filters */}
          <StatsAndFilters />

          {/* task list */}
          <TaskList />

          {/* pagination */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
