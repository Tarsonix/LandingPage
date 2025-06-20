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
  "manus-cloud-browser-ai-automation-guide": {
    id: 3,
    title: "Manus Cloud Browser: The Future of AI-Powered Web Automation and Cross-Device Sync",
    excerpt: "Explore Manus Cloud Browser, the revolutionary AI automation platform that syncs login states across devices, enables seamless cross-session access, and transforms how we interact with web applications through intelligent automation.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/manus_cloud_browser.jpg",
    date: "June 21, 2025",
    readTime: "10 min read",
    slug: "manus-cloud-browser-ai-automation-guide",
    featured: true,
    content: `
      <div class="prose prose-invert prose-blue max-w-none">
        <h2>Introduction: The Dawn of Intelligent Web Automation</h2>
        <p>The digital landscape is experiencing a revolutionary transformation with the emergence of AI-powered automation tools that promise to fundamentally change how we interact with web applications. At the forefront of this revolution is <strong>Manus Cloud Browser</strong>, a groundbreaking platform that combines artificial intelligence with browser automation to create seamless, intelligent workflows that operate across devices and sessions.</p>
        
        <p>Launched as part of Manus's comprehensive AI automation suite, Cloud Browser represents a significant leap forward in web automation technology. Unlike traditional browser automation tools that require complex scripting and constant maintenance, Manus Cloud Browser leverages advanced AI to understand user intent, adapt to website changes, and execute tasks with human-like intelligence.</p>

        <h2>What is Manus Cloud Browser?</h2>
        <p>Manus Cloud Browser is an <strong>AI-powered browser automation platform</strong> that enables users to automate complex web tasks through natural language commands while maintaining persistent login states across multiple devices and sessions. The platform combines the power of cloud computing with advanced AI models to create a seamless automation experience that feels more like working with a digital assistant than operating traditional software.</p>

        <h3>Core Features and Capabilities:</h3>
        <ul>
          <li><strong>Cross-Session Login Persistence:</strong> Automatically saves and syncs login credentials across different browser sessions</li>
          <li><strong>Cross-Device Synchronization:</strong> Access your automation workflows from any device with the same account</li>
          <li><strong>AI-Powered Task Execution:</strong> Execute complex web tasks using natural language commands</li>
          <li><strong>Intelligent Error Handling:</strong> Automatically adapts to website changes and resolves common issues</li>
          <li><strong>Secure Credential Management:</strong> Enterprise-grade encryption for all stored login information</li>
          <li><strong>Real-time Collaboration:</strong> Share automation workflows with team members</li>
        </ul>

        <h2>Revolutionary Login State Management</h2>
        <p>One of Manus Cloud Browser's most innovative features is its sophisticated approach to login state management. Traditional browser automation tools struggle with authentication, often requiring users to manually log in for each session or maintain complex credential management systems.</p>

        <h3>How Login State Persistence Works:</h3>
        <ol>
          <li><strong>Initial Authentication:</strong> Users manually log in to websites during their first session</li>
          <li><strong>Encrypted Storage:</strong> Login information including cookies and local storage data is encrypted and securely stored</li>
          <li><strong>Automatic Restoration:</strong> Subsequent sessions automatically restore login states without user intervention</li>
          <li><strong>Cross-Device Sync:</strong> Login states are synchronized across all devices using the same Manus account</li>
          <li><strong>Intelligent Refresh:</strong> The system automatically handles session renewals and authentication token updates</li>
        </ol>

        <h3>Security and Privacy Measures:</h3>
        <p>Manus takes security seriously with multiple layers of protection:</p>
        <ul>
          <li><strong>End-to-End Encryption:</strong> All login data is encrypted locally before upload and encrypted again for cloud storage</li>
          <li><strong>Zero-Knowledge Architecture:</strong> Manus cannot access your login credentials in plaintext</li>
          <li><strong>Granular Control:</strong> Users can selectively clear login data for specific sites or all sites</li>
          <li><strong>Conflict Detection:</strong> Advanced mechanisms prevent login state confusion across multiple sessions</li>
          <li><strong>Audit Trails:</strong> Complete logging of all authentication activities</li>
        </ul>

        <h2>Cross-Device Synchronization: Work Anywhere, Anytime</h2>
        <p>The modern workforce demands flexibility, and Manus Cloud Browser delivers with seamless cross-device synchronization that enables users to start a task on one device and continue it on another without interruption.</p>

        <h3>Synchronization Capabilities:</h3>
        <ul>
          <li><strong>Universal Access:</strong> Access your automation workflows from desktop, laptop, tablet, or mobile devices</li>
          <li><strong>Real-time Sync:</strong> Changes made on one device are instantly available on all other devices</li>
          <li><strong>Session Continuity:</strong> Pause a task on one device and resume it on another seamlessly</li>
          <li><strong>Shared Workspaces:</strong> Collaborate with team members across different devices and locations</li>
          <li><strong>Offline Capability:</strong> Queue tasks offline and execute them when connectivity is restored</li>
        </ul>

        <h2>AI-Powered Automation: Beyond Traditional Scripting</h2>
        <p>What sets Manus Cloud Browser apart from traditional automation tools is its sophisticated AI engine that can understand context, adapt to changes, and execute complex workflows with minimal user intervention.</p>

        <h3>Advanced AI Capabilities:</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: rgba(59, 130, 246, 0.1);">
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Feature</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Traditional Automation</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Manus Cloud Browser</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Task Creation</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Complex scripting required</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Natural language commands</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Website Changes</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Manual script updates needed</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Automatic adaptation</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Error Handling</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Pre-programmed responses</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Intelligent problem-solving</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Learning</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Static rules</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Continuous improvement</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Maintenance</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">High maintenance overhead</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Self-maintaining</td>
            </tr>
          </tbody>
        </table>

        <h2>Real-World Use Cases and Applications</h2>
        <p>Manus Cloud Browser's versatility makes it applicable across numerous industries and use cases, from simple data entry to complex multi-step workflows.</p>

        <h3>Business Process Automation:</h3>
        <ul>
          <li><strong>Data Migration:</strong> Automatically transfer data between different web applications and platforms</li>
          <li><strong>Report Generation:</strong> Extract data from multiple sources and compile comprehensive reports</li>
          <li><strong>Customer Onboarding:</strong> Automate account creation and setup processes across multiple platforms</li>
          <li><strong>Inventory Management:</strong> Sync product information across e-commerce platforms and marketplaces</li>
          <li><strong>Financial Reconciliation:</strong> Automatically match transactions across different financial systems</li>
        </ul>

        <h3>Marketing and Sales Automation:</h3>
        <ul>
          <li><strong>Lead Generation:</strong> Automatically collect and qualify leads from various web sources</li>
          <li><strong>Social Media Management:</strong> Schedule and publish content across multiple social platforms</li>
          <li><strong>Competitive Analysis:</strong> Monitor competitor websites and pricing automatically</li>
          <li><strong>Email Campaign Management:</strong> Automate email list management and campaign execution</li>
          <li><strong>CRM Data Synchronization:</strong> Keep customer data consistent across all platforms</li>
        </ul>

        <h3>Research and Data Collection:</h3>
        <ul>
          <li><strong>Market Research:</strong> Gather market intelligence from multiple web sources</li>
          <li><strong>Academic Research:</strong> Collect and organize research data from various databases</li>
          <li><strong>Price Monitoring:</strong> Track product prices across different retailers</li>
          <li><strong>News Aggregation:</strong> Collect and categorize news articles from multiple sources</li>
          <li><strong>Regulatory Compliance:</strong> Monitor regulatory websites for updates and changes</li>
        </ul>

        <h2>Getting Started with Manus Cloud Browser</h2>
        <p>Setting up Manus Cloud Browser is designed to be straightforward, even for users without technical backgrounds. The platform emphasizes user-friendly interfaces and intuitive workflows.</p>

        <h3>Setup Process:</h3>
        <ol>
          <li><strong>Account Creation:</strong> Sign up for a Manus account at <a href="https://manus.im" target="_blank" rel="noopener noreferrer">manus.im</a></li>
          <li><strong>Browser Integration:</strong> Install the Manus browser extension or use the web-based interface</li>
          <li><strong>Initial Configuration:</strong> Configure your automation preferences and security settings</li>
          <li><strong>First Login:</strong> Manually log in to your target websites to establish initial authentication</li>
          <li><strong>Task Creation:</strong> Create your first automation task using natural language commands</li>
          <li><strong>Testing and Refinement:</strong> Test your automation and refine as needed</li>
        </ol>

        <h3>Best Practices for Implementation:</h3>
        <ul>
          <li><strong>Start Simple:</strong> Begin with basic tasks before moving to complex workflows</li>
          <li><strong>Test Thoroughly:</strong> Always test automations in a safe environment first</li>
          <li><strong>Monitor Performance:</strong> Regularly review automation performance and accuracy</li>
          <li><strong>Maintain Security:</strong> Regularly review and update security settings</li>
          <li><strong>Document Workflows:</strong> Keep detailed records of your automation processes</li>
          <li><strong>Train Your Team:</strong> Ensure all team members understand how to use the platform effectively</li>
        </ul>

        <h2>Safety and Security Considerations</h2>
        <p>As with any automation platform that handles sensitive data and login credentials, security is paramount. Manus has implemented comprehensive security measures to protect user data and ensure safe operation.</p>

        <h3>Security Features:</h3>
        <ul>
          <li><strong>Takeover Mode:</strong> Human control is required for sensitive operations like payment processing</li>
          <li><strong>User Confirmation:</strong> Critical actions require explicit user approval before execution</li>
          <li><strong>Data Isolation:</strong> Complete separation of user data with no cross-contamination</li>
          <li><strong>Audit Logging:</strong> Comprehensive logs of all automation activities</li>
          <li><strong>Access Controls:</strong> Granular permissions for team members and shared resources</li>
          <li><strong>Compliance Standards:</strong> Adherence to industry security and privacy standards</li>
        </ul>

        <h3>Privacy Protection:</h3>
        <ul>
          <li><strong>Zero Training Commitment:</strong> User data is never used to train AI models</li>
          <li><strong>Local Encryption:</strong> All sensitive data is encrypted before leaving the user's device</li>
          <li><strong>Minimal Data Collection:</strong> Only necessary data is collected and stored</li>
          <li><strong>User Control:</strong> Users maintain complete control over their data and can delete it at any time</li>
          <li><strong>Transparent Policies:</strong> Clear, understandable privacy policies and terms of service</li>
        </ul>

        <h2>Content Moderation and Responsible AI</h2>
        <p>Manus takes a proactive approach to ensuring its platform is used responsibly and ethically. The company has implemented comprehensive content moderation systems to prevent misuse.</p>

        <h3>Moderation Approach:</h3>
        <ul>
          <li><strong>Machine Detection:</strong> Automated systems identify potentially problematic usage patterns</li>
          <li><strong>Human Review:</strong> Expert teams review flagged activities and make appropriate decisions</li>
          <li><strong>Policy Enforcement:</strong> Clear guidelines and swift action against policy violations</li>
          <li><strong>User Education:</strong> Resources and training to help users understand responsible usage</li>
          <li><strong>Continuous Improvement:</strong> Regular updates to moderation systems based on emerging threats</li>
        </ul>

        <h2>Competitive Landscape and Market Position</h2>
        <p>Manus Cloud Browser operates in a competitive landscape that includes traditional automation tools, emerging AI platforms, and specialized browser automation services.</p>

        <h3>Key Differentiators:</h3>
        <ul>
          <li><strong>AI-First Approach:</strong> Built from the ground up with AI at its core</li>
          <li><strong>Cross-Device Sync:</strong> Unique capability for seamless multi-device workflows</li>
          <li><strong>Natural Language Interface:</strong> No coding required for most automation tasks</li>
          <li><strong>Persistent Login States:</strong> Revolutionary approach to authentication management</li>
          <li><strong>Enterprise Security:</strong> Bank-level security with user-friendly interfaces</li>
          <li><strong>Continuous Learning:</strong> AI that improves over time based on usage patterns</li>
        </ul>

        <h2>Future Roadmap and Innovations</h2>
        <p>Manus continues to innovate and expand the capabilities of Cloud Browser, with several exciting developments on the horizon.</p>

        <h3>Upcoming Features:</h3>
        <ul>
          <li><strong>Enhanced AI Models:</strong> Integration with next-generation language models for better understanding</li>
          <li><strong>Visual Automation:</strong> Computer vision capabilities for more sophisticated web interactions</li>
          <li><strong>API Integrations:</strong> Direct connections to popular business applications and services</li>
          <li><strong>Mobile Optimization:</strong> Enhanced mobile browser automation capabilities</li>
          <li><strong>Collaborative Workflows:</strong> Advanced team collaboration features and shared automation libraries</li>
          <li><strong>Custom AI Training:</strong> Ability to train custom AI models for specific business needs</li>
        </ul>

        <h2>Implementation Challenges and Solutions</h2>
        <p>While Manus Cloud Browser offers powerful capabilities, successful implementation requires careful planning and consideration of potential challenges.</p>

        <h3>Common Challenges:</h3>
        <ul>
          <li><strong>Change Management:</strong> Helping teams adapt to new automation workflows</li>
          <li><strong>Integration Complexity:</strong> Connecting with existing business systems and processes</li>
          <li><strong>Security Concerns:</strong> Addressing organizational security and compliance requirements</li>
          <li><strong>Performance Optimization:</strong> Ensuring automations run efficiently and reliably</li>
          <li><strong>User Training:</strong> Educating team members on effective platform usage</li>
        </ul>

        <h3>Success Strategies:</h3>
        <ul>
          <li><strong>Phased Implementation:</strong> Gradual rollout starting with pilot projects</li>
          <li><strong>Executive Sponsorship:</strong> Strong leadership support for automation initiatives</li>
          <li><strong>Cross-Functional Teams:</strong> Collaboration between IT, business, and security teams</li>
          <li><strong>Continuous Monitoring:</strong> Regular assessment of automation performance and ROI</li>
          <li><strong>Knowledge Sharing:</strong> Creating communities of practice within the organization</li>
        </ul>

        <h2>Conclusion: Embracing the Future of Web Automation</h2>
        <p>Manus Cloud Browser represents a significant leap forward in web automation technology, combining the power of artificial intelligence with the convenience of cloud computing to create a platform that is both powerful and accessible. Its innovative approach to login state management, cross-device synchronization, and AI-powered task execution positions it as a leader in the next generation of automation tools.</p>

        <p>As businesses continue to seek ways to improve efficiency and reduce manual work, platforms like Manus Cloud Browser will play an increasingly important role in digital transformation initiatives. The combination of advanced AI capabilities, robust security measures, and user-friendly interfaces makes it an attractive option for organizations looking to modernize their workflows.</p>

        <p>The future of web automation is intelligent, adaptive, and accessible. Manus Cloud Browser is not just keeping pace with this evolution—it's leading it. For businesses ready to embrace the next generation of automation technology, Manus Cloud Browser offers a compelling vision of what's possible when artificial intelligence meets web automation.</p>

        <h3>Key Takeaways:</h3>
        <ul>
          <li><strong>Revolutionary Technology:</strong> AI-powered automation that adapts and learns</li>
          <li><strong>Seamless Experience:</strong> Cross-device synchronization and persistent login states</li>
          <li><strong>Enterprise-Ready:</strong> Robust security and compliance features</li>
          <li><strong>User-Friendly:</strong> Natural language interface accessible to non-technical users</li>
          <li><strong>Future-Proof:</strong> Continuous innovation and feature development</li>
        </ul>

        <p><em>Ready to transform your web automation workflows? Explore Manus Cloud Browser today and discover how AI-powered automation can revolutionize your business processes.</em></p>

        <h2>Additional Resources</h2>
        <ul>
          <li><strong>Official Documentation:</strong> <a href="https://manus.im/help/cloud-browser" target="_blank" rel="noopener noreferrer">manus.im/help/cloud-browser</a></li>
          <li><strong>Getting Started Guide:</strong> Comprehensive tutorials and best practices</li>
          <li><strong>Community Forum:</strong> Connect with other users and share experiences</li>
          <li><strong>Support Center:</strong> Technical support and troubleshooting resources</li>
          <li><strong>Security Whitepaper:</strong> Detailed information about security measures and compliance</li>
        </ul>
      </div>
    `
  },
  "cursor-slack-integration-ai-development": {
    id: 2,
    title: "Cursor is Now in Slack: Revolutionizing AI-Powered Development Workflows",
    excerpt: "Discover how Cursor's groundbreaking Slack integration transforms team collaboration with AI-powered Background Agents. Learn setup, features and best practices for seamless development workflows.",
    imageUrl: "https://raw.githubusercontent.com/karthikr187/blog-images/refs/heads/main/slack_cursor-integration.jpg",
    date: "June 21, 2025",
    readTime: "8 min read",
    slug: "cursor-slack-integration-ai-development",
    featured: true,
    content: `
      <div class="prose prose-invert prose-blue max-w-none">
        <h2>Introduction: The Future of Development Collaboration</h2>
        <p>The development landscape has just witnessed a revolutionary leap forward with Cursor's groundbreaking Slack integration, launched in June 2025. This innovative feature brings AI-powered Background Agents directly into your team's communication hub, transforming how developers collaborate, debug and ship code.</p>
        
        <p>With over 20 million developers already using Cursor as their AI-first code editor, this Slack integration represents a pivotal moment in software development workflows. By seamlessly connecting AI assistance with team communication, Cursor is eliminating the context-switching that has long plagued development teams.</p>

        <h2>What is Cursor's Slack Integration?</h2>
        <p>Cursor's Slack integration allows teams to launch <strong>Background Agents</strong> directly from Slack by mentioning <code>@Cursor</code>. These AI agents can read thread context, understand ongoing discussions and autonomously create pull requests in GitHub, all without leaving your conversation.</p>

        <h3>Key Features of Cursor in Slack:</h3>
        <ul>
          <li><strong>Background Agents:</strong> AI agents that run remotely in secure environments</li>
          <li><strong>Thread Context Understanding:</strong> Agents read entire Slack threads for full context</li>
          <li><strong>GitHub Integration:</strong> Automatic PR creation and management</li>
          <li><strong>Real-time Updates:</strong> Status notifications directly in Slack channels</li>
          <li><strong>Multi-repository Support:</strong> Work across different codebases seamlessly</li>
          <li><strong>Team Collaboration:</strong> Multiple team members can interact with agents</li>
        </ul>

        <h2>How Background Agents Work</h2>
        <p>Background Agents represent a new paradigm in AI-assisted development. Unlike traditional AI tools that require constant interaction, these agents operate autonomously while keeping teams informed of their progress.</p>

        <h3>The Agent Workflow:</h3>
        <ol>
          <li><strong>Activation:</strong> Mention <code>@Cursor</code> in any Slack channel or thread</li>
          <li><strong>Context Analysis:</strong> Agent reads and understands the conversation history</li>
          <li><strong>Task Execution:</strong> Performs coding tasks in a secure, remote environment</li>
          <li><strong>Progress Updates:</strong> Provides real-time status updates in Slack</li>
          <li><strong>Completion:</strong> Delivers results with links to Cursor and GitHub</li>
        </ol>

        <h2>Setting Up Cursor in Slack</h2>
        <p>Getting started with Cursor's Slack integration is straightforward, requiring just a few configuration steps:</p>

        <h3>Prerequisites:</h3>
        <ul>
          <li>Active Cursor account with Background Agent access</li>
          <li>Slack workspace with admin permissions</li>
          <li>GitHub account connected to Cursor</li>
          <li>Usage-based pricing enabled (Background Agents use Max Mode)</li>
        </ul>

        <h3>Installation Steps:</h3>
        <ol>
          <li><strong>Navigate to Integrations:</strong> Go to <code>cursor.com/dashboard → Integrations → Slack</code></li>
          <li><strong>Install Slack App:</strong> Click "Connect" and authorize the Cursor Slack app</li>
          <li><strong>Configure GitHub:</strong> Ensure your GitHub account is connected</li>
          <li><strong>Set Default Repository:</strong> Choose your primary working repository</li>
          <li><strong>Configure Privacy Settings:</strong> Adjust data sharing preferences</li>
          <li><strong>Test Integration:</strong> Try mentioning <code>@Cursor</code> in a channel</li>
        </ol>

        <h2>Advanced Commands and Options</h2>
        <p>Cursor's Slack integration offers sophisticated command options for power users and teams with specific workflow requirements:</p>

        <h3>Essential Commands:</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: rgba(59, 130, 246, 0.1);">
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Command</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Description</th>
              <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; text-align: left;">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;"><code>@Cursor [prompt]</code></td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Start a Background Agent</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">@Cursor fix the login bug</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;"><code>@Cursor settings</code></td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Configure defaults</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">@Cursor settings</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;"><code>@Cursor list my agents</code></td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">Show running agents</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">@Cursor list my agents</td>
            </tr>
            <tr>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;"><code>@Cursor help</code></td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">View available commands</td>
              <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px;">@Cursor help</td>
            </tr>
          </tbody>
        </table>

        <h3>Advanced Options:</h3>
        <ul>
          <li><strong>Repository Selection:</strong> <code>@Cursor [repo=owner/repo] fix bug</code></li>
          <li><strong>Branch Specification:</strong> <code>@Cursor [branch=dev] implement feature</code></li>
          <li><strong>Model Selection:</strong> <code>@Cursor [model=o3] complex refactor</code></li>
          <li><strong>Auto-PR Control:</strong> <code>@Cursor [autopr=false] draft changes</code></li>
        </ul>

        <h2>Best Practices for Teams</h2>
        <p>To maximize the benefits of Cursor's Slack integration, teams should establish clear workflows and communication patterns:</p>

        <h3>Communication Guidelines:</h3>
        <ul>
          <li><strong>Context-Rich Discussions:</strong> Provide comprehensive background in threads before invoking agents</li>
          <li><strong>Clear Task Definition:</strong> Specify exact requirements and acceptance criteria</li>
          <li><strong>Repository Clarity:</strong> Always specify target repositories when working across multiple projects</li>
          <li><strong>Progress Monitoring:</strong> Regularly check agent status and provide feedback</li>
        </ul>

        <h3>Workflow Integration:</h3>
        <ul>
          <li><strong>Daily Standups:</strong> Include agent-generated work in team updates</li>
          <li><strong>Code Review Process:</strong> Establish review workflows for agent-created PRs</li>
          <li><strong>Issue Tracking:</strong> Link Slack discussions to GitHub issues and project boards</li>
          <li><strong>Documentation:</strong> Maintain records of successful agent interactions for future reference</li>
        </ul>

        <h2>Security and Privacy Considerations</h2>
        <p>With AI agents accessing both Slack conversations and code repositories, security and privacy are paramount concerns that Cursor addresses comprehensively:</p>

        <h3>Data Security:</h3>
        <ul>
          <li><strong>Secure Environments:</strong> Agents run in isolated, secure cloud environments</li>
          <li><strong>No Privacy Mode Support:</strong> Currently incompatible with Cursor's Legacy Privacy Mode</li>
          <li><strong>Configurable Data Sharing:</strong> Teams control what information agents can access</li>
          <li><strong>Audit Trails:</strong> Complete logging of agent actions and data access</li>
        </ul>

        <h3>Access Controls:</h3>
        <ul>
          <li><strong>Repository Permissions:</strong> Agents respect existing GitHub access controls</li>
          <li><strong>Channel Restrictions:</strong> Admins can control which channels have agent access</li>
          <li><strong>User Authentication:</strong> All actions tied to authenticated user accounts</li>
          <li><strong>Team Plans Only:</strong> Advanced features require Cursor Team subscriptions</li>
        </ul>

        <h2>Pricing and Cost Considerations</h2>
        <p>Understanding the cost implications of using Background Agents in Slack is crucial for teams planning their AI-assisted development workflows:</p>

        <h3>Usage-Based Pricing:</h3>
        <p>Background Agents operate using Cursor's Max Mode, which employs token-based pricing similar to API-based AI services. This means costs scale with usage complexity and frequency.</p>

        <h3>Cost Optimization Strategies:</h3>
        <ul>
          <li><strong>Targeted Usage:</strong> Use agents for complex tasks that justify the computational cost</li>
          <li><strong>Team Coordination:</strong> Avoid duplicate agent requests for the same issues</li>
          <li><strong>Monitoring Usage:</strong> Regular review of agent usage through Cursor's dashboard</li>
          <li><strong>Clear Instructions:</strong> Specific prompts reduce iteration cycles and costs</li>
        </ul>

        <h2>Real-World Use Cases and Benefits</h2>
        <p>The Cursor Slack integration shines in numerous development scenarios, offering tangible productivity improvements across different team structures and project types:</p>

        <h3>Bug Fixes and Hotfixes:</h3>
        <p>When critical issues arise, teams can immediately discuss the problem in Slack and have Cursor agents begin working on fixes while the discussion continues. This parallel processing dramatically reduces time-to-resolution.</p>

        <h3>Code Reviews and Refactoring:</h3>
        <p>During code review discussions, team members can ask Cursor agents to implement suggested improvements or refactor code sections, creating immediate, reviewable changes.</p>

        <h3>Feature Development:</h3>
        <p>Product discussions can seamlessly transition into development tasks, with agents understanding context from product requirements discussed in Slack threads.</p>

        <h3>Documentation and Learning:</h3>
        <p>Teams can ask agents to explain complex code sections, generate documentation, or provide implementation examples based on ongoing technical discussions.</p>

        <h2>Conclusion: The Future of AI-Powered Development</h2>
        <p>Cursor's Slack integration represents a paradigm shift in how development teams collaborate and leverage AI assistance. By bringing intelligent agents directly into team communication channels, Cursor eliminates the friction between discussion and implementation that has long characterized software development workflows.</p>

        <p>The benefits extend far beyond simple automation. Teams report improved collaboration, faster problem resolution and enhanced learning opportunities as developers work alongside AI agents that understand both code and context. This integration doesn't replace human creativity and decision-making, it amplifies it.</p>

        <p>As AI continues to evolve and integrate deeper into development workflows, early adopters of tools like Cursor's Slack integration position themselves at the forefront of a more efficient, collaborative and intelligent approach to software development.</p>

        <h3>Key Takeaways:</h3>
        <ul>
          <li><strong>Seamless Integration:</strong> AI assistance becomes part of natural team communication</li>
          <li><strong>Context Awareness:</strong> Agents understand both technical requirements and team dynamics</li>
          <li><strong>Autonomous Operation:</strong> Background agents work independently while keeping teams informed</li>
          <li><strong>Scalable Solution:</strong> Suitable for teams of all sizes, from startups to enterprises</li>
          <li><strong>Future-Ready:</strong> Positions teams for continued AI advancement in development workflows</li>
        </ul>

        <p>The question isn't whether AI will transform software development, it's whether your team will be ready to harness its full potential. Cursor's Slack integration offers a practical, powerful way to begin that transformation today.</p>

        <h2>Additional Resources</h2>
        <ul>
          <li><strong>Official Documentation:</strong> <a href="https://docs.cursor.com/slack" target="_blank" rel="noopener noreferrer">docs.cursor.com/slack</a></li>
          <li><strong>Setup Guide:</strong> <a href="https://cursor.com/dashboard" target="_blank" rel="noopener noreferrer">cursor.com/dashboard</a></li>
          <li><strong>Community Forum:</strong> Join the Cursor community for tips, tricks and best practices</li>
          <li><strong>Support:</strong> Contact Cursor support for enterprise implementation assistance</li>
        </ul>

        <p><em>Ready to revolutionize your development workflow? Start your free trial of Cursor's Slack integration today and experience the future of AI-powered team collaboration.</em></p>
      </div>`
  },
  "midjourney-video-v1-complete-guide": {
    id: 1,
    title: "Midjourney Video V1: The Complete Guide to AI Video Generation Revolution",
    excerpt: "Discover everything about Midjourney's groundbreaking V1 video model that's transforming AI video generation. Learn features, pricing, comparisons and how to get started with this game-changing tool.",
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
          <li><strong>Social Media:</strong> Create engaging posts for Instagram, TikTok and other platforms</li>
          <li><strong>Marketing:</strong> Develop eye-catching promotional content and advertisements</li>
          <li><strong>Presentations:</strong> Add dynamic elements to business presentations and pitches</li>
          <li><strong>Storytelling:</strong> Bring illustrations and concept art to life</li>
        </ul>

        <h3>Professional Applications:</h3>
        <ul>
          <li><strong>Concept Visualization:</strong> Animate architectural designs, product concepts and prototypes</li>
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

        <p>While the tool has limitations and faces legal challenges, its impact on the creative industry is undeniable. For content creators, marketers and artists looking to explore new forms of expression, Midjourney V1 offers an affordable, user-friendly entry point into AI video generation.</p>

        <p>As the technology continues to evolve toward more sophisticated world models and interactive experiences, early adopters of V1 will be well-positioned to leverage these advancing capabilities. The AI video revolution has begun and Midjourney V1 is leading the charge toward a more creative, accessible future.</p>

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