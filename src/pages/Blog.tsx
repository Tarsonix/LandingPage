import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Blog posts data - emptied for production
const blogPosts = [];

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

        {/* No Results or Empty Blog */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            {searchTerm ? (
              <>
                <h3 className="text-2xl font-bold text-tarsonix-white/90 mb-2">No articles found</h3>
                <p className="text-tarsonix-white/70">Try adjusting your search terms</p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-tarsonix-white/90 mb-2">Coming Soon</h3>
                <p className="text-tarsonix-white/70">Our team is working on creating valuable content for you.</p>
              </>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog; 