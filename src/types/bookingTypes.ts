
export type TicketType = 'Train' | 'Flight';
export type BookingMode = 'Normal' | 'Tatkal';
export type PaymentMethod = 'UPI' | 'Wallet' | 'Card';
export type TravelClass = 'Sleeper' | 'AC' | 'Economy' | 'Business' | 'First Class';
export type Gender = 'Male' | 'Female' | 'Other';

export interface Passenger {
  fullName: string;
  age: number;
  gender: Gender;
}

export interface BookingDetails {
  ticketType: TicketType;
  bookingMode: BookingMode;
  fromLocation: string;
  toLocation: string;
  journeyDate: string;
  travelClass: TravelClass;
  passengers: Passenger[];
  mobileNumber: string;
  paymentMethod: PaymentMethod;
  bookingId?: string;
  bookingTime?: string;
}
