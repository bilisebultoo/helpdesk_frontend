export type UserRole = "customer" | "agent";

export type Priority = "Low" | "Medium" | "High";

export type TicketStatus =
  | "Open"
  | "In Progress"
  | "Resolved"
  | "Closed";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: Priority;
  status: TicketStatus;
  customer: string;
  createdAt: string;
}

export interface Message {
  id: string;
  ticket: string;
  sender: string;
  text: string;
  createdAt: string;
}