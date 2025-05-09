
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, FileText, CreditCard, GraduationCap, Award, 
  LogOut, Activity, BarChart3, Briefcase, Search
} from 'lucide-react';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Mock data
  const mockRequests = [
    { id: 'REQ12345', service: 'Aadhaar Update', user: 'Rahul Kumar', date: '2025-05-08', status: 'Completed' },
    { id: 'REQ12346', service: 'PAN Card', user: 'Priya Sharma', date: '2025-05-08', status: 'Processing' },
    { id: 'REQ12347', service: 'Voter ID', user: 'Amit Singh', date: '2025-05-07', status: 'Waiting for OTP' },
    { id: 'REQ12348', service: 'Income Certificate', user: 'Sunita Patel', date: '2025-05-07', status: 'Verification' },
    { id: 'REQ12349', service: 'Driving License', user: 'Vikram Joshi', date: '2025-05-06', status: 'Completed' },
    { id: 'REQ12350', service: 'Passport', user: 'Neha Gupta', date: '2025-05-06', status: 'Payment Pending' },
    { id: 'REQ12351', service: 'Birth Certificate', user: 'Kunal Mehta', date: '2025-05-05', status: 'Completed' },
    { id: 'REQ12352', service: 'E-Shram Card', user: 'Lata Kumari', date: '2025-05-05', status: 'Processing' },
  ];
  
  const mockPayments = [
    { id: 'PAY98765', amount: '₹70.00', service: 'Aadhaar Update', date: '2025-05-08', status: 'Success' },
    { id: 'PAY98764', amount: '₹150.00', service: 'PAN Card', date: '2025-05-08', status: 'Success' },
    { id: 'PAY98763', amount: '₹100.00', service: 'Voter ID', date: '2025-05-07', status: 'Success' },
    { id: 'PAY98762', amount: '₹120.00', service: 'Income Certificate', date: '2025-05-07', status: 'Success' },
    { id: 'PAY98761', amount: '₹200.00', service: 'Driving License', date: '2025-05-06', status: 'Failed' },
    { id: 'PAY98760', amount: '₹500.00', service: 'Passport', date: '2025-05-06', status: 'Pending' },
    { id: 'PAY98759', amount: '₹80.00', service: 'Birth Certificate', date: '2025-05-05', status: 'Success' },
    { id: 'PAY98758', amount: '₹50.00', service: 'E-Shram Card', date: '2025-05-05', status: 'Success' },
  ];

  const dailyStats = [
    { date: '2025-05-05', requests: 42, payments: 38, revenue: 4500 },
    { date: '2025-05-06', requests: 53, payments: 47, revenue: 5200 },
    { date: '2025-05-07', requests: 48, payments: 45, revenue: 4800 },
    { date: '2025-05-08', requests: 62, payments: 58, revenue: 6500 },
    { date: '2025-05-09', requests: 35, payments: 32, revenue: 3800 },
  ];

  const serviceBreakdown = [
    { service: 'Aadhaar', count: 156, percentage: 28 },
    { service: 'PAN Card', count: 98, percentage: 17 },
    { service: 'Certificates', count: 87, percentage: 15 },
    { service: 'Voter ID', count: 62, percentage: 11 },
    { service: 'E-Shram', count: 58, percentage: 10 },
    { service: 'Education', count: 45, percentage: 8 },
    { service: 'Driving License', count: 41, percentage: 7 },
    { service: 'Others', count: 23, percentage: 4 },
  ];
  
  // Filter requests based on search query
  const filteredRequests = mockRequests.filter(request => 
    request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the Admin Dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-grow flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-xl text-center">Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Login
                </Button>
                
                <div className="text-sm text-gray-500 text-center pt-2">
                  <p>Use demo credentials:</p>
                  <p>Username: admin</p>
                  <p>Password: admin123</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
        
        <footer className="bg-gray-100 border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">
              © 2025 J GROUPS Enterprises. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <Button
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Requests</p>
                <h3 className="text-2xl font-bold">568</h3>
                <p className="text-xs text-green-600">↑ 12% from last week</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold">₹28,450</h3>
                <p className="text-xs text-green-600">↑ 8% from last week</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <h3 className="text-2xl font-bold">1,245</h3>
                <p className="text-xs text-green-600">↑ 18% from last week</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Success Rate</p>
                <h3 className="text-2xl font-bold">94.2%</h3>
                <p className="text-xs text-green-600">↑ 2% from last week</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {dailyStats.map((day, index) => (
                  <div key={index} className="flex items-center p-3 border rounded-lg">
                    <div className="mr-4">
                      <BarChart3 className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{day.date}</p>
                      <div className="flex gap-4 mt-1 text-xs text-gray-600">
                        <span>{day.requests} requests</span>
                        <span>₹{day.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Service Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {serviceBreakdown.map((service, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{service.service}</span>
                      <span className="text-sm font-medium">{service.count}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-blue-600 rounded-full" 
                        style={{ width: `${service.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="requests" className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="requests" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Service Requests
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payments
              </TabsTrigger>
              <TabsTrigger value="certificates" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Certificates
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="employment" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Employment
              </TabsTrigger>
            </TabsList>
            
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-500" />
              <Input 
                placeholder="Search requests..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
          </div>
          
          <TabsContent value="requests" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Service</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((request, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{request.id}</td>
                          <td className="py-3 px-4">{request.service}</td>
                          <td className="py-3 px-4">{request.user}</td>
                          <td className="py-3 px-4">{request.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${request.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                request.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                request.status === 'Waiting for OTP' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {request.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="outline" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredRequests.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No matching requests found</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Payment ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Service</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockPayments.map((payment, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{payment.id}</td>
                          <td className="py-3 px-4">{payment.amount}</td>
                          <td className="py-3 px-4">{payment.service}</td>
                          <td className="py-3 px-4">{payment.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${payment.status === 'Success' ? 'bg-green-100 text-green-800' :
                                payment.status === 'Failed' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {payment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="outline" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certificates" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <Award className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Certificate Services</h3>
                  <p className="text-gray-500">
                    Detailed certificate service metrics coming soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <GraduationCap className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Education Services</h3>
                  <p className="text-gray-500">
                    Detailed education service metrics coming soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="employment" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Employment Services</h3>
                  <p className="text-gray-500">
                    Detailed employment service metrics coming soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © 2025 J GROUPS Enterprises. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
