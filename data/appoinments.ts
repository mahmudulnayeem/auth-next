"use server";

import { db } from "@/lib/db";

export const getAppointmentsByDoctorId = async (doctorId: string) => {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        doctorId,
      },
    });
    return appointments;
  } catch (error) {
    return null;
  }
};

export const getAppointmentsByPatientId = async (patientId: string) => {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        patientId,
      },
    });
    return appointments;
  } catch (error) {
    return null;
  }
};

export const getAppointmentById = async (id: string) => {
  try {
    const appointment = await db.appointment.findUnique({
      where: {
        id,
      },
    });
    return appointment;
  } catch (error) {
    return null;
  }
};

export const createAppointment = async (data: any) => {
  try {
    const appointment = await db.appointment.create({
      data: {
        ...data,
      },
    });
    return appointment;
  } catch (error) {
    return null;
  }
};

export const updateAppointment = async (id: string, data: any) => {
  try {
    const appointment = await db.appointment.update({
      where: {
        id,
      },
      data,
    });
    return appointment;
  } catch (error) {
    return null;
  }
};

export const deleteAppointment = async (id: string) => {
  try {
    const appointment = await db.appointment.delete({
      where: {
        id,
      },
    });
    return appointment;
  } catch (error) {
    return null;
  }
};

export const changeAppointmentStatus = async (id: string, status: string) => {
  try {
    const appointment = await db.appointment.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    return appointment;
  } catch (error) {
    return null;
  }
};
