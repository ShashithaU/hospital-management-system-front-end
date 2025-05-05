import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Activity {
  patientId: string;
  patientName: string;
  type: string;
  date: Date;
  status: string;
}

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  doctor: string;
}

interface Department {
  name: string;
  patients: number;
  doctors: number;
  status: 'Operational' | 'Busy' | 'Critical';
}

interface Alert {
  title: string;
  message: string;
  priority: 'High' | 'Medium' | 'Low';
  timestamp: Date;
}


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentDate = new Date();
  activityFilter = 'all';
  
  stats = {
    hospitalName: 'City General Hospital',
    totalPatients: 1248,
    todayAppointments: 42,
    confirmedAppointments: 36,
    totalDoctors: 32,
    availableDoctors: 24,
    onCallDoctors: 8,
    emergencyCases: 7,
    emergencyIncrease: 12,
    bedOccupancy: 78,
    icuOccupancy: 85,
    orOccupancy: 65,
    staffAvailability: 89,
    bloodSupply: 75,
    medicineSupply: 82,
    oxygenSupply: 90,
    ppeSupply: 68
  };
  
  finance = {
    revenue: 387500,
    expenses: 246800,
    revenueGrowth: 8.2,
    expenseGrowth: 5.4,
    outstandingInvoices: 32,
    avgReceiptDays: 14
  };

  recentActivities: Activity[] = [];
  upcomingAppointments: Appointment[] = [];
  departments: Department[] = [];
  alerts: Alert[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loadRecentActivities();
    this.loadUpcomingAppointments();
    this.loadDepartments();
    this.loadAlerts();
  }

  private loadRecentActivities(): void {
    // Mock data - replace with actual API calls in production
    this.recentActivities = [
      {
        patientId: 'P-1001',
        patientName: 'John Doe',
        type: 'Consultation',
        date: new Date(),
        status: 'Completed'
      },
      {
        patientId: 'P-1002',
        patientName: 'Jane Smith',
        type: 'Lab Test',
        date: new Date(),
        status: 'Pending'
      },
      {
        patientId: 'P-1003',
        patientName: 'Robert Johnson',
        type: 'Follow-up',
        date: new Date(Date.now() - 86400000), // Yesterday
        status: 'Completed'
      },
      {
        patientId: 'P-1004',
        patientName: 'Emily Davis',
        type: 'Emergency',
        date: new Date(),
        status: 'In Progress'
      },
      {
        patientId: 'P-1005',
        patientName: 'Michael Brown',
        type: 'Vaccination',
        date: new Date(Date.now() - 172800000), // 2 days ago
        status: 'Completed'
      }
    ];
  }

  private loadUpcomingAppointments(): void {
    this.upcomingAppointments = [
      {
        id: 'A-5001',
        patientName: 'Sarah Johnson',
        time: '09:30 AM',
        type: 'Check-up',
        doctor: 'Dr. Williams'
      },
      {
        id: 'A-5002',
        patientName: 'James Wilson',
        time: '10:15 AM',
        type: 'Follow-up',
        doctor: 'Dr. Martinez'
      },
      {
        id: 'A-5003',
        patientName: 'Patricia Brown',
        time: '11:00 AM',
        type: 'Surgery',
        doctor: 'Dr. Anderson'
      },
      {
        id: 'A-5004',
        patientName: 'Robert Garcia',
        time: '01:30 PM',
        type: 'Check-up',
        doctor: 'Dr. Taylor'
      },
      {
        id: 'A-5005',
        patientName: 'Linda Miller',
        time: '02:45 PM',
        type: 'Emergency',
        doctor: 'Dr. Thompson'
      }
    ];
  }

  private loadDepartments(): void {
    this.departments = [
      {
        name: 'Cardiology',
        patients: 48,
        doctors: 8,
        status: 'Operational'
      },
      {
        name: 'Emergency',
        patients: 32,
        doctors: 6,
        status: 'Busy'
      },
      {
        name: 'Pediatrics',
        patients: 26,
        doctors: 5,
        status: 'Operational'
      },
      {
        name: 'ICU',
        patients: 18,
        doctors: 7,
        status: 'Critical'
      },
      {
        name: 'Orthopedics',
        patients: 35,
        doctors: 6,
        status: 'Operational'
      }
    ];
  }

  private loadAlerts(): void {
    this.alerts = [
      {
        title: 'ICU Capacity Critical',
        message: 'ICU is currently at 85% capacity. Please prepare additional resources.',
        priority: 'High',
        timestamp: new Date()
      },
      {
        title: 'Medication Supply Low',
        message: 'Insulin stocks are running low. Please reorder within 48 hours.',
        priority: 'Medium',
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        title: 'New COVID-19 Guidelines',
        message: 'Updated COVID-19 protocols have been published. Please review the changes.',
        priority: 'Low',
        timestamp: new Date(Date.now() - 7200000)
      }
    ];
  }

  filterActivities(filter: string): void {
    this.activityFilter = filter;
    // In a real app, you would filter the activities based on the selected filter
    // For now, we'll just set the filter but not actually filter the data
  }
}