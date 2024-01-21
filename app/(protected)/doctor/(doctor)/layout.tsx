import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DoctorLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  } else if (session?.user?.role === "USER") {
    redirect("/patient");
  } else if (session?.user?.role === "PATHOLOGY") {
    redirect("/pathology");
  }
  return <div>{children}</div>;
};

export default DoctorLayout;
