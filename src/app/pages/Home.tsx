import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Building2, Users, TrendingUp, Shield, Handshake, Clock, Wrench } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageShell } from "../components/PageShell";

export function HomePage() {
  const properties = [
    {
      id: "oviedo-park-crossing",
      name: "Oviedo Park Crossing",
      city: "Oviedo, FL",
      address: "1115 Vidina Pl, Oviedo, FL 32765",
      squareFeet: "392,798",
      availableSpaces: 1,
      units: 13,
      image: "/properties/oviedo-park-crossing/park-crossing-1.jpg",
    },
    {
      id: "timber-springs",
      name: "Town Center at Timber Springs",
      city: "Orlando, FL",
      address: "401-457 S Avalon Park Blvd, Orlando, FL 32828",
      squareFeet: "85,683",
      availableSpaces: 2,
      units: 21,
      image: "/properties/timber-springs/timber-1.jpg",
    },
    {
      id: "westland-terrace",
      name: "Westland Terrace Plaza",
      city: "Orlando, FL",
      address: "7501-7649 W Colonial Dr, Orlando, FL 32818",
      squareFeet: "302,202",
      availableSpaces: 1,
      units: 16,
      image: "/properties/westland-terrace/westland-1.jpg",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Day-to-day operations, vendor coordination, and comprehensive property oversight",
    },
    {
      icon: Handshake,
      title: "Tenant Relations",
      description: "Dedicated tenant communication and support for long-term partnership success",
    },
    {
      icon: Clock,
      title: "Lease Administration",
      description: "Expert lease tracking, rent collection, and CAM reconciliation services",
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description: "Preventive maintenance, emergency repairs, and capital improvement management",
    },
  ];

  return (
    <PageShell preloadImages={["/properties/westland-terrace/westland-3.jpg"]}>
      <div>
        {/* Hero Section */}
        <section className="relative min-h-[420px] md:min-h-[600px] flex items-center justify-center text-white py-16">
          <div className="absolute inset-0 bg-gray-900">
            <img
              src="/properties/westland-terrace/westland-3.jpg"
              alt="Shopping center aerial view"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Retail Property Management<br />in Central Florida
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto">
              Owner-operated expertise delivering exceptional results for retail shopping centers
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
                <Link to="/properties">View Our Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <ScrollReveal>
          <section className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={780683} duration={2000} />+
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-300">Total Square Feet Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={50} duration={2000} />+
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-300">Number of Tenants</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={3} duration={2000} />
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-300">Properties Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={94} duration={2000} />%
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-300">Occupancy Rate</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Featured Properties */}
        <ScrollReveal>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Properties</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore our portfolio of well-maintained retail shopping centers across Central Florida
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                  <ScrollReveal key={property.id} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        {property.availableSpaces > 0 && (
                          <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {property.availableSpaces} Spaces Available
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{property.city}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Square Feet:</span>
                            <span className="font-semibold text-gray-900">{property.squareFeet} sq ft</span>
                          </div>
                        </div>
                        <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                          <Link to={`/properties/${property.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* About Section */}
        <ScrollReveal>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    An Owner's Perspective on Every Decision
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Konforte Management brings a unique advantage to retail property management: we're property owners ourselves. This owner-operator approach means we understand the challenges and opportunities from both sides of the equation.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our Central Florida focus allows us to maintain hands-on oversight of every property, building strong relationships with tenants and ensuring the highest standards of maintenance and operations.
                  </p>
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
                <div className="relative h-48 md:h-96 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/properties/oviedo-park-crossing/park-crossing-2.jpg"
                    alt="Property management team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services Overview */}
        <ScrollReveal>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive property management solutions tailored for retail shopping centers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <Card className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                            <Icon className="h-8 w-8 text-teal-600" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  );
                })}
              </div>
              <div className="text-center mt-8">
                <Button asChild size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <section className="bg-teal-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Looking for Retail Space in Central Florida?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Discover premium retail locations with professional management and tenant-first service
              </p>
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageShell>
  );
}
