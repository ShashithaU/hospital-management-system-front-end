export interface Appointment {
  id: number;
  type: string;
  qr: string;
  dateTime: string;
  description: string;
  status: string;
  roomNumber: number;
  q_Number: number;
  patientId: number;
  adminId: number;
}
