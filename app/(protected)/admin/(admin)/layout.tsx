import { auth } from "@/auth";
import { redirect } from "next/navigation";

const PathologyLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user?.role === "PATHOLOGY") {
    redirect("/pathology");
  } else if (session?.user?.role === "USER") {
    redirect("/patient");
  } else if (session?.user?.role === "DOCTOR") {
    redirect("/doctor");
  }
  return <div>{children}</div>;
};

export default PathologyLayout;
