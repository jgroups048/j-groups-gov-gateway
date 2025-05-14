
import React, { useState } from 'react';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gender, Passenger, TravelClass } from '@/types/bookingTypes';
import { PlusCircle, Trash2 } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface PassengerDetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

const PassengerDetailsStep = ({ onNext, onBack }: PassengerDetailsStepProps) => {
  const { bookingDetails, updateBookingDetails } = useBooking();
  const [passengers, setPassengers] = useState<Partial<Passenger>[]>(
    bookingDetails.passengers?.length ? bookingDetails.passengers : [{ fullName: '', age: undefined, gender: undefined }]
  );
  const [travelClass, setTravelClass] = useState<TravelClass | undefined>(
    bookingDetails.travelClass
  );
  const [mobileNumber, setMobileNumber] = useState(bookingDetails.mobileNumber || '');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const getAvailableTravelClasses = () => {
    if (bookingDetails.ticketType === 'Train') {
      return [
        { value: 'Sleeper', label: 'Sleeper Class' },
        { value: 'AC', label: 'AC Class' },
        { value: 'First Class', label: 'First Class' },
      ];
    } else {
      return [
        { value: 'Economy', label: 'Economy Class' },
        { value: 'Business', label: 'Business Class' },
        { value: 'First Class', label: 'First Class' },
      ];
    }
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { fullName: '', age: undefined, gender: undefined }]);
  };

  const handleRemovePassenger = (index: number) => {
    if (passengers.length > 1) {
      const newPassengers = [...passengers];
      newPassengers.splice(index, 1);
      setPassengers(newPassengers);
    }
  };

  const handlePassengerChange = (
    index: number,
    field: keyof Passenger,
    value: string | number
  ) => {
    const updatedPassengers = [...passengers];
    if (field === 'age' && typeof value === 'string') {
      updatedPassengers[index] = {
        ...updatedPassengers[index],
        [field]: value ? parseInt(value) : undefined,
      };
    } else {
      updatedPassengers[index] = {
        ...updatedPassengers[index],
        [field]: value,
      };
    }
    setPassengers(updatedPassengers);
  };

  const validatePassengers = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};
    
    passengers.forEach((passenger, index) => {
      if (!passenger.fullName) {
        newErrors[`name-${index}`] = 'Name is required';
        isValid = false;
      }
      
      if (!passenger.age) {
        newErrors[`age-${index}`] = 'Age is required';
        isValid = false;
      }
      
      if (!passenger.gender) {
        newErrors[`gender-${index}`] = 'Gender is required';
        isValid = false;
      }
    });
    
    if (!travelClass) {
      newErrors.travelClass = 'Please select a travel class';
      isValid = false;
    }
    
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (!validatePassengers()) {
      return;
    }
    
    // Cast passengers to ensure all fields are filled
    const validPassengers = passengers.map(p => ({
      fullName: p.fullName || '',
      age: p.age || 0,
      gender: p.gender as Gender
    }));
    
    updateBookingDetails({
      passengers: validPassengers,
      travelClass: travelClass as TravelClass,
      mobileNumber
    });
    
    onNext();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Enter Passenger Details
      </h2>
      
      {passengers.map((passenger, index) => (
        <div key={index} className="border p-4 rounded-md space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Passenger {index + 1}</h3>
            {passengers.length > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRemovePassenger(index)}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor={`name-${index}`}>Full Name</Label>
              <Input
                id={`name-${index}`}
                value={passenger.fullName || ''}
                onChange={(e) => handlePassengerChange(index, 'fullName', e.target.value)}
                placeholder="Enter full name"
                className={errors[`name-${index}`] ? 'border-red-500' : ''}
              />
              {errors[`name-${index}`] && (
                <p className="text-red-500 text-xs mt-1">{errors[`name-${index}`]}</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor={`age-${index}`}>Age</Label>
                <Input
                  id={`age-${index}`}
                  type="number"
                  value={passenger.age || ''}
                  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                  placeholder="Enter age"
                  min={1}
                  max={120}
                  className={errors[`age-${index}`] ? 'border-red-500' : ''}
                />
                {errors[`age-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{errors[`age-${index}`]}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor={`gender-${index}`}>Gender</Label>
                <Select
                  value={passenger.gender}
                  onValueChange={(value) => handlePassengerChange(index, 'gender', value)}
                >
                  <SelectTrigger id={`gender-${index}`} className={errors[`gender-${index}`] ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors[`gender-${index}`] && (
                  <p className="text-red-500 text-xs mt-1">{errors[`gender-${index}`]}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={handleAddPassenger}
        className="w-full flex items-center justify-center gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Add Another Passenger
      </Button>
      
      <div className="space-y-3 pt-4">
        <div>
          <Label htmlFor="travel-class">Select Travel Class</Label>
          <Select
            value={travelClass}
            onValueChange={(value) => setTravelClass(value as TravelClass)}
          >
            <SelectTrigger id="travel-class" className={errors.travelClass ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select travel class" />
            </SelectTrigger>
            <SelectContent>
              {getAvailableTravelClasses().map((cls) => (
                <SelectItem key={cls.value} value={cls.value}>
                  {cls.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.travelClass && (
            <p className="text-red-500 text-xs mt-1">{errors.travelClass}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="mobile">Mobile Number (for ticket/OTP)</Label>
          <Input
            id="mobile"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter 10-digit mobile number"
            type="tel"
            maxLength={10}
            className={errors.mobile ? 'border-red-500' : ''}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default PassengerDetailsStep;
