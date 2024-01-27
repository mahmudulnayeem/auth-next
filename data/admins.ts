"use server";
import { db } from "@/lib/db";
export const addNewDoctor = async (doctor: any) => {
  try {
    const newDoctor = await db.user.create({
      data: {
        ...doctor,
        role: "DOCTOR",
      },
    });
    return newDoctor;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const addNewPathology = async (pathology: any) => {
  try {
    const newPathology = await db.user.create({
      data: {
        ...pathology,
        role: "PATHOLOGY",
      },
    });
    return newPathology;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllDoctors = async () => {
  try {
    const allDoctors = await db.user.findMany({
      where: {
        role: "DOCTOR",
      },
    });
    return allDoctors;
  } catch (error) {
    return null;
  }
};
export const getAllPathology = async () => {
  try {
    const allDoctors = await db.user.findMany({
      where: {
        role: "PATHOLOGY",
      },
    });
    return allDoctors;
  } catch (error) {
    return null;
  }
};
export const getAllUser = async () => {
  try {
    const allDoctors = await db.user.findMany({
      where: {
        role: "USER",
      },
    });
    return allDoctors;
  } catch (error) {
    return null;
  }
};

export const deleteDoctor = async (id: any) => {
  try {
    const deletedDoctor = await db.user.delete({
      where: {
        id,
      },
    });
    return deletedDoctor;
  } catch (error) {
    return null;
  }
};
