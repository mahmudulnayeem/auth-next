import { currentUser } from "@/lib/auth";

const Server = async () => {
  const user = await currentUser();
  return <div>{JSON.stringify(user)}</div>;
};

export default Server;
