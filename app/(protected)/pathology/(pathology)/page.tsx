import { currentUser } from "@/lib/auth";

const Pathology = async () => {
  const user = await currentUser();
  return <div>{JSON.stringify(user)}</div>;
};

export default Pathology;
