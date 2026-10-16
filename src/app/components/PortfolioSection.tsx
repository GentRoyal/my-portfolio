import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Zap, Shield, Network, Eye, Users, MessageSquare, Trophy, LineChart, Map as MapIcon, ScanSearch, Video, Boxes } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  expertise: string;
  icon: React.ReactNode;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 12,
    title: "Geospatial Waste Detection Platform",
    description: "Contributed to a geospatial platform that turns aerial imagery into tracked waste sites. Worked on the inference pipeline (GeoTIFF tiling, waste classification, YOLO detection), on deriving geo-referenced sites from detections and matching them across survey runs, and on FastAPI services for priority scoring, risk forecasting, land-use layers and field notes, plus a read-only text-to-SQL analytics agent.",
    expertise: "Aerial image processing, object detection, geospatial geometry and area measurement, and API design over PostgreSQL",
    icon: <MapIcon className="w-6 h-6" />,
    technologies: ["YOLO", "Geospatial ML", "GeoTIFF/COG", "Shapely", "FastAPI", "PostgreSQL", "Redis", "Azure Blob Storage", "Text-to-SQL Agent"],
    category: "Geospatial AI"
  },
  {
    id: 13,
    title: "Vision LLM Detection Evaluation",
    description: "Evaluated GPT-5 and Gemini as waste detectors on aerial imagery with a paired harness: both models get identical prompts, images and few-shot examples across zero-shot, global and district-specific conditions, scored on mAP, box-match F1, waste-type F1, latency and cost. Also worked on a site-level annotation app where reviewers confirm, redraw or flag model detections.",
    expertise: "Designing fair model comparisons and detection metrics; in this test, zero-shot Gemini reached ~5× GPT-5's box-match F1 (0.26 vs 0.05) at a third of the latency",
    icon: <ScanSearch className="w-6 h-6" />,
    technologies: ["GPT-5", "Gemini", "Vision LLMs", "Object Detection Metrics", "React", "TypeScript", "PostgreSQL"],
    category: "AI/ML"
  },
  {
    id: 14,
    title: "Real-Time Video Analytics Pipelines",
    description: "Worked on the camera-to-inference data pipeline for on-premises video analytics prototypes in traffic monitoring, visitor analytics and campus classroom analytics: RTSP ingestion with supervised per-camera workers and reconnects, camera-health checks (stalled, frozen, blurred, blocked or moved views), frame resampling and zone masking, and detection, tracking and line counting with RF-DETR, YOLOX and BoT-SORT.",
    expertise: "Real-time video processing, multi-object tracking, and fault-tolerant streaming pipelines that report a broken camera as unavailable rather than as zero",
    icon: <Video className="w-6 h-6" />,
    technologies: ["Computer Vision", "RTSP", "MediaMTX", "PyAV", "RF-DETR", "YOLOX", "BoT-SORT", "Multi-Object Tracking"],
    category: "Computer Vision"
  },
  {
    id: 15,
    title: "Reusable Vision Analytics Template",
    description: "Worked on consolidating shared pipeline code from those projects into a template for new on-premises video analytics projects: a node supervisor, ingest with watchdog and heartbeat, a camera-health state machine, preprocessing, a pluggable model-service interface (YOLOX on ONNX Runtime), BoT-SORT tracking, versioned stage contracts, a browser Scene Zoner, and a live page that overlays detections on WebRTC video.",
    expertise: "System design for edge video analytics: process isolation, versioned data contracts, privacy by design (anonymous, metadata-only) and CPU/GPU model serving",
    icon: <Boxes className="w-6 h-6" />,
    technologies: ["ONNX Runtime", "YOLOX", "BoT-SORT", "WebRTC", "Server-Sent Events", "MediaMTX", "Python", "System Design"],
    category: "MLOps"
  },
  {
    id: 1,
    title: "AI Backend Engineering",
    description: "Worked on FastAPI backends for production AI products, covering API design, PostgreSQL schemas and end-to-end data flow, along with document-to-vector ETL pipelines for ingestion, chunking, embedding and vector storage.",
    expertise: "Backend and API design for AI products, relational and vector data modelling, and retrieval-ready ETL",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["FastAPI", "PostgreSQL", "Vector DB", "ETL Pipelines", "API Design", "Docker"],
    category: "MLOps"
  },
  {
    id: 2,
    title: "Computer Vision Site Classification",
    description: "Worked on a CNN image classifier for public-sector site analysis within a decision-support system, alongside LLM reasoning layers for waste-type detection and legality assessment.",
    expertise: "Training and evaluating image classifiers, and combining computer vision models with LLM reasoning for multi-modal decisions",
    icon: <Eye className="w-6 h-6" />,
    technologies: ["CNN", "Computer Vision", "OpenAI", "LLM Integration", "Production ML", "Multi-modal AI"],
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Geospatial Data Pipelines",
    description: "Worked on geospatial pipelines over SHP and large TIFF files, including Azure Blob Storage integration, automated TIFF processing, and metrics for emergency facility access, transport accessibility and rainfall proximity.",
    expertise: "Raster and vector geospatial processing, cloud storage workflows and spatial feature engineering",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Azure Blob Storage", "SHP/TIFF Processing", "Python", "Geospatial Analysis", "Cloud Integration"],
    category: "Data Engineering"
  },
  {
    id: 4,
    title: "RAG Systems",
    description: "Worked on RAG systems using OpenAI and Gemini, combining embedding retrieval, prompt engineering and context-aware generation for document-grounded answers in policy and intelligence settings.",
    expertise: "Retrieval design, prompt engineering and grounding LLM answers in source documents",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["OpenAI", "Gemini API", "RAG", "LangChain", "Vector Embeddings", "Prompt Engineering"],
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Investor Outreach Agent",
    description: "Worked on an LLM agent that uses a third-party contacts API to look up investor profiles, discover contacts and recommend routes to reach them.",
    expertise: "LLM agent design, tool and API integration, and workflow automation",
    icon: <Users className="w-6 h-6" />,
    technologies: ["API Integration", "LLM Agents", "Python", "Automation", "Data Extraction"],
    category: "AI/ML"
  },
  {
    id: 6,
    title: "Web Scraping & Profile Extraction",
    description: "Worked on a scraping system using Playwright, Selenium and BeautifulSoup to extract structured people and company profiles, including images, from varied sources at 90%+ accuracy.",
    expertise: "Browser automation, resilient extraction across heterogeneous sites, and structured data cleaning",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Playwright", "Selenium", "BeautifulSoup", "Python", "Data Extraction"],
    category: "Data Engineering"
  },
  {
    id: 7,
    title: "Healthcare ML Systems for Research",
    description: "Contracted by 4+ PhD researchers to design and deliver healthcare ML systems - spanning model selection, feature engineering, training, and evaluation to research-grade standards. Engineered NLP pipelines for clinical text, extracting doctor comments and structuring unstructured medical notes.",
    expertise: "Research-grade model selection, feature engineering and evaluation, and NLP for clinical text",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["NLP", "Healthcare ML", "Feature Engineering", "Model Evaluation", "Clinical Text Processing"],
    category: "AI/ML"
  },
  {
    id: 8,
    title: "The Fineprint Project",
    description: "Built an LLM-powered Terms & Conditions analyzer that scans documents for suspicious clauses and explains them in plain language. Features podcast-style audio output using Groq LLM and Gemini TTS for accessible legal interpretation.",
    expertise: "LLM document analysis, plain-language explanation and text-to-speech pipelines",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["Groq LLM", "Gemini TTS", "Ollama", "NLP", "Document Processing", "LangChain"],
    category: "AI/ML"
  },
  {
    id: 9,
    title: "YouTube Comment Intelligence Dashboard",
    description: "Developed a YouTube comment intelligence tool combining TF-IDF filtering, sentiment analysis, topic extraction, and GPT-4 categorization into an interactive web dashboard for content creators and researchers.",
    expertise: "NLP pipelines that combine classical methods (TF-IDF, sentiment) with GPT-4 classification",
    icon: <MessageSquare className="w-6 h-6" />,
    technologies: ["NLP", "GPT-4", "TF-IDF", "Sentiment Analysis", "Web Dashboard", "Topic Modeling"],
    category: "AI/ML"
  },
  {
    id: 10,
    title: "UEFA Champions League Predictor",
    description: "Built a UEFA Champions League progression predictor with custom feature engineering - opponent strength, goal efficiency, current form index - achieving 7/8 Top 8 and 14/16 Round of 16 correct predictions.",
    expertise: "Sports feature engineering and predictive modelling, with 7/8 Top 8 and 14/16 Round of 16 picks correct",
    icon: <Trophy className="w-6 h-6" />,
    technologies: ["Feature Engineering", "Scikit-learn", "Sports Analytics", "Predictive Modeling"],
    category: "AI/ML"
  },
  {
    id: 11,
    title: "US Economic Recovery Index",
    description: "Engineered a US Economic Recovery Index post-COVID using GDP, unemployment, and trade flow data - with indicator weights derived via PCA rather than assumed. Extended the framework to compare recovery trajectories across African economies.",
    expertise: "Composite index construction with PCA-derived weights and cross-country time-series comparison",
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
          <div className="mb-4">
            <span className="mono-label">~/Portfolio ↓</span>
          </div>
          <h2 className="mb-4">End-to-End AI Solutions</h2>
          <p className="max-w-2xl text-muted-foreground">
            Work across the complete ML lifecycle, from data ingestion and model training
            to deployment, monitoring, and continuous improvement.
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
                  <span className="text-primary mr-2">Expertise:</span>
                  <span className="text-foreground">{project.expertise}</span>
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