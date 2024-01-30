"use client"
import { deleteDoctor, getAllUser } from "@/data/admins";
import { changeAppointmentStatus, createAppointment, deleteAppointment, getAppointmentsByDoctorId } from "@/data/appoinments";
import { useCurrentUser } from "@/hooks/use-current-user";
import { invalidPath } from "@/lib/invalid";
import { CheckCheckIcon, DeleteIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { toast } from "sonner";


const HistoryTable = () => {
  const currentUser=useCurrentUser();
  // console.log(currentUser)
  const [user, setUser] = useState([]);
  const [changed, setChanged] = useState(false);
  const imgLink = "https://th.bing.com/th/id/OIP.mA0mCf1m-DLkt_PV3cjUbQHaM4?w=189&h=329&c=7&r=0&o=5&dpr=1.3&pid=1.7";

 
  useEffect(() => {
    getAppointmentsByDoctorId(currentUser.id).then((data: any) =>{
      const newData=data.filter((DT:any)=>DT.status!=="pending")
      setUser(newData)
    });
  }, [changed,currentUser])
  return (
    <div data-theme="light" className=" px-4">
      <div className="my-4 px-6 flex items-end justify-between py-6">
        <h2 className="text-mix-4 text-3xl font-bold">List OF Appointment</h2>


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
              <th>Appointment Date/Time</th>
          

              <th className="text-red-500">Satatus</th>
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
                <td>
                  <p className="text-md">
                    {DC?.appointmentDate ? DC?.appointmentDate : "Not Recorded"}
                  </p>
                  <p>
                  {DC?.appointmentTime ? DC?.appointmentTime : "Not Recorded"}
                  </p>
                </td>
                <td >{DC?.status}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default HistoryTable;
