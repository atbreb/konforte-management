import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Building2, Users, FileText, Wrench, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive day-to-day operations management ensuring your property runs smoothly and efficiently.",
      details: [
        "Daily property inspections and oversight",
        "Vendor coordination and supervision",
        "Property compliance and safety monitoring",
        "Common area maintenance coordination",
        "Emergency response protocols",
      ],
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description: "Building and maintaining strong relationships with tenants for long-term success and retention.",
      details: [
        "Responsive tenant communication",
        "Lease enforcement and compliance",
        "Issue resolution and mediation",
        "Tenant satisfaction monitoring",
        "Move-in and move-out coordination",
      ],
    },
    {
      icon: FileText,
      title: "Lease Administration",
      description: "Expert management of all lease-related activities from tracking to reconciliation.",
      details: [
        "Lease tracking and renewal management",
        "Rent collection and processing",
        "CAM reconciliation and billing",
        "Lease compliance monitoring",
        "Document management and archiving",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description: "Proactive maintenance programs keeping your property in excellent condition.",
      details: [
        "Preventive maintenance scheduling",
        "Emergency repair coordination",
        "Capital improvement oversight",
        "Janitorial and landscaping management",
        "HVAC and systems maintenance",
      ],
    },
    {
      icon: DollarSign,
      title: "Financial Reporting",
      description: "Transparent financial management with detailed reporting and budget oversight.",
      details: [
        "Monthly owner statements",
        "Annual budget preparation",
        "Expense tracking and control",
        "Accounts payable management",
        "Revenue analysis and forecasting",
      ],
    },
    {
      icon: TrendingUp,
      title: "Marketing & Leasing",
      description: "Strategic leasing services to maximize occupancy and attract quality tenants.",
      details: [
        "Vacancy marketing and advertising",
        "Prospective tenant screening",
        "Lease negotiation and execution",
        "Market analysis and pricing",
        "Tenant mix optimization",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We meet to understand your property, goals, and management needs.",
    },
    {
      step: 2,
      title: "Property Assessment",
      description: "Comprehensive evaluation of property condition, operations, and opportunities.",
    },
    {
      step: 3,
      title: "Management Plan",
      description: "Custom management strategy tailored to your property and objectives.",
    },
    {
      step: 4,
      title: "Ongoing Operations & Reporting",
      description: "Active management with transparent reporting and regular communication.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive property management solutions tailored for Central Florida retail centers
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg">
                          <Icon className="h-8 w-8 text-teal-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <ScrollReveal>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we approach property management engagements
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Property?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our property management services can benefit your retail center
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
