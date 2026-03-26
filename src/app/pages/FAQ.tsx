import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQPage() {
  const faqCategories = [
    {
      category: "Leasing Questions",
      questions: [
        {
          q: "What types of retail spaces are available?",
          a: "We offer a variety of retail space configurations including inline units, endcap spaces, and pad sites. Square footage ranges from 800 to 3,500 sq ft across our three shopping centers. Each property features different tenant mixes and demographics to suit various retail concepts.",
        },
        {
          q: "What are typical lease terms?",
          a: "Standard lease terms range from 3 to 10 years, with 5-year terms being most common. We offer flexible lease structures including base rent plus CAM, triple net (NNN), and percentage rent arrangements depending on the tenant and space. Renewal options are typically available.",
        },
        {
          q: "What is the leasing process?",
          a: "The leasing process begins with a property tour and space review. Interested tenants submit a business plan and financial information for review. Once approved, we negotiate lease terms and execute the lease agreement. The process typically takes 2-4 weeks from initial inquiry to lease execution.",
        },
        {
          q: "Are tenant improvements (TI) available?",
          a: "Tenant improvement allowances are negotiable and depend on factors including lease term, creditworthiness, and tenant type. We work with each tenant to create a build-out plan that meets their needs while protecting the landlord's investment.",
        },
        {
          q: "Can I see a space before applying?",
          a: "Absolutely! We encourage prospective tenants to tour available spaces. Contact our leasing team to schedule a showing at your convenience. We can also provide floor plans, site plans, and demographic information in advance.",
        },
      ],
    },
    {
      category: "Costs & Fees",
      questions: [
        {
          q: "What are CAM (Common Area Maintenance) charges?",
          a: "CAM charges cover the tenant's proportionate share of common area expenses including parking lot maintenance, landscaping, exterior lighting, property insurance, and property management fees. CAM is billed monthly and reconciled annually based on actual expenses.",
        },
        {
          q: "What is included in my lease rate?",
          a: "The base lease rate typically covers the tenant's exclusive use space. Additional charges may include CAM, property taxes, insurance, and utilities depending on the lease structure. We provide detailed cost breakdowns during lease negotiations.",
        },
        {
          q: "Are utilities included?",
          a: "Utility arrangements vary by space. Most tenants are responsible for their own electricity, water, and gas through separately metered services. Some spaces may include certain utilities in the CAM charges. Specific utility responsibilities are outlined in the lease agreement.",
        },
        {
          q: "What is the security deposit requirement?",
          a: "Security deposits typically equal one to three months of base rent plus estimated CAM charges. The specific amount depends on factors including tenant creditworthiness, lease term, and business type. Security deposits are held in accordance with Florida law.",
        },
      ],
    },
    {
      category: "Operations & Maintenance",
      questions: [
        {
          q: "How do I submit a maintenance request?",
          a: "Tenants can submit maintenance requests by phone at (407) 435-0218, email at property@konfortemanagement.com, or through our online tenant portal. Emergency maintenance issues are addressed 24/7. Non-emergency requests are typically handled within 24-48 hours.",
        },
        {
          q: "What are the property operating hours?",
          a: "Property operating hours vary by location but typically align with standard retail hours of 9 AM to 9 PM Monday through Saturday and 11 AM to 6 PM on Sunday. Individual tenant hours may vary. Common areas and parking lots are accessible 24/7.",
        },
        {
          q: "Is there on-site management?",
          a: "While we don't maintain full-time on-site offices at each property, our property management team makes regular site visits and is available by phone, email, or appointment. We provide responsive service and maintain strong relationships with all tenants.",
        },
        {
          q: "What is the parking situation?",
          a: "All our properties feature ample parking exceeding municipal requirements. Parking is free and available on a first-come, first-served basis. Reserved parking may be available for certain tenants by arrangement. We maintain parking lots to high standards year-round.",
        },
      ],
    },
    {
      category: "General",
      questions: [
        {
          q: "Where are your properties located?",
          a: "Our three retail shopping centers are located in Central Florida: Oviedo Park Crossing in Oviedo, Timber Springs in Orlando (Avalon Park area), and Westland Terrace in Orlando (West Colonial Drive). All properties offer excellent access, visibility, and demographics.",
        },
        {
          q: "Who do I contact for leasing inquiries?",
          a: "For leasing inquiries, contact Justin Konforte at (407) 435-0218 or justin@konfortemanagement.com. You can also submit an inquiry through our website contact form or call our main office line.",
        },
        {
          q: "Do you manage properties for other owners?",
          a: "Yes! While we currently manage our own portfolio, we are expanding to offer professional property management services to other retail property owners in Central Florida. Contact us to discuss your property management needs.",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Answers to common questions from prospective and current tenants
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-600">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help answer any additional questions you may have
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}