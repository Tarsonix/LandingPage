import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog posts data
const blogPosts = [
  {
    id: 7,
    title: "AI Tool Roundup: The Most Promising New Automation Platforms of 2024",
    excerpt: "Our analysis of the latest AI-powered automation tools that are transforming business operations and setting new industry standards.",
    imageUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=2070&auto=format&fit=crop",
    date: "May 28, 2024",
    readTime: "11 min read",
    slug: "ai-tool-roundup-2024",
    featured: true
  },
  {
    id: 6,
    title: "How n8n 1.0 Release Changes the Automation Landscape",
    excerpt: "Exploring the major updates in n8n's latest version and how its new features are revolutionizing the way teams approach workflow automation.",
    imageUrl: "https://images.unsplash.com/photo-1607775090152-3fed28b9b27d?q=80&w=2070&auto=format&fit=crop",
    date: "April 17, 2024",
    readTime: "9 min read",
    slug: "n8n-one-point-zero-release",
    featured: false
  },
  {
    id: 5,
    title: "Creating Automated Marketing Workflows with n8n",
    excerpt: "Discover how to automate your marketing processes using n8n integrations with popular marketing tools and platforms.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    date: "January 10, 2024",
    readTime: "7 min read",
    slug: "automated-marketing-workflows-n8n",
    featured: false
  },
  {
    id: 4,
    title: "Data Pipeline Automation: Connecting MongoDB and PostgreSQL with n8n",
    excerpt: "Learn how to build automated data pipelines between different database systems using n8n's powerful integration capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    date: "November 18, 2023",
    readTime: "9 min read",
    slug: "data-pipeline-automation-n8n",
    featured: false
  },
  {
    id: 3,
    title: "Building Customer Support Automation with n8n and Dialogflow",
    excerpt: "Step-by-step guide to creating an automated customer support system using n8n and Google's Dialogflow.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    date: "October 5, 2023",
    readTime: "12 min read",
    slug: "customer-support-automation-n8n-dialogflow",
    featured: false
  },
  {
    id: 2,
    title: "Integrating GPT-4 with n8n for Intelligent Process Automation",
    excerpt: "Discover how combining GPT-4's language capabilities with n8n's workflow automation can create truly intelligent business processes.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    date: "August 22, 2023",
    readTime: "10 min read",
    slug: "integrating-gpt4-with-n8n",
    featured: false
  },
  {
    id: 1,
    title: "Automating Business Workflows with n8n: A Practical Guide",
    excerpt: "Learn how to create efficient automation workflows with n8n to streamline your business processes and reduce manual tasks.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    date: "June 15, 2023",
    readTime: "8 min read",
    slug: "automating-business-workflows-with-n8n",
    featured: false
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-tarsonix-dark-blue to-tarsonix-dark">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4 md:px-8 container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center gradient-text">
          AI Innovation Hub
        </h1>
        <p className="text-xl text-center text-tarsonix-white/80 max-w-3xl mx-auto">
          Insights, guides, market trends and breaking news on AI tools to keep your business at the forefront of innovation.
        </p>
        
        {/* Search Bar */}
        <div className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-tarsonix-dark-blue/50 border border-tarsonix-blue/30 text-tarsonix-white/90 focus:outline-none focus:ring-2 focus:ring-tarsonix-blue/50"
          />
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-8 pb-20">
        {/* Featured Post */}
        {featuredPost && searchTerm === "" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-tarsonix-white/90 border-b border-tarsonix-blue/30 pb-2">
              Featured Article
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 glass p-6 rounded-xl border border-tarsonix-blue/20 hover:border-tarsonix-blue/40 transition-all">
              <div className="lg:col-span-2">
                <Link to={`/blog/${featuredPost.slug}`}>
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.title} 
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-tarsonix-white/60 mb-2 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="group">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text group-hover:opacity-80 transition-opacity">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-tarsonix-white/80 mb-4 text-lg">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-tarsonix-blue hover:bg-tarsonix-blue/80 text-tarsonix-white">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <Card key={post.id} className="bg-tarsonix-dark-blue/40 border-tarsonix-blue/20 hover:border-tarsonix-blue/40 transition-all overflow-hidden">
              <Link to={`/blog/${post.slug}`} className="aspect-video w-full overflow-hidden block">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-tarsonix-white/60 mb-2 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <Link to={`/blog/${post.slug}`} className="group">
                  <h3 className="text-xl font-bold mb-2 text-tarsonix-white/90 line-clamp-2 group-hover:text-tarsonix-blue/90 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-tarsonix-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" className="border-tarsonix-blue/40 text-tarsonix-white/90 hover:bg-tarsonix-blue/10">
                    Read More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-tarsonix-white/90 mb-2">No articles found</h3>
            <p className="text-tarsonix-white/70">Try adjusting your search terms</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog; 