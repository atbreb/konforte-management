import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, FileDown, Users, DollarSign, Phone, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Building2 } from "lucide-react";

const propertiesData: Record<string, any> = {
  "oviedo-park-crossing": {
    name: "Oviedo Park Crossing",
    address: "1115 Yellma Place, Oviedo, FL 32765",
    city: "Oviedo",
    heroImage: "https://images.unsplash.com/photo-1752386452625-666d457f83d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGNlbnRlciUyMGV4dGVyaW9yJTIwYWVyaWFsfGVufDF8fHx8MTc3MzY2NjYyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Oviedo Park Crossing is a premier retail shopping center strategically located in Oviedo, offering prime retail space with excellent visibility and access. The property benefits from high traffic counts and serves a growing trade area with strong demographics. The center features modern amenities, ample parking, and professional on-site management by Konforte II LLC.",
    totalSize: "186,212",
    availableSpace: "0",
    units: 13,
    occupancyRate: 100,
    population: "145,000",
    households: "52,000",
    avgIncome: "$78,000",
    availableUnits: [],
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
      "https://images.unsplash.com/photo-1641440615796-5302077ce9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNlbnRlciUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzczNjU1Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761333477936-56fbc7851c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NzM2NjY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758786266130-7d4cc2f9022c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwbGF6YSUyMHNpZ25hZ2V8ZW58MXx8fHwxNzczNjY2NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764801341736-ea42131f484c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2hvcHBpbmclMjBwYXJraW5nfGVufDF8fHx8MTc3MzY2Njc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  "timber-springs": {
    name: "Timber Springs",
    address: "425 S. Avalon Park Blvd, Orlando, FL 32828",
    city: "Orlando",
    heroImage: "https://images.unsplash.com/photo-1760024678775-2410218abad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwbGF6YSUyMGV4dGVyaW9yJTIwZGF5dGltZXxlbnwxfHx8fDE3NzM2NjY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Timber Springs serves the thriving Avalon Park community with convenient neighborhood retail. Located in one of Orlando's fastest-growing areas, this property benefits from exceptional demographics and expanding residential development. The center features excellent visibility, easy access from Avalon Park Boulevard, and a strong tenant mix that caters to the local market. Professionally managed by Konforte I LLC.",
    totalSize: "34,935",
    availableSpace: "0",
    units: 21,
    occupancyRate: 100,
    population: "98,000",
    households: "36,500",
    avgIncome: "$82,000",
    availableUnits: [],
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
      "https://images.unsplash.com/photo-1641440615796-5302077ce9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNlbnRlciUyMHN0b3JlZnJvbnR8ZW58MXx8fHwxNzczNjU1Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761333477936-56fbc7851c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NzM2NjY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758786266130-7d4cc2f9022c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwbGF6YSUyMHNpZ25hZ2V8ZW58MXx8fHwxNzczNjY2NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764801341736-ea42131f484c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2hvcHBpbmclMjBwYXJraW5nfGVufDF8fHx8MTc3MzY2Njc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  "westland-terrace": {
    name: "Westland Terrace",
    address: "7649 W Colonial Dr, Orlando, FL 32818",
    city: "Orlando",
    heroImage: "https://images.unsplash.com/photo-1669003153698-6e087110f06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHBsYXphJTIwcGFya2luZyUyMGxvdCUyMGFlcmlhbHxlbnwxfHx8fDE3NzQwMzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Westland Terrace is a 252,883 SF shopping center situated in a main retail corridor surrounded by national and regional retailers. The center is located at the signalized corner of W Colonial Drive and Apopka Vineland Road with 31,500+ cars per day on Colonial. Features include a dedicated turn lane, pylon sign, and signalized intersection. The entire exterior was recently repainted. HMART is now open at the center. Professionally managed by Konforte Westland Colonial LLC.",
    totalSize: "77,195",
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
      "https://images.unsplash.com/photo-1669003153698-6e087110f06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHBsYXphJTIwcGFya2luZyUyMGxvdCUyMGFlcmlhbHxlbnwxfHx8fDE3NzQwMzE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759092912803-f2332d1f8d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MXx8fHwxNzc0MDMxNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1761333482894-700fc6aebd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmV0YWlsJTIwc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQwMzE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1651569243630-9be1deb7c8a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNlbnRlciUyMHNpZ25hZ2V8ZW58MXx8fHwxNzc0MDMxNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1769476971756-8989225dd88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwbGF6YSUyMGVudHJhbmNlfGVufDF8fHx8MTc3NDAzMTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1766788467598-80ba41d3c512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQwMzE0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1695721157873-0c87f59a8ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHJldGFpbCUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MDMxNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
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

  return (
    <div>
      {/* Property Hero */}
      <section className="relative h-96 flex items-end">
        <div className="absolute inset-0">
          <img
            src={property.heroImage}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-8 text-white">
          <h1 className="text-5xl font-bold mb-3">{property.name}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.address}</span>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Overview</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>
              <div className="flex gap-4">
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

      {/* Trade Area Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Property Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {property.totalSize}
                </div>
                <div className="text-sm text-gray-600">Total Property Size (sq ft)</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {property.availableSpace}
                </div>
                <div className="text-sm text-gray-600">Available Space (sq ft)</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {property.units}
                </div>
                <div className="text-sm text-gray-600">Total Units</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {property.occupancyRate}%
                </div>
                <div className="text-sm text-gray-600">Occupancy Rate</div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-12 mb-6 text-center">
            Trade Area Demographics (10-Minute Drive)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Property Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Available Spaces */}
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

      {/* Current Tenants */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Tenants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Location</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">{property.address}</p>
                <p className="text-sm">{property.city}, Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Contact Our Leasing Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
  );
}