
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Chrome } from 'lucide-react';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({ open, onOpenChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneLogin = () => {
    // TODO: Implement phone login logic
    console.log('Phone login with:', phoneNumber);
    setShowOtpInput(true);
  };

  const handleOtpVerification = () => {
    // TODO: Implement OTP verification logic
    console.log('Verifying OTP:', otp);
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google sign up logic
    console.log('Google sign up clicked');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome Back
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full"
                />
              </div>
              
              {showOtpInput && (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="w-full"
                  />
                </div>
              )}
              
              <Button 
                onClick={showOtpInput ? handleOtpVerification : handlePhoneLogin}
                className="w-full"
                disabled={!phoneNumber || (showOtpInput && !otp)}
              >
                {showOtpInput ? 'Verify OTP' : 'Send OTP'}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="register-phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>
              
              <Button className="w-full">
                Register with OTP
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleGoogleSignUp}
        >
          <Chrome className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};
