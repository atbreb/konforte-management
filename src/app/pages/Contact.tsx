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
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { PropertyMap } from "../components/PropertyMap";
import { OFFICE_LOCATION } from "../data/properties";

const WEB3FORMS_KEY = "b4af2204-7d9e-4b63-a77d-0826fa3bc4c2";

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
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "N/A",
          inquiry_type: formData.inquiryType || "Not specified",
          property_of_interest: formData.property || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          property: "",
          message: "",
        });
      } else {
        setError(result.message || "Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto">
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
                  <CardContent className="p-4 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for your inquiry. We'll be in touch within 1 business day.
                        </p>
                        <Button
                          onClick={() => setSubmitted(false)}
                          className="bg-teal-600 hover:bg-teal-700"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
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
                                <SelectItem value="Leasing Inquiry">Leasing Inquiry</SelectItem>
                                <SelectItem value="General Question">General Question</SelectItem>
                                <SelectItem value="Maintenance Request">Maintenance Request</SelectItem>
                                <SelectItem value="Property Management Services">Property Management Services</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
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
                                <SelectItem value="Oviedo Park Crossing">Oviedo Park Crossing</SelectItem>
                                <SelectItem value="Town Center at Timber Springs">Town Center at Timber Springs</SelectItem>
                                <SelectItem value="Westland Terrace Plaza">Westland Terrace Plaza</SelectItem>
                                <SelectItem value="General / Not Property Specific">General / Not Property Specific</SelectItem>
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

                        {error && (
                          <p className="text-red-600 text-sm">{error}</p>
                        )}

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-teal-600 hover:bg-teal-700"
                          disabled={submitting}
                        >
                          {submitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-8 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Justin Konforte</h3>
                    <p className="text-gray-600 mb-4">Leasing & General Inquiries</p>
                    <div className="space-y-2">
                      <a href="tel:4074350218" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        (407) 435-0218
                      </a>
                      <a href="mailto:justin@konfortemanagement.com" className="block text-blue-900 hover:text-teal-600 transition-colors text-sm md:text-base break-all">
                        justin@konfortemanagement.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-8 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 md:h-10 md:w-10 text-blue-900" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Property Manager</h3>
                    <p className="text-gray-600 mb-4">Maintenance & Operations</p>
                    <div className="space-y-2">
                      <a href="tel:4074350218" className="block text-blue-900 hover:text-teal-600 transition-colors">
                        (407) 435-0218
                      </a>
                      <a href="mailto:property@konfortemanagement.com" className="block text-blue-900 hover:text-teal-600 transition-colors text-sm md:text-base break-all">
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
