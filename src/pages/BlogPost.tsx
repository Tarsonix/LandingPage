import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock, Clipboard } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useToast } from "@/components/ui/use-toast";
import XIcon from "@/components/icons/XIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
  content?: string;
}

// Blog posts data - emptied for production
const blogPostsData: Record<string, BlogPostData> = {
  "midjourney-video-v1-complete-guide": {
    id: 1,
    title: "Midjourney Video V1: The Complete Guide to AI Video Generation Revolution",
    excerpt: "Discover everything about Midjourney's groundbreaking V1 video model that's transforming AI video generation. Learn features, pricing, comparisons, and how to get started with this game-changing tool.",
    imageUrl: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 19, 2025",
    readTime: "12 min read",
    slug: "midjourney-video-v1-complete-guide",
    featured: true,
    content: `
      <div class="prose prose-invert prose-blue max-w-none">
        <h2>Introduction: The AI Video Revolution Has Arrived</h2>
        <p>The artificial intelligence landscape has witnessed another groundbreaking moment with Midjourney's launch of its first AI video generation model, V1. Released in June 2025, this innovative tool marks a pivotal shift for the company from static image generation to dynamic multimedia content creation, positioning itself as a formidable competitor in the rapidly evolving AI video market.</p>
        
        <p>With nearly 20 million users and $300 million in revenue in 2024, Midjourney has established itself as the gold standard in AI image generation. Now, with the V1 Video Model, the company is extending its creative capabilities into the realm of video, offering users the ability to transform static images into captivating 5-second video clips.</p>

        <h2>What is Midjourney V1 Video Model?</h2>
        <p>Midjourney's V1 Video Model is an <strong>image-to-video AI generator</strong> that transforms static images into dynamic video content. Unlike traditional video creation tools that require extensive technical knowledge, V1 simplifies the process with a single-click animation feature.</p>

        <h3>Key Features of Midjourney V1:</h3>
        <ul>
          <li><strong>Image-to-Video Generation:</strong> Upload any image or use Midjourney-generated content to create videos</li>
          <li><strong>Automatic Animation:</strong> AI-powered motion synthesis that brings images to life</li>
          <li><strong>Custom Motion Prompts:</strong> Text-based control over how elements move in your video</li>
          <li><strong>Dual Motion Modes:</strong> Choose between low motion (ambient scenes) and high motion (dynamic action)</li>
          <li><strong>Extendable Duration:</strong> Start with 5-second clips, extend up to 20 seconds total</li>
          <li><strong>Multiple Variations:</strong> Generate four different video options per request</li>
        </ul>

        <h2>Pricing and Accessibility: AI Video for Everyone</h2>
        <p>One of Midjourney's most compelling advantages is its <strong>affordable pricing structure</strong>, making AI video generation accessible to creators of all levels:</p>

        <h3>Pricing Tiers:</h3>
        <ul>
          <li><strong>Basic Plan:</strong> $10/month - Entry-level access with limited video generations</li>
          <li><strong>Pro Plan:</strong> $60/month - Unlimited video generation in "Relax" mode</li>
          <li><strong>Mega Plan:</strong> $120/month - Maximum features and unlimited relax mode</li>
        </ul>

        <p><strong>Important Note:</strong> Video generation consumes approximately 8x more computational power than image creation, meaning your monthly credits will be used faster when creating videos compared to static images.</p>

        <h2>How Midjourney V1 Compares to Competitors</h2>
        <p>The AI video generation market is increasingly competitive, with several major players offering different approaches and pricing models:</p>

        <h3>Competitive Landscape:</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: rgba(59, 130, 246, 0.1);">
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Platform</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Starting Price</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;"><strong>Midjourney V1</strong></td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">$10/month</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Image-to-video, affordable, creative focus</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">OpenAI Sora</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">$20-200/month</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Text-to-video, high quality, expensive</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Google Veo 3</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">$249/month</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Enterprise-focused, premium features</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Runway Gen-4</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">$12-76/month</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Professional tools, editing features</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Luma Dream Machine</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">$9.99/month</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Audio generation, realistic motion</td>
            </tr>
          </tbody>
        </table>

        <h2>Step-by-Step Guide: How to Use Midjourney V1</h2>
        <p>Getting started with Midjourney's V1 Video Model is straightforward, whether you're a complete beginner or an experienced creator:</p>

        <h3>Method 1: Using the Web Interface</h3>
        <ol>
          <li><strong>Access the Platform:</strong> Visit midjourney.com/app and log in with your Discord account</li>
          <li><strong>Upload or Generate:</strong> Either upload an existing image or create one using Midjourney's image models</li>
          <li><strong>Select Animation:</strong> Click the "Animate" button below your chosen image</li>
          <li><strong>Choose Motion Settings:</strong>
            <ul>
              <li>Automatic: Let AI determine the best motion</li>
              <li>Manual: Write custom motion prompts</li>
              <li>Low Motion: Subtle, ambient movements</li>
              <li>High Motion: Dynamic, dramatic animations</li>
            </ul>
          </li>
          <li><strong>Generate and Extend:</strong> Create your initial 5-second video, then extend by 4-second increments up to 20 seconds total</li>
        </ol>

        <h3>Method 2: Discord Integration</h3>
        <p>For users familiar with Midjourney's traditional Discord workflow, V1 is also available through the Discord interface, maintaining the familiar command-based interaction that many users prefer.</p>

        <h2>Technical Capabilities and Limitations</h2>
        <p>Understanding what Midjourney V1 can and cannot do is crucial for setting realistic expectations:</p>

        <h3>Strengths:</h3>
        <ul>
          <li><strong>Visual Quality:</strong> Inherits Midjourney's renowned image quality and artistic style</li>
          <li><strong>Ease of Use:</strong> Intuitive interface requires no video editing experience</li>
          <li><strong>Creative Control:</strong> Balance between automation and user customization</li>
          <li><strong>Cost Effectiveness:</strong> Significantly more affordable than premium competitors</li>
          <li><strong>Artistic Focus:</strong> Optimized for creative and artistic content rather than photorealistic videos</li>
        </ul>

        <h3>Current Limitations:</h3>
        <ul>
          <li><strong>No Audio:</strong> Videos are generated without sound - audio must be added separately</li>
          <li><strong>Short Duration:</strong> Maximum 20-second videos with 5-second increments</li>
          <li><strong>Limited Editing:</strong> No built-in timeline editing or scene transitions</li>
          <li><strong>Resolution:</strong> Currently outputs at 480p, 24fps</li>
          <li><strong>Motion Artifacts:</strong> Occasional visual inconsistencies in high-motion scenes</li>
        </ul>

        <h2>Real-World Applications and Use Cases</h2>
        <p>Midjourney V1 opens up numerous creative possibilities across various industries and use cases:</p>

        <h3>Content Creation:</h3>
        <ul>
          <li><strong>Social Media:</strong> Create engaging posts for Instagram, TikTok, and other platforms</li>
          <li><strong>Marketing:</strong> Develop eye-catching promotional content and advertisements</li>
          <li><strong>Presentations:</strong> Add dynamic elements to business presentations and pitches</li>
          <li><strong>Storytelling:</strong> Bring illustrations and concept art to life</li>
        </ul>

        <h3>Professional Applications:</h3>
        <ul>
          <li><strong>Concept Visualization:</strong> Animate architectural designs, product concepts, and prototypes</li>
          <li><strong>Educational Content:</strong> Create engaging visual aids for teaching and training</li>
          <li><strong>Art and Design:</strong> Explore new forms of digital art and creative expression</li>
          <li><strong>Rapid Prototyping:</strong> Quickly visualize ideas and concepts in motion</li>
        </ul>

        <h2>The Legal Landscape: Copyright Concerns</h2>
        <p>Midjourney's V1 launch coincides with significant legal challenges that could impact the broader AI video generation industry:</p>

        <h3>Disney and Universal Lawsuit:</h3>
        <p>Just days before the V1 launch, Disney and Universal filed a comprehensive copyright infringement lawsuit against Midjourney, alleging:</p>
        <ul>
          <li>Unauthorized training on copyrighted characters (Marvel, Star Wars, The Simpsons, Shrek)</li>
          <li>Enabling users to generate derivative content without permission</li>
          <li>Creating a "bottomless pit of plagiarism"</li>
          <li>Failing to implement adequate content filtering systems</li>
        </ul>

        <h3>Implications for Users:</h3>
        <p>For businesses and content creators concerned about intellectual property risks, it's important to:</p>
        <ul>
          <li>Understand your organization's risk tolerance</li>
          <li>Consider platforms with built-in indemnity protections</li>
          <li>Implement internal content review processes</li>
          <li>Stay informed about evolving legal precedents</li>
        </ul>

        <h2>Future Roadmap: Toward World Models</h2>
        <p>Midjourney's long-term vision extends far beyond simple video generation. The company is working toward creating <strong>"world models"</strong> - sophisticated AI systems capable of:</p>

        <h3>Next-Generation Features:</h3>
        <ul>
          <li><strong>3D Spatial Navigation:</strong> Interactive, explorable environments</li>
          <li><strong>Real-time Rendering:</strong> Dynamic content generation as users interact</li>
          <li><strong>Immersive Experiences:</strong> VR and AR-compatible content creation</li>
          <li><strong>Interactive Simulations:</strong> User-controllable virtual worlds</li>
        </ul>

        <p>This ambitious roadmap positions Midjourney not just as a video generator, but as a pioneer in the next generation of AI-powered creative tools.</p>

        <h2>Best Practices for Midjourney V1</h2>
        <p>To maximize your results with Midjourney V1, consider these proven strategies:</p>

        <h3>Image Selection Tips:</h3>
        <ul>
          <li><strong>Clear Subjects:</strong> Images with distinct, well-defined elements animate better</li>
          <li><strong>Appropriate Composition:</strong> Consider how different elements might move in relation to each other</li>
          <li><strong>Lighting and Contrast:</strong> Well-lit images with good contrast produce superior results</li>
          <li><strong>Avoid Clutter:</strong> Simpler compositions often yield more coherent animations</li>
        </ul>

        <h3>Motion Prompt Optimization:</h3>
        <ul>
          <li><strong>Be Specific:</strong> Detailed motion descriptions produce more predictable results</li>
          <li><strong>Consider Physics:</strong> Realistic motion descriptions work better than impossible movements</li>
          <li><strong>Test Variations:</strong> Try different motion prompts for the same image to explore possibilities</li>
          <li><strong>Combine Elements:</strong> Describe how different parts of the image should move independently</li>
        </ul>

        <h2>Industry Impact and Market Position</h2>
        <p>Midjourney V1's launch represents a significant moment in the AI video generation market, with implications extending beyond the company itself:</p>

        <h3>Market Disruption:</h3>
        <ul>
          <li><strong>Democratization:</strong> Lower pricing makes AI video accessible to smaller creators and businesses</li>
          <li><strong>Creative Focus:</strong> Emphasis on artistic expression rather than photorealism</li>
          <li><strong>Simplified Workflow:</strong> Reduced technical barriers to entry</li>
          <li><strong>Integration Potential:</strong> Seamless connection with existing Midjourney image workflows</li>
        </ul>

        <h3>Competitive Response:</h3>
        <p>The launch of V1 is likely to accelerate innovation across the AI video space, with competitors potentially responding through:</p>
        <ul>
          <li>Price adjustments to remain competitive</li>
          <li>Enhanced feature development</li>
          <li>Improved user experience design</li>
          <li>Strategic partnerships and integrations</li>
        </ul>

        <h2>Getting Started: Your First Midjourney Video</h2>
        <p>Ready to create your first AI-generated video? Here's a practical walkthrough:</p>

        <h3>Beginner's First Project:</h3>
        <ol>
          <li><strong>Start Simple:</strong> Choose a clear, well-composed image with a single main subject</li>
          <li><strong>Use Automatic Mode:</strong> Let AI handle the motion for your first attempt</li>
          <li><strong>Select Low Motion:</strong> Begin with subtle animations to understand the tool's capabilities</li>
          <li><strong>Generate Multiple Versions:</strong> Review all four generated options before choosing your favorite</li>
          <li><strong>Experiment with Extensions:</strong> Try extending your video to see how the animation develops over time</li>
        </ol>

        <h3>Advanced Techniques:</h3>
        <p>Once comfortable with the basics, explore more sophisticated approaches:</p>
        <ul>
          <li><strong>Custom Motion Prompts:</strong> Write detailed descriptions of desired movements</li>
          <li><strong>High Motion Experiments:</strong> Test dynamic animations for action-oriented content</li>
          <li><strong>Series Creation:</strong> Develop multiple related videos for storytelling</li>
          <li><strong>Cross-Platform Integration:</strong> Combine with other tools for complete video production workflows</li>
        </ul>

        <h2>Conclusion: The Future of AI Video Creation</h2>
        <p>Midjourney's V1 Video Model represents more than just another AI tool - it's a glimpse into the future of creative content generation. By combining the company's renowned artistic capabilities with accessible video generation technology, V1 democratizes video creation in ways previously unimaginable.</p>

        <p>While the tool has limitations and faces legal challenges, its impact on the creative industry is undeniable. For content creators, marketers, and artists looking to explore new forms of expression, Midjourney V1 offers an affordable, user-friendly entry point into AI video generation.</p>

        <p>As the technology continues to evolve toward more sophisticated world models and interactive experiences, early adopters of V1 will be well-positioned to leverage these advancing capabilities. The AI video revolution has begun, and Midjourney V1 is leading the charge toward a more creative, accessible future.</p>

        <h3>Ready to Start Creating?</h3>
        <p>Visit <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer" style="color: #3b82f6;">midjourney.com</a> to begin your AI video generation journey. With plans starting at just $10/month, there's never been a better time to explore the possibilities of AI-powered video creation.</p>

        <p><em>Remember to use these technologies responsibly and stay informed about the evolving legal landscape surrounding AI-generated content.</em></p>
      </div>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;
  const [processedContent, setProcessedContent] = useState<string>("");
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Process content to replace code blocks with our CodeBlock component
    if (post?.content) {
      const processContent = () => {
        // Create a temporary div to parse the HTML content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content || '';
        
        // Replace code blocks with our custom marker
        const codeBlocks = tempDiv.querySelectorAll('.code-block-container');
        codeBlocks.forEach((codeBlock, index) => {
          const codeElement = codeBlock.querySelector('code');
          if (codeElement) {
            const code = codeElement.textContent || '';
            codeBlock.outerHTML = `<div class="code-block-placeholder" data-index="${index}" data-code="${encodeURIComponent(code)}"></div>`;
          }
        });
        
        setProcessedContent(tempDiv.innerHTML);
      };
      
      processContent();
    }
  }, [post]);

  // Function to render content with code blocks
  const renderContent = () => {
    if (!processedContent) return null;
    
    // Split by code block placeholders
    const parts = processedContent.split(/<div class="code-block-placeholder" data-index="\d+" data-code="([^"]+)"><\/div>/);
    
    // Reassemble with CodeBlock components
    const result = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // This is regular HTML content
        result.push(<div key={`content-${i}`} dangerouslySetInnerHTML={{ __html: parts[i] }} />);
      } else {
        // This is a code block
        const code = decodeURIComponent(parts[i]);
        result.push(<CodeBlock key={`code-${i}`} code={code} />);
      }
    }
    
    return result;
  };

  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        toast({
          title: "Link copied",
          description: "URL has been copied to clipboard",
        });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  const getTwitterShareUrl = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || 'Check out this article');
    return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  };
  
  const getLinkedInShareUrl = () => {
    const url = encodeURIComponent(window.location.href);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-tarsonix-dark-blue to-tarsonix-dark">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-tarsonix-white mb-4">Blog Post Not Found</h1>
          <p className="text-tarsonix-white/70 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button className="bg-tarsonix-blue hover:bg-tarsonix-blue/80 text-tarsonix-white">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tarsonix-dark-blue to-tarsonix-dark">
      <Navbar />
      
      <article className="container mx-auto px-4 md:px-8 pt-32 pb-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="text-tarsonix-white/80 hover:text-tarsonix-white">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-8">
            <div className="flex items-center gap-4 text-tarsonix-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
          
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl"
          />
        </header>
        
        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-blue max-w-none">
            {renderContent()}
          </div>
          
          {/* Social Share */}
          <div className="mt-16 pt-8 border-t border-tarsonix-blue/30">
            <h3 className="text-xl font-bold mb-4 text-tarsonix-white/90">Share this article</h3>
            <div className="flex gap-4">
              <a 
                href={getTwitterShareUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-tarsonix-blue/40 rounded-md text-tarsonix-white/90 hover:bg-tarsonix-blue/10 transition-colors"
                aria-label="Share on X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a 
                href={getLinkedInShareUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-tarsonix-blue/40 rounded-md text-tarsonix-white/90 hover:bg-tarsonix-blue/10 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <button 
                onClick={copyToClipboard}
                className="p-2 border border-tarsonix-blue/40 rounded-md text-tarsonix-white/90 hover:bg-tarsonix-blue/10 transition-colors"
                aria-label="Copy link to clipboard"
              >
                <Clipboard className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 