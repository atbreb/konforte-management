import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal } from "../components/ScrollReveal";

export function BlogPage() {
  const featuredPost = {
    title: "Central Florida Retail Market Shows Strong Growth in Q1 2026",
    date: "March 10, 2026",
    category: "Market Updates",
    excerpt: "The Central Florida retail market continues to demonstrate robust performance with increasing occupancy rates and growing tenant demand across the region. We analyze the key trends driving this growth and what it means for retail property owners and tenants.",
    image: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVhbCUyMGVzdGF0ZSUyMG5ld3N8ZW58MXx8fHwxNzczNjY2OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    slug: "central-florida-retail-market-q1-2026",
  };

  const posts = [
    {
      title: "5 Key Factors Tenants Should Consider When Choosing Retail Space",
      date: "March 5, 2026",
      category: "Retail Trends",
      excerpt: "From demographics to co-tenancy, we break down the essential considerations for selecting the right retail location for your business.",
      image: "https://images.unsplash.com/photo-1759323321196-2813db509285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBtYXJrZXQlMjB0cmVuZHN8ZW58MXx8fHwxNzczNjY2OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "5-key-factors-choosing-retail-space",
    },
    {
      title: "Welcome New Tenant: Artisan Coffee Roasters at Central Plaza",
      date: "February 28, 2026",
      category: "Property News",
      excerpt: "We're excited to announce that Artisan Coffee Roasters has signed a lease for a 1,200 sq ft space at Central Plaza Shopping Center.",
      image: "https://images.unsplash.com/photo-1668826054460-4ceffd1c8909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMG9wZW5pbmd8ZW58MXx8fHwxNzczNjY2OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "welcome-artisan-coffee-roasters",
    },
    {
      title: "Understanding CAM Charges: A Guide for Retail Tenants",
      date: "February 20, 2026",
      category: "Tenant Resources",
      excerpt: "Common Area Maintenance charges explained: what they cover, how they're calculated, and what tenants should expect.",
      image: "https://images.unsplash.com/photo-1764885518237-d92e0f60e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc3MzY2Njk1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "understanding-cam-charges",
    },
    {
      title: "Spotlight on Success: Local Business Thrives at Lakeside Retail Center",
      date: "February 12, 2026",
      category: "Tenant Spotlight",
      excerpt: "How one local boutique owner found the perfect location and built a thriving business in our Winter Park property.",
      image: "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzM2NjY5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "spotlight-local-boutique-success",
    },
    {
      title: "Apopka Market Analysis: Why Now is the Time to Consider Retail Space",
      date: "February 5, 2026",
      category: "Market Updates",
      excerpt: "Apopka continues to experience strong population and economic growth. Here's what it means for retail opportunities.",
      image: "https://images.unsplash.com/photo-1620442771341-4e157b3b6cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwYnVzaW5lc3MlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzczNjY2OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "apopka-market-analysis",
    },
    {
      title: "Property Improvements Completed at Cornerstone Commons",
      date: "January 28, 2026",
      category: "Property News",
      excerpt: "Recent capital improvements enhance the shopping experience and property value at our Apopka location.",
      image: "https://images.unsplash.com/photo-1720166671019-744dcef65d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNlbnRlciUyMHBhcmtpbmclMjBsb3QlMjBhZXJpYWx8ZW58MXx8fHwxNzczNjY2NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      slug: "cornerstone-commons-improvements",
    },
  ];

  const categories = ["All Posts", "Market Updates", "Property News", "Tenant Spotlight", "Retail Trends", "Tenant Resources"];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Market updates, property news, and Central Florida retail insights
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="border-b bg-white sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-teal-600 hover:bg-teal-700" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <ScrollReveal>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-600 hover:bg-teal-700">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-4 md:p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3">{featuredPost.category}</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {featuredPost.date}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <Button className="bg-blue-900 hover:bg-blue-800 w-fit">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      </ScrollReveal>

      {/* Post Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <Button variant="outline" className="w-fit border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <ScrollReveal>
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest market insights and property news
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
