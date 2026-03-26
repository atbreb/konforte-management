import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Square } from "lucide-react";

export function PropertiesPage() {
  const properties = [
    {
      id: "oviedo-park-crossing",
      name: "Oviedo Park Crossing",
      city: "Oviedo",
      address: "1115 Yellma Place, Oviedo, FL 32765",
      squareFeet: "186,212",
      availableSpaces: 0,
      units: 13,
      occupancyRate: 100,
      image: "https://images.unsplash.com/photo-1752386452625-666d457f83d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGNlbnRlciUyMGV4dGVyaW9yJTIwYWVyaWFsfGVufDF8fHx8MTc3MzY2NjYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premier shopping center in Oviedo with national tenants including Ross, TJ Maxx, PetSmart, and Michaels. Fully leased with strong demographics.",
    },
    {
      id: "timber-springs",
      name: "Timber Springs",
      city: "Orlando",
      address: "425 S. Avalon Park Blvd, Orlando, FL 32828",
      squareFeet: "34,935",
      availableSpaces: 0,
      units: 21,
      occupancyRate: 100,
      image: "https://images.unsplash.com/photo-1760024678775-2410218abad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwbGF6YSUyMGV4dGVyaW9yJTIwZGF5dGltZXxlbnwxfHx8fDE3NzM2NjY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Neighborhood retail center serving the Avalon Park community with diverse tenant mix from dining to services.",
    },
    {
      id: "westland-terrace",
      name: "Westland Terrace",
      city: "Orlando",
      address: "7649 W Colonial Dr, Orlando, FL 32818",
      squareFeet: "77,195",
      availableSpaces: 1,
      units: 16,
      occupancyRate: 98,
      image: "https://images.unsplash.com/photo-1669003153698-6e087110f06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHBsYXphJTIwcGFya2luZyUyMGxvdCUyMGFlcmlhbHxlbnwxfHx8fDE3NzQwMzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Established retail center on West Colonial Drive with 31,500+ daily traffic, recently repainted exterior, and H Mart now open.",
    },
  ];

  return (
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
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow">
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
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Property Locations
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">All 3 properties located in Central Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leasing CTA */}
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              <a href="tel:4075551234">(407) 555-1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}