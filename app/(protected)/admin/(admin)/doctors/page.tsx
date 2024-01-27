import { taskSchema } from "@/components/table/data/schema";
import { getAllDoctors } from "@/data/admins";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

// Simulate a database read for tasks.
async function getTasks() {
  //   console.log(`Current directory: ${process.cwd()}`);
  const data = await fs.readFile(
    path.join(process.cwd(), "/components/table/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}
const DoctorsTable = async () => {
  const doctors = await getAllDoctors();
  console.log(doctors);
  return <div>{/* <DataTable data={tasks} columns={columns} /> */}</div>;
};

export default DoctorsTable;
