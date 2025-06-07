import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from "../../test/test/test.component";

interface Activity {
  patientId: string;
  patientName: string;
  type: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalPatients: number = 0;
  todayAppointments: number = 0;
  availableDoctors: number = 0;
  recentActivities: Activity[] = [];
type: any;

  constructor() { }

  ngOnInit(): void {
    // In a real app, you would fetch this data from your services
    this.loadDashboardStats();
    this.loadRecentActivities();
  }

  private loadDashboardStats(): void {
    // Mock data - replace with actual API calls in production
    this.totalPatients = 1248;
    this.todayAppointments = 42;
    this.availableDoctors = 8;
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
}
