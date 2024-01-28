"use client"
import { deleteDoctor,  getAllPathology } from "@/data/admins";
import { invalidPath } from "@/lib/invalid";
import { DeleteIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { toast } from "sonner";
import Register from "./_Register";

const PdathologyTable = () => {
  const [pathology, setPathology] = useState([]);
  const [changed, setChanged] = useState(false);
  const imgLink = "https://th.bing.com/th/id/OIP.mA0mCf1m-DLkt_PV3cjUbQHaM4?w=189&h=329&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  const deletePermission = (id: any) => {

    let userChoice = confirm("Are you sure you want to delete this account?");
    if (userChoice === true) {
      deleteDoctor(id).then(() => {
        setChanged(!changed)
        toast("PETHOLOGY added successfully");
      }

      )

    } else {
      toast("PETHOLOGY Deletion Canceled")
    }

  }
  useEffect(() => {
    getAllPathology().then((data: any) => setPathology(data));
  }, [changed])
  return (
    <div data-theme="light" className=" px-4">
      <div className="my-4 px-6 flex items-end justify-between py-6">
        <h2 className="text-mix-4 text-3xl font-bold">List OF Pathology</h2>
        <label
          htmlFor="my_modal_6"
          className="btn btn-sm btn-success flex justify-center items-center"
        >
          {" "}
          <BsPersonFillAdd /> Add PATHOLOGY
        </label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box p-0 m-0">
            <div>
              <Register changed={changed} setChanged={setChanged}/>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl">#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Gender</th>
              {/* <th>Last Report</th> */}
              <th className="text-red-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {pathology?.map((DC: any, index: any) => (
              <tr key={index}>
                <th className="text-xl text-gray-400" key={DC.id}>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          width={240}
                          height={240}
                          src={DC?.image ? DC?.image : imgLink}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{DC?.name}</div>
                      {DC?.designation && (
                        <div className="text-sm opacity-50">
                          {DC?.designation}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td>{DC?.address ? DC?.address : "No Address Recorded"}</td>
                <td> {DC?.gender ? DC?.gender : "Not Recorded"}</td>
                {/* <td>
                  <h3 className="text-md">
                    {DC?.lastDuty ? DC?.lastDuty : "Not Recorded"}
                  </h3>
                </td> */}
                <td >
                  <button onClick={() => deletePermission(DC.id)} className="btn btn-sm btn-error"><DeleteIcon /></button>
                </td>
              </tr>
            ))}
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

export default PdathologyTable;
