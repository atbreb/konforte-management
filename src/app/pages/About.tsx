import { Card, CardContent } from "../components/ui/card";
import { Target, Eye, Award, Building2, Users, MapPin } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal } from "../components/ScrollReveal";

export function AboutPage() {
  const values = [
    {
      icon: Building2,
      title: "Owner's Perspective",
      description: "As property owners ourselves, we bring firsthand understanding to every management decision.",
    },
    {
      icon: Users,
      title: "Tenant-First Service",
      description: "Strong tenant relationships are the foundation of successful retail property management.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Our Central Florida focus enables hands-on management and deep market knowledge.",
    },
  ];

  const team = [
    {
      name: "Justin Konforte",
      title: "Founder & Principal",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY0OTIyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Justin founded Konforte Management after recognizing the need for owner-focused property management in Central Florida. With over 15 years of commercial real estate experience, he brings deep expertise in retail leasing, property operations, and strategic planning. Justin's hands-on approach ensures every property receives the attention it deserves.",
    },
    {
      name: "Yoram Konforte",
      title: "Partner",
      image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzY0OTIyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Yoram brings extensive financial and operational expertise to Konforte Management. His background in commercial property investment and business operations provides strategic oversight across the portfolio. Yoram's analytical approach complements the company's commitment to data-driven decision-making.",
    },
    {
      name: "Sarah Mitchell",
      title: "Property Manager",
      image: "https://images.unsplash.com/photo-1758598306913-5cd682b9e53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNjY0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Sarah oversees day-to-day operations across the portfolio, ensuring exceptional tenant service and property maintenance. With 10 years of property management experience, she excels at vendor coordination, issue resolution, and maintaining high operational standards.",
    },
    {
      name: "Michael Chen",
      title: "Senior Accountant",
      image: "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwb2ZmaWNlfGVufDF8fHx8MTc3MzY2Njg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Michael manages financial reporting, budgeting, and lease administration for the portfolio. His attention to detail and expertise in commercial real estate accounting ensures accurate financial management and transparent owner reporting.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Konforte Management</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional retail property management rooted in Central Florida
          </p>
        </div>
      </section>

      {/* Company Story */}
      <ScrollReveal>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built on an Owner's Perspective
              </h2>
              <p className="text-gray-700 mb-4">
                Konforte Management was founded with a simple but powerful philosophy: manage every property as if it were our own. Because it is.
              </p>
              <p className="text-gray-700 mb-4">
                As property owners ourselves, we understand the challenges and opportunities that come with retail property management. We know what it takes to maintain occupancy, attract quality tenants, control expenses, and preserve asset value. This firsthand experience informs every decision we make.
              </p>
              <p className="text-gray-700 mb-4">
                Our Central Florida focus isn't a limitation—it's our strength. By concentrating our portfolio in the markets we know best, we can provide hands-on oversight, build strong local relationships, and respond quickly when our tenants need us.
              </p>
              <p className="text-gray-700">
                Whether you're a prospective tenant looking for retail space or a property owner considering professional management, you'll benefit from our commitment to excellence, accountability, and long-term value creation.
              </p>
            </div>
            <div className="relative h-48 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzczNjAwMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Konforte Management team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Mission & Values */}
      <ScrollReveal>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                      <Icon className="h-10 w-10 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence in property management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2">
                    <div className="relative h-64 md:h-full">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-teal-600 font-semibold mb-4">{member.title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / By the Numbers */}
      <ScrollReveal>
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={105500} duration={2000} />+
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-300">Total Square Feet Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={42} duration={2000} />+
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

      {/* Mission Statement */}
      <ScrollReveal>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="p-4 md:p-8">
                  <Target className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To deliver exceptional property management services that maximize value for owners while providing tenants with professionally maintained retail spaces and responsive service.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 md:p-8">
                  <Eye className="h-12 w-12 text-blue-900 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700">
                    To be Central Florida's most trusted retail property management company, known for our owner's perspective, tenant relationships, and commitment to operational excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}