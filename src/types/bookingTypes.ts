
export type TicketType = 'Train' | 'Flight';
export type BookingMode = 'Normal' | 'Tatkal' | 'train' | 'flight';
export type PaymentMethod = 'UPI' | 'Wallet' | 'Card';
export type TravelClass = 'Sleeper' | 'AC' | 'Economy' | 'Business' | 'First Class' | 'sleeper' | 'ac3' | 'ac2' | 'ac1' | 'economy' | 'business';
export type Gender = 'Male' | 'Female' | 'Other' | 'male' | 'female';

export interface Passenger {
  fullName: string;
  age: number;
  gender: Gender;
}

export interface PassengerDetails {
  fullName: string;
  age: number;
  gender: string;
  travelClass: string;
  mobile: string;
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
  passengerDetails?: PassengerDetails;
}
