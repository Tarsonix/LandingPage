import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp } from "lucide-react";

const TrendingUpIcon = TrendingUp;

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Support Automation",
      company: "Global Retail Co.",
      description: "Implemented conversational AI agents that handle 85% of customer inquiries, reducing response times from hours to seconds.",
      results: [
        { name: "Support Costs", before: 100, after: 25 },
        { name: "Response Time", before: 100, after: 10 },
        { name: "Customer Satisfaction", before: 60, after: 90 },
        { name: "Issue Resolution", before: 70, after: 95 },
      ],
      stats: [
        { label: "Cost Reduction", value: "75%" },
        { label: "Faster Resolution", value: "90%" },
        { label: "ROI", value: "320%" },
      ],
    },
    {
      id: 2,
      title: "Financial Document Processing",
      company: "Enterprise Finance Ltd.",
      description: "Automated document review and data extraction, processing thousands of financial documents daily with 99.2% accuracy.",
      results: [
        { name: "Processing Time", before: 100, after: 15 },
        { name: "Labor Costs", before: 100, after: 30 },
        { name: "Error Rate", before: 40, after: 5 },
        { name: "Staff Productivity", before: 60, after: 95 },
      ],
      stats: [
        { label: "Time Saved", value: "85%" },
        { label: "Accuracy", value: "99.2%" },
        { label: "ROI", value: "250%" },
      ],
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 grid-background"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-tarsonix-blue uppercase tracking-wider mb-3">Success Stories</h3>
          <h2 className="text-4xl font-bold gradient-text mb-4">AI That Drives ROI</h2>
          <p className="text-tarsonix-white/70 max-w-2xl mx-auto">
            Real-world examples of how our AI solutions create measurable business value.
          </p>
        </div>

        {/* Case study tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex glass p-1 rounded-full">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-tarsonix-blue to-tarsonix-violet text-white' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveTab(index)}
              >
                Case {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Active case study */}
        <div className="card-gradient rounded-xl p-8 transition-all">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold">{caseStudies[activeTab].title}</h3>
                <p className="text-tarsonix-white/70">{caseStudies[activeTab].company}</p>
              </div>
              <div className="card-gradient py-1 px-3 rounded-full text-sm text-tarsonix-blue border border-tarsonix-blue/30">
                Case Study
              </div>
            </div>
            <p className="text-tarsonix-white/80">{caseStudies[activeTab].description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart */}
            <div className="card-gradient rounded-xl p-6 h-80">
              <h4 className="text-center text-lg mb-4">Performance Improvements</h4>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart
                  data={caseStudies[activeTab].results}
                  margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="name" 
                    interval={0}
                    tick={props => {
                      const { x, y, payload } = props;
                      return (
                        <text x={x} y={y + 10} textAnchor="end" fill="#ddd" fontSize={13} transform={`rotate(-25,${x},${y})`}>
                          {payload.value.length > 16 ? payload.value.split(' ').map((word, i) => (
                            <tspan x={x} dy={i === 0 ? 0 : 14} key={i}>{word}</tspan>
                          )) : payload.value}
                        </text>
                      );
                    }}
                  />
                  <YAxis tick={{ fill: '#ddd' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F2C', border: '1px solid #38BDF8' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#38BDF8' }}
                  />
                  <Bar name="Before" dataKey="before" fill="#6E59A5" />
                  <Bar name="After" dataKey="after" fill="#38BDF8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div className="flex flex-col justify-center space-y-6">
              {caseStudies[activeTab].stats.map((stat, index) => (
                <div 
                  key={index}
                  className="card-gradient rounded-xl p-4 flex items-center"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-tarsonix-blue/20 mr-4">
                    <TrendingUpIcon className="w-6 h-6 text-tarsonix-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-tarsonix-white/70">{stat.label}</div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button at the end of Success Stories */}
        <div className="flex justify-center mt-12">
          <a
            href="https://calendar.app.google/NcKXZ1y7H479CbJk8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient hover:opacity-90 transition-all text-white px-10 py-6 text-xl rounded-lg glow-border shadow-lg hover:scale-105 inline-flex items-center justify-center"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
