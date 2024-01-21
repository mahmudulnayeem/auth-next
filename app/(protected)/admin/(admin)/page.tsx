import { auth } from "@/auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();
  console.log(session?.user?.role);
  if (session?.user?.role !== "ADMIN") {
    redirect("/settings");
  }
  return <div>AdminPage</div>;
};

export default AdminPage;
