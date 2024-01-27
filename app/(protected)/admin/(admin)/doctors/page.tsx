import { taskSchema } from "@/components/table/data/schema";
import { getAllDoctors } from "@/data/admins";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { BsPersonFillAdd } from "react-icons/bs";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import Register from '@/app/(protected)/_components/Register'

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
  const imgLink = 'https://lh3.googleusercontent.com/p0LabmFZOR8VwInUR7NHdWjSjPbWv05rIc9hZRs0wgS5uKFpxdcZ82Q1yf9QGLqufM8xWbtId654W9GxpyHQqr8W0KtOKGQI=w1600-rj'
  return (
    <div data-theme="light" className=' px-4'>
      <div className='my-4 px-6 flex items-end justify-between py-6'>

        <h2 className='text-mix-4 text-3xl font-bold'>List OF Doctors</h2>
        <label htmlFor="my_modal_6" className='btn btn-sm btn-success flex justify-center items-center'> <BsPersonFillAdd /> Add Doctors</label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box p-0 m-0">
            
           <div><Register/></div>

          </div>
        </div>

      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='text-xl'>
                #
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Last Visit</th>

            </tr>
          </thead>
          <tbody>``
            {
              doctors?.map((DC, index) => <tr>
                <th className='text-xl text-gray-400' key={DC.id}>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image width={240} height={240} src={DC?.image ? DC?.image : imgLink} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{DC?.name}</div>
                      {DC?.designation && <div className="text-sm opacity-50">{DC?.designation}</div>}
                    </div>
                  </div>
                </td>
                <td>
                  {DC?.address ? DC?.address : "No Address Recorded"}
                </td>
                <td> {DC?.gender ? DC?.gender : "Not Recorded"}</td>
                <td ><h3 className='text-md'>{DC?.lastDuty ? DC?.lastDuty : "Not Recorded"}</h3>
                </td>

              </tr>)
            }


          </tbody>

        </table>
      </div>
      {/* paganition */}
      {/* <div className='flex justify-center items-center mt-6'>
              <div className="join">
                  <button className="join-item btn">1</button>
                  <button className="join-item btn btn-mix">2</button>
                  <button className="join-item btn">3</button>
                  <button className="join-item btn">4</button>
              </div>
          </div> */}
    </div>
  );
};


export default DoctorsTable;
