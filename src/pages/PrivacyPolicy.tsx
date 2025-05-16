
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground">Last Updated: May 16, 2025</p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                J GROUPS Enterprises ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our automation services.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in various ways, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Personal Information</strong>: Name, email address, phone number, and other 
                  contact details you provide when using our services or contacting us.
                </li>
                <li>
                  <strong className="text-foreground">Application Data</strong>: Information required for government document 
                  processing, such as identification details, addresses, and other required fields.
                </li>
                <li>
                  <strong className="text-foreground">Usage Information</strong>: Data about how you interact with our website, 
                  including IP address, browser type, pages viewed, time spent on pages, and other analytics data.
                </li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and fulfill your government document requests</li>
                <li>Communicate with you about your applications</li>
                <li>Improve our services and website functionality</li>
                <li>Send you updates and promotional communications (with your consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet or electronic storage is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
              <p>
                We may use third-party services to process applications, payments, or analyze website usage. 
                These third parties have access to your personal information only to perform specific tasks 
                on our behalf and are obligated to not disclose or use it for any other purpose.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">6. Your Data Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                You may also object to or restrict certain processing of your data. To exercise 
                these rights, please contact us using the information provided below.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@jgroups.in<br />
                Phone: +91 9876543210<br />
                Address: J GROUPS Enterprises, Bihar, India
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
