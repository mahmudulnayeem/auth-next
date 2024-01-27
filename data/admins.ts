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