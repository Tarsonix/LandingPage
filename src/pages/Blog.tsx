import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Blog posts data - emptied for production
const blogPosts = [
  {
    id: 9,
    title: "Cursor Goes Mobile: Revolutionary AI Code Editor Now Available on Web and Mobile Devices",
    excerpt: "Cursor breaks new ground by bringing its powerful AI coding assistant to web browsers and mobile devices. Discover how this game-changing release transforms development workflows with background agents, cross-device collaboration and seamless handoff between desktop and mobile.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/cursor%20phone.jpg",
    date: "July 1, 2025",
    readTime: "10 min read",
    slug: "cursor-mobile-web-ai-code-editor-launch",
    featured: true
  },
  {
    id: 8,
    title: "ElevenLabs Launches Next.js Audio Starter Kit: Open-Source Template for AI Voice Applications",
    excerpt: "Discover ElevenLabs' revolutionary open-source Next.js Audio Starter Kit featuring Text to Speech, Speech to Text, Sound Effects and Conversational AI. Built with modern tech stack including shadcn/ui and Tailwind CSS v4.",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 30, 2025",
    readTime: "12 min read",
    slug: "elevenlabs-nextjs-audio-starter-kit-open-source",
    featured: false
  },
  {
    id: 7,
    title: "Google's Gemma 3n: Revolutionary Mobile-First AI with MatFormer Architecture",
    excerpt: "Discover Google's groundbreaking Gemma 3n neural network family featuring MatFormer architecture, Per-Layer Embeddings and multimodal capabilities optimized for mobile devices. Learn about the $150,000 Impact Challenge and how to get started.",
    imageUrl: "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemma3n_Wagtial_RD1-V02.original.jpg",
    date: "June 27, 2025",
    readTime: "15 min read",
    slug: "google-gemma-3n-mobile-first-ai-architecture",
    featured: false
  },
  {
    id: 6,
    title: "Google Launches Gemini CLI: Revolutionary Open-Source AI Agent for Developers",
    excerpt: "Google unveils Gemini CLI, a groundbreaking open-source AI agent that brings Gemini 2.5 Pro directly to your terminal. Discover features, installation and how it's transforming developer workflows with industry-leading usage limits.",
    imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 25, 2025",
    readTime: "12 min read",
    slug: "google-gemini-cli-open-source-ai-agent-announcement",
    featured: false
  },
  {
    id: 5,
    title: "ElevenLabs Launches Mobile App: AI Voice Generation Now Available on iOS & Android",
    excerpt: "Discover ElevenLabs' groundbreaking mobile app that brings studio-quality AI voice generation to your smartphone. Learn about features, pricing and how it's revolutionizing content creation on the go.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 24, 2025",
    readTime: "8 min read",
    slug: "elevenlabs-mobile-app-ios-android-launch",
    featured: false
  },
  {
    id: 4,
    title: "ElevenLabs Launches 11.ai: The Voice-First AI Assistant That Actually Takes Action",
    excerpt: "Discover ElevenLabs' revolutionary 11.ai assistant that combines voice-first interaction with MCP integration to automate real workflows. Learn features, setup and how it transforms productivity.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/11ai_voice_assistant.jpg",
    date: "June 24, 2025",
    readTime: "9 min read",
    slug: "elevenlabs-11ai-voice-assistant-launch",
    featured: false
  },
  {
    id: 3,
    title: "Manus Cloud Browser: The Future of AI-Powered Web Automation and Cross-Device Sync",
    excerpt: "Explore Manus Cloud Browser, the revolutionary AI automation platform that syncs login states across devices, enables seamless cross-session access and transforms how we interact with web applications through intelligent automation.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/manus_cloud_browser.jpg",
    date: "June 21, 2025",
    readTime: "10 min read",
    slug: "manus-cloud-browser-ai-automation-guide",
    featured: false
  },
  {
    id: 2,
    title: "Cursor is Now in Slack: Revolutionizing AI-Powered Development Workflows",
    excerpt: "Discover how Cursor's groundbreaking Slack integration transforms team collaboration with AI-powered Background Agents. Learn setup, features and best practices for seamless development workflows.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/slack_cursor-integration.jpg",
    date: "June 21, 2025",
    readTime: "8 min read",
    slug: "cursor-slack-integration-ai-development",
    featured: false
  },
  {
    id: 1,
    title: "Midjourney Video V1: The Complete Guide to AI Video Generation Revolution",
    excerpt: "Discover everything about Midjourney's groundbreaking V1 video model that's transforming AI video generation. Learn features, pricing, comparisons and how to get started with this game-changing tool.",
    imageUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 19, 2025",
    readTime: "12 min read",
    slug: "midjourney-video-v1-complete-guide",
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