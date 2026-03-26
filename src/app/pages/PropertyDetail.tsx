import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, FileDown, Users, DollarSign, Phone, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Building2 } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageShell } from "../components/PageShell";
import { PropertyMap } from "../components/PropertyMap";
import { PROPERTY_LOCATIONS } from "../data/properties";

const propertiesData: Record<string, any> = {
  "oviedo-park-crossing": {
    name: "Oviedo Park Crossing",
    address: "1115 Vidina Pl, Oviedo, FL 32765",
    city: "Oviedo",
    heroImage: "/properties/oviedo-park-crossing/park-crossing-1.jpg",
    description: "Oviedo Park Crossing is a premier power center strategically located in Oviedo, offering prime retail space with excellent visibility and access. Pre-leasing 2,500–10,000 SF with build-to-suit or ground lease available. Ingress/egress on multiple lighted intersections. Minutes from the Oviedo Mall Redevelopment ($100M+ mixed-use redevelopment in the works). National co-tenancy with Ross, TJ Maxx, PetSmart, Bath & Body Works, Dollar Tree, Five Below, and more. Professionally managed by Konforte II LLC.",
    totalSize: "392,798",
    availableSpace: "2,500–10,000",
    units: 13,
    occupancyRate: 98,
    yearBuilt: "1999",
    parkingSpaces: "1,388",
    trafficCount: "High",
    landArea: "59.33 acres",
    population: "145,000",
    households: "52,000",
    avgIncome: "$78,000",
    nearbyRetailers: "Sonny's Real Pit Bar-B-Q, Steak 'n Shake, BJ's Restaurant & Brewhouse, Chili's Grill & Bar, Starbucks, Fairwinds Credit Union, Pure Barre, Metro Diner, Chicken Salad Chick, Mission BBQ",
    availableUnits: [
      {
        suite: "1st Floor",
        sqft: "2,500–10,000",
        type: "Retail",
        rate: "Upon Request",
        availability: "Build-to-Suit Available"
      }
    ],
    tenants: [
      "OfficeMax",
      "Ross Dress For Less",
      "Michaels",
      "Shoe Carnival & Shoe Station",
      "TJ Maxx",
      "PetSmart",
      "Bath & Body Works",
      "Sally Beauty Supply",
      "America's Best Contacts & Eyeglasses",
      "Dollar Tree",
      "Five Below",
      "Phenix Salon Suites",
      "The National Children's Cancer Society"
    ],
    gallery: [
      "/properties/oviedo-park-crossing/park-crossing-1.jpg",
      "/properties/oviedo-park-crossing/park-crossing-2.jpg",
      "/properties/oviedo-park-crossing/park-crossing-3.jpg",
      "/properties/oviedo-park-crossing/park-crossing-4.jpg",
      "/properties/oviedo-park-crossing/park-crossing-5.jpg",
      "/properties/oviedo-park-crossing/park-crossing-6.jpg",
      "/properties/oviedo-park-crossing/park-crossing-7.jpg",
      "/properties/oviedo-park-crossing/park-crossing-8.jpg",
      "/properties/oviedo-park-crossing/park-crossing-9.jpg",
      "/properties/oviedo-park-crossing/park-crossing-10.jpg",
      "/properties/oviedo-park-crossing/park_site_plan.jpg",
    ]
  },
  "timber-springs": {
    name: "Town Center at Timber Springs",
    address: "401-457 S Avalon Park Blvd, Orlando, FL 32828",
    city: "Orlando",
    heroImage: "/properties/timber-springs/timber-1.jpg",
    description: "Town Center at Timber Springs serves the thriving Avalon Park community with convenient neighborhood retail. Located 1.5 miles north of Downtown Avalon Park with 26,000+ cars per day on S Avalon Park Blvd. Shadow anchored by Walmart Neighborhood Market. Surrounded by residential communities with an average household income over $100,000. Abundant parking with cross access to Walmart. Professionally managed by Konforte I LLC.",
    totalSize: "85,683",
    availableSpace: "3,392",
    units: 21,
    occupancyRate: 97,
    yearBuilt: "2006",
    parkingSpaces: "696",
    trafficCount: "26,000+",
    landArea: "19.62 acres",
    population: "98,000",
    households: "36,500",
    avgIncome: "$100,000+",
    nearbyRetailers: "Walmart Neighborhood Market, Chase Bank, Starbucks",
    availableUnits: [
      {
        suite: "Unit 425-000",
        sqft: "1,792",
        type: "Retail",
        rate: "Upon Request",
        availability: "30 Days"
      },
      {
        suite: "Unit 425-700",
        sqft: "1,600",
        type: "Retail",
        rate: "Upon Request",
        availability: "May 31, 2026"
      }
    ],
    tenants: [
      "McDonald's",
      "Walmart",
      "Clothes Bin",
      "IMA Vapor",
      "Pet Stuff Illinois",
      "Shai Cuisine",
      "You & Eyes",
      "Tratto (Pasta Bistro)",
      "MRC Dental Group",
      "Intervention Massage",
      "Diamond Nails and Spa",
      "Great Clips",
      "Spine Labs",
      "Legends Men's Grooming",
      "Las Cazuelas Mexican",
      "Flor De Abril",
      "USA Wireless",
      "Gotta Dance",
      "Island Thyme Grill",
      "Avalon Park Chiropractic",
      "Space Coast Credit"
    ],
    gallery: [
      "/properties/timber-springs/timber-1.jpg",
      "/properties/timber-springs/timber-2.jpg",
      "/properties/timber-springs/timber-3.jpg",
      "/properties/timber-springs/timber-4.jpg",
      "/properties/timber-springs/timber-5.jpg",
      "/properties/timber-springs/timber_site_plan.jpg",
    ]
  },
  "westland-terrace": {
    name: "Westland Terrace Plaza",
    address: "7501-7649 W Colonial Dr, Orlando, FL 32818",
    city: "Orlando",
    heroImage: "/properties/westland-terrace/westland-1.jpg",
    description: "Westland Terrace is a 252,883 SF community shopping center situated in a main retail corridor surrounded by national and regional retailers. The center is located at the signalized corner of W Colonial Drive and Apopka Vineland Road with 31,500+ cars per day on Colonial. Features include a dedicated turn lane, pylon sign, and signalized intersection. The entire exterior was recently repainted. HMART is now open at the center. Professionally managed by Konforte Westland Colonial LLC.",
    totalSize: "302,202",
    availableSpace: "1,200",
    units: 16,
    occupancyRate: 98,
    yearBuilt: "2001",
    parkingSpaces: "1,560",
    trafficCount: "31,500+",
    landArea: "31.48 acres",
    population: "105,000",
    households: "42,000",
    avgIncome: "$68,000",
    nearbyRetailers: "H Mart, Hook & Reel, Olive Garden, Regions Bank, IHOP, Sky Zone, Walmart Neighborhood Market, Key Food, Steak 'n Shake, Chili's Grill & Bar",
    availableUnits: [
      {
        suite: "Unit 140",
        sqft: "1,200",
        type: "Retail",
        rate: "Upon Request",
        availability: "Now Available"
      }
    ],
    tenants: [
      "Amscot Corporation",
      "Tactical Recycling",
      "Bistro Paradise",
      "La Differance Bakery & Takeout",
      "Excellent C. Duvet",
      "Revitalize Care of Central Florida",
      "Judah Ministries Impact",
      "HUM Provider Holdings",
      "EDUMATICS",
      "Hair Galleria",
      "DL International Beauty",
      "Envious Salon Suites",
      "Orlando New China",
      "Hair By Alexis",
      "TD Nails 1",
      "Lex and Roses"
    ],
    gallery: [
      "/properties/westland-terrace/westland-1.jpg",
      "/properties/westland-terrace/westland-2.jpg",
      "/properties/westland-terrace/westland-3.jpg",
      "/properties/westland-terrace/westland-4.jpg",
      "/properties/westland-terrace/westland-5.jpg",
      "/properties/westland-terrace/westland-6.jpg",
      "/properties/westland-terrace/westland-7.jpg",
      "/properties/westland-terrace/westland-8.jpg",
      "/properties/westland-terrace/westland-9.jpg",
      "/properties/westland-terrace/westland-10.jpg",
      "/properties/westland-terrace/westland-11.jpg",
      "/properties/westland-terrace/westland-12.jpg",
      "/properties/westland-terrace/westland-13.jpg",
      "/properties/westland-terrace/westland-14.jpg",
      "/properties/westland-terrace/westland-15.jpg",
      "/properties/westland-terrace/westland-16.jpg",
      "/properties/westland-terrace/westland-17.jpg",
      "/properties/westland-terrace/westland-18.jpg",
      "/properties/westland-terrace/westland-19.jpg",
      "/properties/westland-terrace/westland-20.jpg",
      "/properties/westland-terrace/westland_site_plan.png",
    ]
  }
};

