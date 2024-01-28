"use client"
import { deleteDoctor, getAllUser } from "@/data/admins";
import { getAllUserWithOutAdmin, makeAdmin } from "@/data/user";
import { DeleteIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const UserTable = () => {
  const [user, setUser] = useState([]);
  const [changed, setChanged] = useState(false);
  const imgLink = "https://th.bing.com/th/id/OIP.mA0mCf1m-DLkt_PV3cjUbQHaM4?w=189&h=329&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  const requestForAdmin = (id: any) => {

    let userChoice = confirm("Are you sure you want to make admin this account?");
    if (userChoice === true) {
      makeAdmin(id).then(() => {
        setChanged(!changed)
        toast("Admin Made Successfully");
      }
      )

    } else {
      toast("Admin Made Canceled")
    }

  }
  useEffect(() => {
    getAllUserWithOutAdmin().then((data: any) => setUser(data));
  }, [changed])
  return (
    <div data-theme="light" className=" px-4">
      <div className="my-4 px-6 flex items-end justify-between py-6">
        <h2 className="text-mix-4 text-3xl font-bold">CHANGE USER ROLE TO ADMIN</h2>
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
            {user?.map((DC: any, index: any) => (
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

                <td >
                  <button onClick={() => requestForAdmin(DC.id)} className="text-white btn btn-sm btn-error">Make Admin</button>
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

export default UserTable;
