"use client";
import { addNewDoctor } from "@/data/admins";
import { invalidPath } from "@/lib/invalid";
import { Cross1Icon } from "@radix-ui/react-icons";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { toast } from "sonner";

export default function Register({ changed, setChanged }: any) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {

    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = {
      name,
      password: hashedPassword,
      address,
      designation,
      gender,
    };

    const newDoctor = await addNewDoctor(doctor);

    setName("");
    setPassword("");
    setAddress("");
    setDesignation("");
    setImageLink("");
    setGender("");
    // await invalidPath('/admin/doctors')
    setChanged(!changed)
    toast("Doctor added successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-10 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">Add Doctor</h3>
        <label htmlFor="my_modal_6" className="cursor-pointer">
          <Cross1Icon />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Address</span>
          <input
            type="text"
            value={address}
            name="address"
            onChange={(event) => setAddress(event.target.value)}
            className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Designation</span>
          <input
            type="text"
            name="designation"
            value={designation}
            onChange={(event) => setDesignation(event.target.value)}
            className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Gender</span>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="male"
                onChange={(event) => setGender(event.target.value)}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="female"
                onChange={(event) => setGender(event.target.value)}
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value="other"
                onChange={(event) => setGender(event.target.value)}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </label>
      </div>
      <div className="mt-6">

        <label
          htmlFor="my_modal_6"
          onClick={handleSubmit}
          className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Register
        </label>

      </div>
    </form>
  );
}
