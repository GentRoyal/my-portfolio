import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Zap, Shield, Network, Eye, Users, MessageSquare, Trophy, LineChart } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Production AI Backend Systems",
    description: "Architected and co-engineered FastAPI backends for multiple production AI products - owning API design, PostgreSQL schema, and end-to-end data flow. Built document-to-vector ETL pipelines handling ingestion, chunking, embedding, and PostgreSQL vector storage for scalable retrieval.",
    impact: "Delivered production-ready API infrastructure enabling multiple AI products across public policy and investor intelligence domains",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["FastAPI", "PostgreSQL", "Vector DB", "ETL Pipelines", "API Design", "Docker"],
    category: "MLOps"
  },
  {
    id: 2,
    title: "CNN Computer Vision Classifier",
    description: "Trained and shipped a CNN computer vision classifier for public-sector site analysis, achieving 90%+ precision and recall. Deployed as part of a live decision-support system. Augmented with LLM reasoning layers for waste type detection and legality assessment.",
    impact: "90%+ precision/recall deployed in production, transforming a classifier into a multi-modal decision engine",
    icon: <Eye className="w-6 h-6" />,
    technologies: ["CNN", "Computer Vision", "OpenAI", "LLM Integration", "Production ML", "Multi-modal AI"],
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Geospatial Data Pipelines at Scale",
    description: "Built production geospatial pipelines over SHP and large-scale TIFF files. Provisioned Azure Blob Storage, automated TIFF processing, and generated emergency facility, transport accessibility, and rainfall proximity metrics at scale.",
    impact: "Automated large-scale geospatial processing with Azure cloud integration, enabling infrastructure intelligence",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Azure Blob Storage", "SHP/TIFF Processing", "Python", "Geospatial Analysis", "Cloud Integration"],
    category: "Data Engineering"
  },
  {
    id: 4,
    title: "Production RAG Systems",
    description: "Built production RAG systems using OpenAI and Gemini - combining embedding retrieval, prompt engineering, and context-aware generation to deliver accurate, document-grounded AI responses for policy insights and intelligence.",
    impact: "Delivered context-aware, document-grounded AI responses with high accuracy across multiple domains",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["OpenAI", "Gemini API", "RAG", "LangChain", "Vector Embeddings", "Prompt Engineering"],
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Autonomous Investor Outreach Agent",
    description: "Engineered an autonomous outreach agent integrating a third-party contacts API to automate investor profile lookup, contact discovery, and route-to-reach recommendations for investment intelligence workflows.",
    impact: "Automated investor intelligence gathering, reducing manual research time and improving outreach efficiency",
    icon: <Users className="w-6 h-6" />,
    technologies: ["API Integration", "LLM Agents", "Python", "Automation", "Data Extraction"],
    category: "AI/ML"
  },
  {
    id: 6,
    title: "High-Accuracy Web Scraping System",
    description: "Delivered a high-accuracy web scraping system using Playwright, Selenium, and BeautifulSoup - extracting structured people and company profiles including images at 90%+ accuracy across heterogeneous sources.",
    impact: "90%+ extraction accuracy enabling automated intelligence gathering from diverse web sources",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Playwright", "Selenium", "BeautifulSoup", "Python", "Data Extraction"],
    category: "Data Engineering"
  },
  {
    id: 7,
    title: "Healthcare ML Systems for Research",
    description: "Contracted by 4+ PhD researchers to design and deliver healthcare ML systems - spanning model selection, feature engineering, training, and evaluation to research-grade standards. Engineered NLP pipelines for clinical text, extracting doctor comments and structuring unstructured medical notes.",
    impact: "Delivered research-grade ML systems enabling healthcare insights from clinical text and patient data",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["NLP", "Healthcare ML", "Feature Engineering", "Model Evaluation", "Clinical Text Processing"],
    category: "AI/ML"
  },
  {
    id: 8,
    title: "The Fineprint Project",
    description: "Built an LLM-powered Terms & Conditions analyzer that scans documents for suspicious clauses and explains them in plain language. Features podcast-style audio output using Groq LLM and Gemini TTS for accessible legal interpretation.",
    impact: "Automated legal document processing, making complex terms accessible through AI-powered interpretation and audio",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["Groq LLM", "Gemini TTS", "Ollama", "NLP", "Document Processing", "LangChain"],
    category: "AI/ML"
  },
  {
    id: 9,
    title: "YouTube Comment Intelligence Dashboard",
    description: "Developed a YouTube comment intelligence tool combining TF-IDF filtering, sentiment analysis, topic extraction, and GPT-4 categorization into an interactive web dashboard for content creators and researchers.",
    impact: "Enabled data-driven content insights through automated comment analysis and sentiment tracking",
    icon: <MessageSquare className="w-6 h-6" />,
    technologies: ["NLP", "GPT-4", "TF-IDF", "Sentiment Analysis", "Web Dashboard", "Topic Modeling"],
    category: "AI/ML"
  },
  {
    id: 10,
    title: "UEFA Champions League Predictor",
    description: "Built a UEFA Champions League progression predictor with custom feature engineering - opponent strength, goal efficiency, current form index - achieving 7/8 Top 8 and 14/16 Round of 16 correct predictions.",
    impact: "87.5% and 87.5% prediction accuracy through engineered sports analytics features",
    icon: <Trophy className="w-6 h-6" />,
    technologies: ["Feature Engineering", "Scikit-learn", "Sports Analytics", "Predictive Modeling"],
    category: "AI/ML"
  },
  {
    id: 11,
    title: "US Economic Recovery Index",
    description: "Engineered a US Economic Recovery Index post-COVID using GDP, unemployment, and trade flow data - with indicator weights derived via PCA rather than assumed. Extended the framework to compare recovery trajectories across African economies.",
    impact: "Data-driven economic indicator framework enabling cross-country recovery analysis",
    icon: <LineChart className="w-6 h-6" />,
    technologies: ["PCA", "Economic Analysis", "Time-Series", "Python", "Data Visualization"],
    category: "Data Science"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">Portfolio</span>
          </div>
          <h2 className="mb-4">End-to-End AI Solutions</h2>
          <p className="max-w-2xl text-muted-foreground">
            Production-ready systems that demonstrate the complete ML lifecycle—from data ingestion 
            and model training to deployment, monitoring, and continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-border hover:border-primary/30 transition-all duration-300 p-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3>{project.title}</h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <p className="text-sm">
                  <span className="text-primary mr-2">Impact:</span>
                  <span className="text-foreground">{project.impact}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-secondary text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}