export function PropertyDetailPage() {
  const { propertyId } = useParams();
  const property = propertyId ? propertiesData[propertyId] : null;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedImageIndex === null || !property) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedImageIndex((prev) => 
          prev === 0 ? property.gallery.length - 1 : (prev || 0) - 1
        );
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedImageIndex((prev) => 
          prev === property.gallery.length - 1 ? 0 : (prev || 0) + 1
        );
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex, property]);

  const nextImage = () => {
    if (!property) return;
    setSelectedImageIndex((prev) => 
      prev === property.gallery.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  const prevImage = () => {
    if (!property) return;
    setSelectedImageIndex((prev) => 
      prev === 0 ? property.gallery.length - 1 : (prev || 0) - 1
    );
  };

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <Button asChild>
          <Link to="/properties">Back to Properties</Link>
        </Button>
      </div>
    );
  }

  const locationData = propertyId ? PROPERTY_LOCATIONS[propertyId as keyof typeof PROPERTY_LOCATIONS] : null;

  return (
    <PageShell preloadImages={[property.heroImage]}>
      <div>
        {/* Property Hero */}
        <section className="relative h-48 md:h-96 flex items-end">
          <div className="absolute inset-0">
            <img
              src={property.heroImage}
              alt={property.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-4 pb-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{property.name}</h1>
            <div className="flex items-center text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.address}</span>
            </div>
          </div>
        </section>

        {/* Property Description */}
        <ScrollReveal>
          <section className="py-12 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Overview</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Button variant="outline" className="border-blue-900 text-blue-900">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download Property Flyer
                    </Button>
                    <Button variant="outline" className="border-blue-900 text-blue-900">
                      <FileDown className="h-4 w-4 mr-2" />
                      Download Site Plan
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-semibold">Retail Shopping Center</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-semibold">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking Spaces:</span>
                      <span className="font-semibold">{property.parkingSpaces}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Traffic Count:</span>
                      <span className="font-semibold">{property.trafficCount}/day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Trade Area Stats */}
        <ScrollReveal>
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Key Property Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">
                      {property.totalSize}
                    </div>
                    <div className="text-sm text-gray-600">Total Property Size (sq ft)</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">
                      {property.availableSpace}
                    </div>
                    <div className="text-sm text-gray-600">Available Space (sq ft)</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">
                      {property.units}
                    </div>
                    <div className="text-sm text-gray-600">Total Units</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">
                      {property.occupancyRate}%
                    </div>
                    <div className="text-sm text-gray-600">Occupancy Rate</div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-6 text-center">
                Trade Area Demographics (10-Minute Drive)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {property.population}
                    </div>
                    <div className="text-sm text-gray-600">Population</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {property.households}
                    </div>
                    <div className="text-sm text-gray-600">Households</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {property.avgIncome}
                    </div>
                    <div className="text-sm text-gray-600">Avg Household Income</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Photo Gallery */}
        <ScrollReveal>
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Property Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {property.gallery.map((image: string, index: number) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <img
                      src={image}
                      alt={`${property.name} - Photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Available Spaces */}
        <ScrollReveal>
          <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Spaces</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Suite</th>
                    <th className="px-6 py-4 text-left">Square Feet</th>
                    <th className="px-6 py-4 text-left">Unit Type</th>
                    <th className="px-6 py-4 text-left">Lease Rate</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {property.availableUnits.length > 0 ? (
                    property.availableUnits.map((unit: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">{unit.suite}</td>
                        <td className="px-6 py-4">{unit.sqft} sq ft</td>
                        <td className="px-6 py-4">
                          <Badge variant="outline">{unit.type}</Badge>
                        </td>
                        <td className="px-6 py-4">{unit.rate}</td>
                        <td className="px-6 py-4">
                          <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
                            <Link to={`/contact?property=${propertyId}&suite=${unit.suite}`}>
                              Inquire
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                        <div className="flex flex-col items-center">
                          <Building2 className="h-12 w-12 text-gray-300 mb-3" />
                          <p className="font-semibold">No Spaces Currently Available</p>
                          <p className="text-sm mt-1">Please check back later or contact us for future availability</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Current Tenants */}
      <ScrollReveal>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Tenants</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
              {property.tenants.map((tenant: string, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm font-semibold text-gray-900">{tenant}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Map */}
      <ScrollReveal>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Location</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {locationData ? (
                <PropertyMap
                  locations={[locationData]}
                  className="aspect-video"
                  zoom={15}
                />
              ) : (
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">{property.address}</p>
                    <p className="text-sm">{property.city}, Florida</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
        <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Contact Our Leasing Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Justin Konforte</h3>
                <p className="text-sm text-gray-600 mb-4">Leasing & General Inquiries</p>
                <div className="space-y-3">
                  <a href="tel:4074350218" className="flex items-center text-blue-900 hover:text-teal-600">
                    <Phone className="h-4 w-4 mr-2" />
                    (407) 435-0218
                  </a>
                  <a href="mailto:justin@konfortemanagement.com" className="flex items-center text-blue-900 hover:text-teal-600">
                    <Mail className="h-4 w-4 mr-2" />
                    justin@konfortemanagement.com
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Property Manager</h3>
                <p className="text-sm text-gray-600 mb-4">Maintenance & Operations</p>
                <div className="space-y-3">
                  <a href="tel:4074350218" className="flex items-center text-blue-900 hover:text-teal-600">
                    <Phone className="h-4 w-4 mr-2" />
                    (407) 435-0218
                  </a>
                  <a href="mailto:property@konfortemanagement.com" className="flex items-center text-blue-900 hover:text-teal-600">
                    <Mail className="h-4 w-4 mr-2" />
                    property@konfortemanagement.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link to="/contact">Send Us a Message</Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8 text-white" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium">
            {selectedImageIndex + 1} / {property.gallery.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={property.gallery[selectedImageIndex]}
              alt={`${property.name} - Photo ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
    </PageShell>
  );
}