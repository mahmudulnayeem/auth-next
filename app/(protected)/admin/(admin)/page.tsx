import { auth } from "@/auth";
import TaskPage from "@/components/table/page";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "ADMIN") {
    redirect("/settings");
  }
  return (
    <div>
      <TaskPage />
    </div>
  );
};

export default AdminPage;
