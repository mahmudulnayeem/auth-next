import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Settings = async () => {
  const session = await auth();
  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  } else if (session?.user?.role === "USER") {
    redirect("/patient");
  } else if (session?.user?.role === "DOCTOR") {
    redirect("/doctor");
  } else if (session?.user?.role === "PATHOLOGY") {
    redirect("/pathology");
  }
  return <div></div>;
};

export default Settings;
