import { faCode, faCog, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const serviceLists = [
  "Computer Vision",
  "Custom Model",
  "Voice Recognition System",
  "Voice/Audio AI",
  "Object Detection",
  "Embedded Real-time identification",
  "Face Recognition",
  "Optical Character Recognition",
  "Gesture & Activity Recognition",
  "Keyword Spotting",
  "People & Crowd Analytics",
  "Video Captioning",
  "MLOps",
  "Multi-Modal AI",
  "Generative AI",
];

export const breadcrumbs = [
  { title: "Home", link: "/" },
  { title: "ai", link: "/services/ai" },
];
export const techLists = {
  "Computer Vision": {
    names:
      "OpenCV, YOLO, TensorFlow, Pytorch, Custom Models, Transfer learning, Fine-tuned CNNs",
    icon: faCode,
  },
  "Voice / Audio AI": {
    names: "TTS, STT, LLAMA, Voice/Audio Recognition, Analysis",
    icon: faCog,
  },
  "Video Analysis": {
    names:
      "Real-time video Processing, surveillance systems, movement detection, Edge inference deployment via NVIDIA Jetson/Coral TPU",
    icon: faDatabase,
  },
};
const keyAspects = [
  "Machine Learning Solutions",
  "Natural Language Processing",
  "Computer Vision & Image Recognition",
  "Predictive Analytics",
  "Deep Learning Models",
  "Intelligent Data Processing",
  "AI Integration & Deployment",
  "Custom AI Development",
  "AI Consulting & Strategy",
];
export const serviceLeadingData = {
  header: "What is AI?",
  detail: `Artificial Intelligence is your intelligent partner that makes technology work smarter. It helps your business see patterns, make decisions, and automate tasks automatically. AI transforms complex information into clear insights that drive real business results.`,
  keyAspects: keyAspects,
};
export const aiServiceCardList = [
  {
    id: "AI-1",
    title: "Computer Vision Solutions",
    image: "Services/AI/computer-vision.webp",
    detail:
      "Cutting-edge computer vision applications for object detection, facial recognition, medical imaging, and quality control. Leverage deep learning to extract meaningful information from visual data.",
  },

  {
    id: "AI-3",
    title: "Voice Agent Solutions",
    image: "Services/AI/ml-development.webp",
    detail:
      "Our voice agents answer phones, understand speech naturally, and handle customer inquiries just like your best employee - but available 24/7. Built with advanced speech recognition and natural language processing, they provide seamless phone experiences that customers love.",
  },

  {
    id: "AI-4",
    title: "Video Analysis Solutions",
    image: "Services/AI/ai-video.webp",
    detail:
      "Advanced AI technology that automatically processes video content to extract meaningful insights. Analyzes visual data in real-time, identifying objects, tracking movements, recognizing faces, and detecting events without human intervention.",
  },
  {
    id: "AI-2",
    title: "AI Chatbot Solutions",
    image: "Services/AI/ai-chatbot.webp",
    detail:
      "Meet your new team member - an AI chatbot that works around the clock to engage customers, answer questions, and drive sales. Built with advanced conversational AI, our chatbots learn from every interaction to provide increasingly personalized experiences that keep customers coming back.",
  },
  {
    id: "AI-5",
    title: "TensorRT Optimization",
    image: "Services/AI/nvidiatensorrt.webp",
    detail:
      "Transform your AI models into lightning-fast applications. TensorRT optimization delivers up to 10x faster inference speeds while reducing memory and power consumption. We convert your existing models into highly optimized engines that run efficiently on NVIDIA hardware.",
  },
];

export const AIportfolioList = [
  {
    id: "AI-1",
    projectName: "Real-Time AI Face Swap Application",
    description:
      "Developed a real-time face swap application using deep learning and computer vision. The system captures live video streams, detects faces, and seamlessly swaps facial features between individuals with minimal latency and high visual fidelity.",
    technologiesUsed: [
      "Python",
      "PyTorch/TensorFlow",
      "OpenCV",
      "CUDA/GPU",
      "Flask/FastAPI",
    ],
    keyAchievements: [
      "Real-time Performance",
      "High Accuracy",
      "Optimized Architecture",
    ],
    image: "faceswap.webp",
    image2: "ai-port-2.webp",
    image3: "ai-port-3.webp",
  },
  {
    id: "AI-2",
    projectName: "Medical Image Analysis Platform",
    description:
      "Built a deep learning system for medical image analysis to assist radiologists in detecting anomalies in X-rays, MRIs, and CT scans with high accuracy.",
    technologiesUsed: ["PyTorch", "OpenCV", "Flask", "Docker", "AWS"],
    keyAchievements: [
      "Achieved perfect accuracy in anomal detection",
      "Reduced diagnosis time",
      "Processed over 10,000 medical images daily",
    ],
    image: "ai-port-4.webp",
    image2: "ai-port-5.webp",
    image3: "ai-port-6.webp",
  },
  {
    id: "AI-3",
    projectName: "Voice Agent Calling System",
    description:
      "Developed an AI-powered voice agent capable of making automated phone calls to interact with users through natural voice conversations. The system integrates speech recognition, natural language understanding, and text-to-speech technologies to handle tasks such as appointment reminders, customer support, and surveys.",
    technologiesUsed: [
      "Python",
      "Speech Recognition",
      "Text-to-Speech (TTS)",
      "Twilio",
      "API Integration",
    ],
    keyAchievements: [
      "Developed end-to-end voice agent",
      "Enabled real-time voice interaction",
      "Automated outbound calling process",
    ],
    image: "va1.webp",
    image2: "va2.webp",
    image3: "va3.webp",
  },
  {
    id: "AI-4",
    projectName: "Video Search and Summarization System",
    description:
      "Developed a system that enables users to search for specific content within videos and view automatic summaries of video content. The system utilizes video processing, natural language processing (NLP), and machine learning techniques to extract key information from video files and present it in a concise and searchable format.",
    technologiesUsed: [
      "Python",
      "CUDA",
      "TensorRT",
      "OpenCV",
      "Natural Language Processing (NLP)",
      "Video Processing",
      "Text Summarization Techniques",
    ],
    keyAchievements: [
      "Enabled keyword-based search",
      "Created video summarization",
      "Reduced review time",
    ],
    image: "vss0.webp",
    image2: "vss1.webp",
    image3: "vss2.webp",
  },
];
