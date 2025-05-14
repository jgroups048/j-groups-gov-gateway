
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBooking } from '@/contexts/BookingContext';

// Define the form schema with validation
const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  age: z.string().refine((val) => {
    const num = parseInt(val, 10);
    return !isNaN(num) && num > 0 && num < 120;
  }, { message: 'Please enter a valid age.' }),
  gender: z.string().min(1, { message: 'Please select your gender.' }),
  travelClass: z.string().min(1, { message: 'Please select a travel class.' }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
});

// Ticket class options
const trainClasses = [
  { value: 'sleeper', label: 'Sleeper Class' },
  { value: 'ac3', label: '3rd AC' },
  { value: 'ac2', label: '2nd AC' },
  { value: 'ac1', label: '1st AC' },
];

const flightClasses = [
  { value: 'economy', label: 'Economy Class' },
  { value: 'business', label: 'Business Class' },
];

const PassengerDetailsStep = () => {
  const { bookingData, updateBooking, goToNextStep } = useBooking();
  
  // Determine classes based on booking mode
  const classOptions = bookingData.bookingMode === 'train' ? trainClasses : flightClasses;
  
  // Set up the form with default values from context
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: bookingData.passengerDetails?.fullName || '',
      age: bookingData.passengerDetails?.age?.toString() || '',
      gender: bookingData.passengerDetails?.gender || '',
      travelClass: bookingData.passengerDetails?.travelClass || '',
      mobile: bookingData.passengerDetails?.mobile || '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Parse age to number before saving
    const passengerDetails = {
      ...data,
      age: parseInt(data.age, 10)  // Convert string to number
    };
    
    updateBooking({ passengerDetails });
    goToNextStep();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Passenger Details</h3>
        <p className="text-gray-600 text-sm">Please enter the passenger information below.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name (as per ID)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter passenger name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Age" {...field} type="number" min="1" max="120" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="travelClass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Class</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel class" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {classOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="10-digit mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4 flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => goToNextStep(-1)}
            >
              Back
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PassengerDetailsStep;
