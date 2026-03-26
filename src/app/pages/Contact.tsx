import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { PropertyMap } from "../components/PropertyMap";
import { OFFICE_LOCATION } from "../data/properties";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    property: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch about leasing opportunities or property management services
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ScrollReveal>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleChange("firstName", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleChange("lastName", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name (Optional)</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleChange("inquiryType", value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="leasing">Leasing Inquiry</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                              <SelectItem value="maintenance">Maintenance Request</SelectItem>
                              <SelectItem value="management">Property Management Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="property">Property of Interest</Label>
                          <Select
                            value={formData.property}
                            onValueChange={(value) => handleChange("property", value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select property" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="oviedo-park-crossing">Oviedo Park Crossing</SelectItem>
                              <SelectItem value="timber-springs">Town Center at Timber Springs</SelectItem>
                              <SelectItem value="westland-terrace">Westland Terrace Plaza</SelectItem>
                              <SelectItem value="general">General / Not Property Specific</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={6}
                          className="mt-1"
                          placeholder="Tell us about your inquiry..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Office Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Address</div>
                          <div className="text-sm text-gray-600">
                            Orlando, FL
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Phone</div>
                          <a href="tel:4074350218" className="text-sm text-blue-900 hover:text-teal-600">
                            (407) 435-0218
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Email</div>
                          <a href="mailto:info@konfortemanagement.com" className="text-sm text-blue-900 hover:text-teal-600">
                            info@konfortemanagement.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Office Hours</div>
                          <div className="text-sm text-gray-600">
                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                            Saturday - Sunday: Closed
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Map</h3>
                    <PropertyMap
                      locations={[OFFICE_LOCATION]}
                      className="aspect-square rounded-lg overflow-hidden"
                      zoom={13}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Direct Contacts */}
      <ScrollReveal>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Direct Contacts</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-10 w-10 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Justin Konforte</h3>
                    <p className="text-gray-600 mb-4">Leasing & General Inquiries</p>
                    <div className="space-y-2">
                      <a href="tel:4074350218" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        (407) 435-0218
                      </a>
                      <a href="mailto:justin@konfortemanagement.com" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        justin@konfortemanagement.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-10 w-10 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Property Manager</h3>
                    <p className="text-gray-600 mb-4">Maintenance & Operations</p>
                    <div className="space-y-2">
                      <a href="tel:4074350218" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        (407) 435-0218
                      </a>
                      <a href="mailto:property@konfortemanagement.com" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        property@konfortemanagement.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
