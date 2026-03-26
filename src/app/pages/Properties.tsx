import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Square } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageShell } from "../components/PageShell";
import { PropertyMap } from "../components/PropertyMap";
import { PROPERTY_LOCATIONS } from "../data/properties";

export function PropertiesPage() {
  const properties = [
    {
      id: "oviedo-park-crossing",
      name: "Oviedo Park Crossing",
      city: "Oviedo",
      address: "1115 Vidina Pl, Oviedo, FL 32765",
      squareFeet: "392,798",
      availableSpaces: 1,
      units: 13,
      occupancyRate: 98,
      image: "/properties/oviedo-park-crossing/park-crossing-1.jpg",
      description: "Premier power center in Oviedo with national tenants including Ross, TJ Maxx, PetSmart, and Michaels. Pre-leasing 2,500–10,000 SF with build-to-suit available. Minutes from the Oviedo Mall Redevelopment.",
    },
    {
      id: "timber-springs",
      name: "Town Center at Timber Springs",
      city: "Orlando",
      address: "401-457 S Avalon Park Blvd, Orlando, FL 32828",
      squareFeet: "85,683",
      availableSpaces: 2,
      units: 21,
      occupancyRate: 97,
      image: "/properties/timber-springs/timber-1.jpg",
      description: "Neighborhood center serving the Avalon Park community with 26,000+ cars per day. Shadow anchored by Walmart Neighborhood Market with average household income over $100,000.",
    },
    {
      id: "westland-terrace",
      name: "Westland Terrace Plaza",
      city: "Orlando",
      address: "7501-7649 W Colonial Dr, Orlando, FL 32818",
      squareFeet: "302,202",
      availableSpaces: 1,
      units: 16,
      occupancyRate: 98,
      image: "/properties/westland-terrace/westland-1.jpg",
      description: "252,883 SF community shopping center at the signalized corner of W Colonial Drive and Apopka Vineland Road with 31,500+ cars per day. Recently repainted exterior. HMART now open.",
    },
  ];

  return (
    <PageShell preloadImages={properties.map((p) => p.image)}>
      <div>
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Properties</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore available retail spaces across our Central Florida portfolio
            </p>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {properties.map((property, index) => (
                <ScrollReveal key={property.id} delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative h-64 md:h-auto">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        {property.availableSpaces > 0 && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                              {property.availableSpaces} Spaces Available
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="md:col-span-3">
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {property.name}
                              </h2>
                              <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{property.address}</span>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-blue-900 text-blue-900">
                              Retail Shopping Center
                            </Badge>
                          </div>

                          <p className="text-gray-700 mb-6">{property.description}</p>

                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="border-l-4 border-teal-600 pl-4">
                              <div className="text-sm text-gray-600 mb-1">Total Size</div>
                              <div className="text-lg font-bold text-gray-900">
                                {property.squareFeet} sq ft
                              </div>
                            </div>
                            <div className="border-l-4 border-teal-600 pl-4">
                              <div className="text-sm text-gray-600 mb-1">Occupancy</div>
                              <div className="text-lg font-bold text-gray-900">
                                {property.occupancyRate}%
                              </div>
                            </div>
                            <div className="border-l-4 border-teal-600 pl-4">
                              <div className="text-sm text-gray-600 mb-1">Available</div>
                              <div className="text-lg font-bold text-gray-900">
                                {property.availableSpaces} Units
                              </div>
                            </div>
                          </div>

                          <Button asChild className="bg-blue-900 hover:bg-blue-800">
                            <Link to={`/properties/${property.id}`}>View Property Details</Link>
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <ScrollReveal>
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Property Locations
              </h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <PropertyMap
                  locations={Object.values(PROPERTY_LOCATIONS)}
                  className="aspect-video"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Leasing CTA */}
        <ScrollReveal>
          <section className="bg-teal-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in Leasing Retail Space?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about available opportunities in our premium retail locations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  <Link to="/contact">Contact Leasing Team</Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600">
                  <a href="tel:4074350218">(407) 435-0218</a>
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageShell>
  );
}
