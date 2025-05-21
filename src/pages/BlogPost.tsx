import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock, Share2, Copy, Check, Clipboard } from "lucide-react";
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

// This would normally come from a database or API
const blogPostsData: Record<string, BlogPostData> = {
  "ai-tool-roundup-2024": {
    id: 7,
    title: "AI Tool Roundup: The Most Promising New Automation Platforms of 2024",
    excerpt: "Our analysis of the latest AI-powered automation tools that are transforming business operations and setting new industry standards.",
    imageUrl: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=2070&auto=format&fit=crop",
    date: "May 28, 2024",
    readTime: "11 min read",
    slug: "ai-tool-roundup-2024",
    featured: true,
    content: `
      <h2>The Rapidly Evolving Landscape of AI Automation</h2>
      <p>As we move deeper into 2024, the field of AI-powered automation continues to evolve at a breathtaking pace. New tools and platforms are emerging that promise to fundamentally change how businesses operate, making processes more efficient, more intelligent, and more responsive to changing conditions.</p>
      
      <p>In this roundup, we'll explore the most promising new AI automation platforms of 2024, examining their unique features, strengths, and potential impact on various industries. From workflow automation to intelligent document processing, these tools represent the cutting edge of what's possible with today's AI technology.</p>
      
      <h2>1. Hyperautomation: The Rise of End-to-End Process Orchestration</h2>
      <p>One of the most significant trends we're seeing in 2024 is the move toward hyperautomation – the orchestration of multiple automation tools and AI capabilities to automate entire business processes from end to end.</p>
      
      <h3>Orchestry.ai</h3>
      <p>Leading this trend is Orchestry.ai, a new platform that combines process mining, task automation, and machine learning to create seamless automated workflows. What sets Orchestry apart is its ability to continuously analyze and optimize these workflows based on performance data.</p>
      
      <p>Key features include:</p>
      <ul>
        <li>Automatic process discovery that identifies automation opportunities</li>
        <li>Self-optimizing workflows that improve over time</li>
        <li>Integration with over 300 business applications</li>
        <li>Low-code/no-code interface for business users</li>
      </ul>
      
      <p>Orchestry.ai is particularly well-suited for complex environments where multiple systems need to work together seamlessly. Early adopters in financial services have reported efficiency gains of up to 70% for complex multi-step processes.</p>
      
      <h2>2. AI-Enhanced Decision Intelligence</h2>
      <p>Decision intelligence platforms augment human decision-making with AI, helping organizations make better, more data-driven decisions at scale.</p>
      
      <h3>DeciSense</h3>
      <p>DeciSense, launched in early 2024, combines predictive analytics, decision modeling, and natural language understanding to help businesses make complex decisions. What makes DeciSense particularly noteworthy is its ability to explain its recommendations in clear, understandable terms.</p>
      
      <p>The platform excels at:</p>
      <ul>
        <li>Modeling complex decision scenarios with multiple variables</li>
        <li>Providing probabilistic forecasts of different outcomes</li>
        <li>Generating detailed, natural language explanations of recommendations</li>
        <li>Learning from feedback to improve future recommendations</li>
      </ul>
      
      <div class="code-block-container">
        <pre><code>
// Example DeciSense decision model structure
const decisionModel = {
  objective: "Maximize customer retention",
  constraints: [
    { type: "budget", value: 500000 },
    { type: "resources", value: "limited_support_staff" }
  ],
  variables: [
    { name: "discount_level", type: "percentage", range: [0, 30] },
    { name: "support_priority", type: "categorical", options: ["standard", "priority", "vip"] },
    { name: "renewal_outreach", type: "days_before_expiration", range: [7, 90] }
  ],
  data_sources: [
    "customer_behavior_history",
    "market_conditions",
    "competitor_actions"
  ]
};
        </code></pre>
      </div>
      
      <h2>3. Intelligent Document Processing 2.0</h2>
      <p>Document automation has been around for years, but the latest generation of tools takes it to a new level with advanced AI capabilities.</p>
      
      <h3>DocMind</h3>
      <p>DocMind represents a significant leap forward in intelligent document processing. While earlier tools could extract structured data from forms, DocMind can understand and process complex, unstructured documents like contracts, reports, and correspondence.</p>
      
      <p>DocMind's capabilities include:</p>
      <ul>
        <li>Extracting key information from unstructured text with high accuracy</li>
        <li>Understanding contextual relationships between different parts of a document</li>
        <li>Generating summaries, reports, and analyses from document collections</li>
        <li>Learning specialized vocabulary and concepts for specific industries</li>
      </ul>
      
      <p>Organizations in legal, healthcare, and financial services are using DocMind to automate document-heavy workflows that previously required extensive human review.</p>
      
      <h2>4. n8n's Major Evolution</h2>
      <p>While not a new platform, n8n deserves mention for its significant evolution in 2024. With its 1.0 release, n8n has transformed from a promising workflow automation tool to a comprehensive business automation platform.</p>
      
      <p>The newest version includes:</p>
      <ul>
        <li>Enhanced AI capabilities for workflow suggestions and optimization</li>
        <li>Advanced error handling and recovery mechanisms</li>
        <li>Improved enterprise features for large-scale deployments</li>
        <li>A marketplace for sharing and discovering automation templates</li>
      </ul>
      
      <p>For more details on n8n's latest release, check out our dedicated article: <a href="/blog/n8n-one-point-zero-release">How n8n 1.0 Release Changes the Automation Landscape</a>.</p>
      
      <h2>5. The Rise of Domain-Specific Automation</h2>
      <p>Another notable trend is the emergence of highly specialized automation platforms designed for specific industries or functions.</p>
      
      <h3>ClinicFlow.ai</h3>
      <p>In healthcare, ClinicFlow.ai is revolutionizing patient care workflows with AI-powered automation designed specifically for medical practices. The platform automates appointment scheduling, patient communication, medical documentation, and billing processes.</p>
      
      <p>What makes ClinicFlow.ai stand out is its deep integration with healthcare systems and its compliance with healthcare regulations like HIPAA. The platform also incorporates medical knowledge to make intelligent decisions about patient care processes.</p>
      
      <h3>SupplyChainIQ</h3>
      <p>In manufacturing and logistics, SupplyChainIQ uses AI to optimize complex supply chain operations. The platform predicts disruptions, recommends inventory adjustments, and automates supplier communications.</p>
      
      <p>SupplyChainIQ's predictive capabilities are particularly impressive, with the ability to anticipate supply chain disruptions days or weeks in advance, giving businesses time to adapt.</p>
      
      <h2>Conclusion: The Future of Work is Automated and Intelligent</h2>
      <p>The automation platforms highlighted in this roundup represent a significant step forward in the journey toward more intelligent, efficient business operations. By combining advanced AI capabilities with deep domain expertise, these tools are enabling new levels of automation that were previously impossible.</p>
      
      <p>As these platforms continue to evolve and mature, we can expect to see even more sophisticated capabilities emerge. The future of work will increasingly involve collaboration between human employees and AI systems, with each focusing on what they do best.</p>
      
      <p>For businesses looking to stay competitive in this rapidly changing landscape, evaluating and adopting these new automation technologies should be a top priority. Those who successfully harness the power of these tools will be well-positioned to thrive in the increasingly automated economy of the future.</p>
    `
  },
  "n8n-one-point-zero-release": {
    id: 6,
    title: "How n8n 1.0 Release Changes the Automation Landscape",
    excerpt: "Exploring the major updates in n8n's latest version and how its new features are revolutionizing the way teams approach workflow automation.",
    imageUrl: "https://images.unsplash.com/photo-1607775090152-3fed28b9b27d?q=80&w=2070&auto=format&fit=crop",
    date: "April 17, 2024",
    readTime: "9 min read",
    slug: "n8n-one-point-zero-release",
    featured: false,
    content: `
      <h2>A New Era for n8n</h2>
      <p>After years of development and a growing community of users, n8n has finally reached its 1.0 milestone. This isn't just a symbolic version number - it represents a significant evolution in the platform's capabilities and position in the automation ecosystem.</p>
      
      <p>The 1.0 release builds on n8n's existing strengths - fair-code licensing, extensive integration options, and flexible deployment models - while introducing powerful new features that make it a formidable player in the enterprise automation space.</p>
      
      <h2>Key Features in the 1.0 Release</h2>
      
      <h3>1. AI-Powered Workflow Suggestions</h3>
      <p>Perhaps the most exciting addition to n8n is its new AI assistant, which can analyze your existing systems and suggest automation opportunities. The assistant can even generate entire workflow templates based on natural language descriptions of what you want to accomplish.</p>
      
      <div class="code-block-container">
        <pre><code>
// Example natural language input to the n8n AI assistant
"When a new high-priority ticket comes in through Zendesk, 
check if the customer is in our VIP segment in our CRM, 
and if so, send a Slack notification to the executive support team 
and create a follow-up task in Asana."
        </code></pre>
      </div>
      
      <p>From this description, the AI assistant can generate a complete workflow with the appropriate triggers, conditions, and actions - saving hours of manual setup time.</p>
      
      <h3>2. Enhanced Execution Engine</h3>
      <p>The n8n team has completely rewritten the workflow execution engine for better performance, reliability, and scalability. Some of the improvements include:</p>
      
      <ul>
        <li>Up to 4x faster execution for complex workflows</li>
        <li>Reduced memory consumption</li>
        <li>Better handling of large data payloads</li>
        <li>More robust error recovery mechanisms</li>
      </ul>
      
      <p>These improvements make n8n suitable for more demanding enterprise scenarios, including high-volume data processing and mission-critical workflows.</p>
      
      <h3>3. Advanced Debugging and Monitoring</h3>
      <p>The new debugging system in n8n 1.0 makes it much easier to identify and fix issues in complex workflows. Features include:</p>
      
      <ul>
        <li>Step-by-step workflow execution with detailed data inspection</li>
        <li>Conditional breakpoints</li>
        <li>Historical execution data with complete input/output records</li>
        <li>Performance profiling to identify bottlenecks</li>
      </ul>
      
      <p>Complementing the debugging tools is a new monitoring dashboard that provides real-time insights into workflow performance, error rates, and resource usage.</p>
      
      <h3>4. Enterprise-Grade Security and Compliance</h3>
      <p>n8n 1.0 introduces several security enhancements designed to meet enterprise requirements:</p>
      
      <ul>
        <li>Role-based access control with fine-grained permissions</li>
        <li>Audit logging for all system activities</li>
        <li>Secret rotation and management</li>
        <li>Support for enterprise identity providers (SAML, OIDC)</li>
        <li>Data encryption at rest and in transit</li>
      </ul>
      
      <p>These features make n8n a viable option for organizations with strict security and compliance requirements, including those in regulated industries.</p>
      
      <h3>5. Workflow Marketplace and Sharing</h3>
      <p>The new n8n Marketplace allows users to discover, share, and collaborate on workflows and custom nodes. This addresses one of the biggest challenges in automation - the need to "reinvent the wheel" for common integration scenarios.</p>
      
      <p>The Marketplace includes:</p>
      <ul>
        <li>Pre-built workflow templates for common business processes</li>
        <li>Custom nodes created by the community</li>
        <li>Integration packs for specific platforms and use cases</li>
        <li>Rating and review system to help identify the best resources</li>
      </ul>
      
      <h2>Real-World Impact: How Organizations Are Using n8n 1.0</h2>
      
      <h3>Case Study: E-commerce Operation Streamlining</h3>
      <p>Online retailer GreenCart implemented n8n 1.0 to automate their order processing and inventory management workflows. By connecting their e-commerce platform, warehouse management system, and accounting software, they were able to:</p>
      
      <ul>
        <li>Reduce order processing time by 78%</li>
        <li>Eliminate manual data entry errors</li>
        <li>Automatically trigger reordering when inventory levels drop</li>
        <li>Synchronize customer data across all systems</li>
      </ul>
      
      <p>The AI-powered workflow suggestions helped GreenCart identify several automation opportunities they hadn't considered, including an automated customer feedback collection process that has significantly improved their product development.</p>
      
      <h3>Case Study: Marketing Automation for a SaaS Company</h3>
      <p>Software company TechSolutions used n8n 1.0 to build a sophisticated marketing automation system that connects their CRM, email marketing platform, social media accounts, and analytics tools. The system:</p>
      
      <ul>
        <li>Segments customers based on behavior and engagement</li>
        <li>Personalizes content delivery across channels</li>
        <li>Triggers targeted campaigns based on specific user actions</li>
        <li>Provides real-time analytics on campaign performance</li>
      </ul>
      
      <p>The enhanced execution engine has allowed TechSolutions to handle much larger data volumes than before, enabling personalized marketing at scale for their growing customer base.</p>
      
      <h2>How n8n Compares to Other Automation Platforms</h2>
      
      <p>With the 1.0 release, n8n has positioned itself as a serious competitor to established automation platforms like Zapier, Microsoft Power Automate, and Make (formerly Integromat). Here's how it compares:</p>
      
      <h3>Advantages of n8n:</h3>
      <ul>
        <li>Self-hosting option for complete data control and privacy</li>
        <li>Fair-code licensing model (open core with some enterprise features)</li>
        <li>Deep customization capabilities with custom nodes and functions</li>
        <li>Affordable pricing, especially for high-volume automation needs</li>
        <li>AI-powered workflow suggestions</li>
      </ul>
      
      <h3>Areas for Improvement:</h3>
      <ul>
        <li>The number of pre-built integrations, while extensive, still lags behind Zapier</li>
        <li>Enterprise support options are still evolving</li>
        <li>The learning curve can be steeper for non-technical users</li>
      </ul>
      
      <h2>Getting Started with n8n 1.0</h2>
      
      <p>If you're interested in exploring n8n 1.0, here are some resources to help you get started:</p>
      
      <h3>Installation Options</h3>
      <div class="code-block-container">
        <pre><code>
# Using Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n:1.0.0

# Using npm
npm install n8n@1.0.0 -g
n8n start
        </code></pre>
      </div>
      
      <h3>Learning Resources</h3>
      <ul>
        <li>The <a href="https://docs.n8n.io" target="_blank">official n8n documentation</a> has been completely updated for the 1.0 release</li>
        <li>The new <a href="https://academy.n8n.io" target="_blank">n8n Academy</a> offers free courses for beginners and advanced users</li>
        <li>The <a href="https://community.n8n.io" target="_blank">n8n community forum</a> is active and supportive</li>
      </ul>
      
      <h2>Conclusion: Is n8n 1.0 Right for Your Organization?</h2>
      
      <p>With its 1.0 release, n8n has matured into a powerful, flexible automation platform suitable for organizations of all sizes. Its unique combination of open architecture, AI-powered features, and affordable pricing makes it an attractive option for many use cases.</p>
      
      <p>For organizations that value data control, customization, and cost-effectiveness, n8n is definitely worth considering. The self-hosting option is particularly appealing for those with strict data sovereignty requirements or complex integration needs.</p>
      
      <p>As automation becomes increasingly central to business operations, having a platform like n8n that can grow and adapt to changing requirements is a valuable asset. The 1.0 release represents not just a milestone for n8n itself, but a significant advancement in the democratization of workflow automation technology.</p>
    `
  },
  "automating-business-workflows-with-n8n": {
    id: 1,
    title: "Automating Business Workflows with n8n: A Practical Guide",
    excerpt: "Learn how to create efficient automation workflows with n8n to streamline your business processes and reduce manual tasks.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    date: "June 15, 2023",
    readTime: "8 min read",
    slug: "automating-business-workflows-with-n8n",
    featured: false,
    content: `
      <h2>Introduction to n8n</h2>
      <p>n8n is a powerful, fair-code licensed workflow automation tool that enables you to connect various applications and services together to automate repetitive tasks. Whether you're looking to streamline your marketing operations, enhance your customer support systems, or optimize your data management processes, n8n provides the flexibility and extensibility needed to create powerful automation workflows.</p>
      
      <p>Unlike many other automation platforms, n8n can be self-hosted, giving you full control over your data and workflows. It also offers a wide range of integrations with popular services and applications, making it a versatile choice for organizations of all sizes.</p>
      
      <h2>Getting Started with n8n</h2>
      <p>Setting up n8n is straightforward. You can either use the cloud version or self-host it using Docker, npm, or other installation methods. Once installed, you'll have access to a visual workflow editor where you can create, test, and deploy your automation workflows.</p>
      
      <div class="code-block-container">
        <pre><code>
# Install n8n globally using npm
npm install n8n -g

# Start n8n
n8n
        </code></pre>
      </div>
      
      <p>After starting n8n, you can access the editor through your web browser and begin creating workflows. The interface is intuitive, allowing you to drag and drop nodes, configure settings, and test your workflows in real-time.</p>
      
      <h2>Building Your First Workflow</h2>
      <p>Let's create a simple workflow that monitors a specific hashtag on Twitter, saves the tweets to a Google Sheet, and sends you a notification when new tweets are found.</p>
      
      <h3>Step 1: Set Up the Trigger</h3>
      <p>In n8n, triggers are the starting points of workflows. For this example, we'll use the Twitter trigger node to monitor tweets with a specific hashtag.</p>
      
      <ul>
        <li>Add a Twitter trigger node to your workflow</li>
        <li>Configure it to search for tweets containing your target hashtag (e.g., #AIAutomation)</li>
        <li>Set the polling interval to determine how often it checks for new tweets</li>
      </ul>
      
      <h3>Step 2: Process the Data</h3>
      <p>Next, we'll add a Function node to process the tweet data before saving it to a Google Sheet.</p>
      
      <div class="code-block-container">
        <pre><code>
// This function extracts relevant information from tweets
return items.map(item => {
  return {
    json: {
      tweetId: item.json.id_str,
      username: item.json.user.screen_name,
      text: item.json.full_text || item.json.text,
      timestamp: item.json.created_at,
      hashtags: item.json.entities.hashtags.map(tag => tag.text).join(', ')
    }
  };
});
        </code></pre>
      </div>
      
      <h3>Step 3: Save to Google Sheets</h3>
      <p>Now, we'll add a Google Sheets node to save the processed tweet data.</p>
      
      <ul>
        <li>Add a Google Sheets node to your workflow</li>
        <li>Connect your Google account</li>
        <li>Select or create a spreadsheet and worksheet</li>
        <li>Configure the node to append the processed tweet data to the sheet</li>
      </ul>
      
      <h3>Step 4: Send a Notification</h3>
      <p>Finally, we'll add a Slack node to send a notification when new tweets are found.</p>
      
      <ul>
        <li>Add a Slack node to your workflow</li>
        <li>Connect your Slack account</li>
        <li>Configure the node to send a message to your desired channel</li>
        <li>Customize the message to include relevant information about the new tweets</li>
      </ul>
      
      <h2>Advanced n8n Features</h2>
      
      <h3>Error Handling</h3>
      <p>n8n provides robust error handling capabilities to ensure your workflows continue to run smoothly even when issues arise. You can configure error workflows, set up retry mechanisms, and implement fallback scenarios to handle various error conditions.</p>
      
      <h3>Conditional Execution</h3>
      <p>With n8n's IF node, you can implement conditional logic in your workflows, allowing different paths to be taken based on specific conditions. This enables you to create more complex and intelligent automation scenarios.</p>
      
      <h3>Webhooks</h3>
      <p>n8n supports webhooks, allowing your workflows to be triggered by external events. This is particularly useful for real-time processing and integration with third-party services that support webhook notifications.</p>
      
      <h2>Use Cases for n8n</h2>
      
      <h3>Customer Support Automation</h3>
      <p>Automate your customer support processes by integrating n8n with your helpdesk system, CRM, and communication tools. You can create workflows that route tickets, send automated responses, and escalate issues based on predefined criteria.</p>
      
      <h3>Marketing Automation</h3>
      <p>Streamline your marketing operations by connecting your social media platforms, email marketing tools, and analytics platforms. Create workflows that schedule posts, track engagement, and generate reports automatically.</p>
      
      <h3>Data Synchronization</h3>
      <p>Keep your data consistent across multiple systems by setting up automated synchronization workflows. n8n can connect to various databases, APIs, and applications, ensuring your data is always up-to-date across your entire tech stack.</p>
      
      <h2>Conclusion</h2>
      <p>n8n offers a powerful and flexible platform for automating your business workflows. By leveraging its extensive integration capabilities and intuitive visual interface, you can create sophisticated automation scenarios that save time, reduce errors, and improve efficiency across your organization.</p>
      
      <p>Whether you're a small business looking to streamline your operations or a large enterprise seeking to optimize complex processes, n8n provides the tools and flexibility needed to achieve your automation goals. Start exploring n8n today and discover the possibilities for transforming your business through intelligent automation.</p>
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