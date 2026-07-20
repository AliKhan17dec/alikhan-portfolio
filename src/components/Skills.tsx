"use client";

import { useState, useEffect } from "react";

// --- Types ---
type Language = "typescript" | "javascript" | "python" | "dockerfile" | "markdown" | "prisma" | "text";

interface Skill {
  id: string;
  title: string;
  description: string;
  filename: string;
  language: Language;
  code: string;
}

// --- Data: Skills mapped to realistic file syntax ---
const skillsData: Skill[] = [
  {
    id: "nextjs",
    title: "Next.JS",
    description: "SSG, SSR, ISR, API Routes, Middleware, dynamic routing, image optimization, TypeScript, and CSS/SCSS with performance and SEO best practices.",
    filename: "nextjs.tsx",
    language: "typescript",
    code: `// nextjs.tsx
import { GetStaticProps, GetServerSideProps } from 'next';

export const config = {
  rendering: ["SSG", "SSR", "ISR"],
  features: ["API Routes", "Middleware", "Dynamic Routing"],
  optimization: { 
    images: true, 
    seo: "best-practices" 
  },
  styling: ["CSS", "SCSS", "Tailwind"]
};

export default function NextApp() {
  return <main>Optimized & Scalable</main>;
}`
  },
  {
    id: "node",
    title: "Node.JS",
    description: "Skilled in building scalable backend applications using Express.js, RESTful APIs, middleware, authentication, database integration, async programming, and environment configuration.",
    filename: "node.js",
    language: "javascript",
    code: `// express.js
const express = require('express');
const app = express();

// Scalable backend architecture
app.use(express.json());
app.use(authMiddleware);

app.get('/api/data', async (req, res) => {
  const data = await db.integration();
  res.json({ status: "optimized", async: true });
});

module.exports = app;`
  },
  {
    id: "nest",
    title: "Nest.JS",
    description: "Experienced in building scalable server-side applications using modular architecture, controllers, services, REST APIs, middleware, authentication, and database integration with TypeScript.",
    filename: "nest.ts",
    language: "typescript",
    code: `// app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  @UseGuards(AuthGuard)
  getStatus() {
    return { 
      architecture: "modular",
      integration: "seamless" 
    };
  }
}`
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Proficient in writing strongly-typed, maintainable code with interfaces, types, classes, generics, and seamless integration with JavaScript frameworks like React and Node.js.",
    filename: "typescript.ts",
    language: "typescript",
    code: `// types.ts
interface Developer<T> {
  name: string;
  skills: T[];
  codeQuality: "strongly-typed" | "maintainable";
}

type Framework = "React" | "Node.js" | "Next.js";

const profile: Developer<Framework> = {
  name: "Ali Khan",
  skills: ["React", "Node.js"],
  codeQuality: "strongly-typed"
};`
  },
  {
    id: "python",
    title: "Python",
    description: "Proficient in writing clean and efficient code with OOP, data structures, file handling, API integration, and scripting for automation and backend development.",
    filename: "python.py",
    language: "python",
    code: `# script.py
class BackendDeveloper:
    def __init__(self):
        self.skills = [
            "OOP", 
            "Data Structures", 
            "API Integration"
        ]
    
    def automate_task(self, file_path: str) -> dict:
        # Clean and efficient scripting
        return {"status": "optimized", "automation": True}`
  },
  {
    id: "fastapi",
    title: "FastAPI",
    description: "Skilled in building high-performance REST APIs with async support, Pydantic validation, dependency injection, authentication, and database integration using Python.",
    filename: "fastapi.py",
    language: "python",
    code: `# main.py
from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI(title="High-Performance API")

class User(BaseModel):
    username: str
    is_active: bool

@app.get("/api/health")
async def health_check():
    return {"status": "async", "validation": "pydantic"}`
  },
  {
    id: "openai",
    title: "OpenAI Agents SDK",
    description: "Experienced in building AI agents with tool integration, function calling, structured outputs, context management, and deploying agentic workflows in applications.",
    filename: "agentsdk.ts",
    language: "typescript",
    code: `// agent.ts
import { OpenAIAgent } from 'ai-sdk';

const agent = new OpenAIAgent({
  model: "gpt-4-turbo",
  tools: ["function_calling", "structured_outputs"],
  contextManagement: true,
  workflow: "agentic",
  deployment: "production-ready"
});

export default agent;`
  },
  {
    id: "docker",
    title: "Docker",
    description: "Experienced in containerizing applications, creating Dockerfiles, managing images and containers, networking, volumes, and deploying scalable environments for development and production.",
    filename: "Dockerfile",
    language: "dockerfile",
    code: `# Dockerfile
FROM node:18-alpine

# Containerizing & scalable environments
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Networking & volumes configured externally
EXPOSE 3000
CMD ["npm", "start"]`
  },
  {
    id: "linux",
    title: "Linux Administration",
    description: "Apache2 & Nginx server configuration, SSH VMs, Networking, User management, File Management, Package Management, Process management, etc.",
    filename: "linux_admin.md",
    language: "markdown",
    code: `# Linux Administration

## Core Competencies
- **Web Servers**: Apache2 & Nginx Configuration
- **Remote Access**: SSH, VM Management
- **System Core**: 
  - Networking & User Management
  - File & Package Management
  - Process Management & Monitoring`
  },
  {
    id: "cloud",
    title: "Cloud Platform",
    description: "Demonstrated experience deploying and managing applications across cloud platforms like AWS, GCP, Azure.",
    filename: "cloud_platform.md",
    language: "markdown",
    code: `# Cloud Infrastructure

## Providers
- **AWS**: EC2, S3, Lambda, RDS, VPC, IAM
- **GCP**: Compute Engine, Cloud Run
- **Azure**: App Services, Blob Storage

## Capabilities
- Automated Deployment
- Horizontal Scaling
- Production Environment Management`
  },
  {
    id: "git",
    title: "Git & GitHub",
    description: "Skilled in version control, branching, merging, pull requests, collaboration workflows, and repository management for team-based and solo projects.",
    filename: ".gitignore",
    language: "text",
    code: `# Git & GitHub Workflow
# - Version control, branching, merging
# - Pull requests, collaboration workflows
# - Repository management

node_modules/
.env
.DS_Store
*.log

# Team collaboration ready`
  },
  {
    id: "reactnative",
    title: "React Native",
    description: "React Native expertise including navigation, state management, API integration, push notifications, performance optimization, TypeScript, and responsive UI development.",
    filename: "app.tsx",
    language: "typescript",
    code: `// app.tsx
import { View, Text } from 'react-native';

export default function MobileApp() {
  // Navigation, State Management, Push Notifications
  // Performance optimization, Responsive UI
  return (
    <View className="flex-1">
      <Text>Cross-Platform Mobile</Text>
    </View>
  );
}`
  },
  {
    id: "database",
    title: "Database",
    description: "Experience working with both relational and NoSQL databases including PostgreSQL and MongoDB, with proficiency in SQL and ORMs such as Prisma and TypeORM.",
    filename: "schema.prisma",
    language: "prisma",
    code: `// schema.prisma
datasource db {
  provider = "postgresql" // Also MongoDB support
}

// Proficient in SQL, Prisma, TypeORM
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  posts Post[]
}`
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    description: "Utility Classes, Responsive Design, Customization, Variants, Plugins, Grid, Flexbox, Spacing, Colors, Shadows, Borders, Animations, Containers, Breakpoints, Interactivity, etc.",
    filename: "tailwind.config.ts",
    language: "typescript",
    code: `// tailwind.config.ts
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Utility Classes, Responsive Design, Grid, Flexbox
      // Spacing, Colors, Shadows, Animations, Breakpoints
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      }
    }
  }
};`
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    description: "Grid System, Components, Utilities, Responsive Design, Breakpoints, Flexbox, Forms, Buttons, Modals, Navbar, Cards, Alerts, Tables, Pagination, Carousel, Spacing, Colors, Typography, Icons, Containers, Shadows, etc.",
    filename: "bootstrap.tsx",
    language: "typescript",
    code: `// bootstrap.tsx
// Grid System, Components, Utilities, Responsive Design
// Flexbox, Forms, Buttons, Modals, Navbar, Cards

export const BootstrapUI = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">Responsive Layout</div>
    </div>
  </div>
);`
  }
];

// --- Typewriter Hook ---
function useTypewriter(text: string, speed: number = 15, startDelay: number = 200) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
}

// --- Lightweight Syntax Highlighter ---
const highlightCode = (code: string, language: Language, isTyping: boolean) => {
  const lines = code.split('\n');
  return lines.map((line, i) => {
    let html = line
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/(\/\/.*$|#.*$)/gm, '<span class="text-gray-500 italic">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-green-400">$1</span>')
      .replace(/\b(import|export|from|const|let|var|function|return|class|def|if|else|true|false|new|this|async|await)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')
      .replace(/\b(string|number|boolean|any|void|interface|type|model|datasource|provider)\b/g, '<span class="text-yellow-300">$1</span>')
      .replace(/\b([a-zA-Z0-9_]+)(?=\()/g, '<span class="text-blue-400">$1</span>');

    const isLastLine = i === lines.length - 1;
    const cursor = isLastLine && isTyping ? '<span class="inline-block w-2 h-4 bg-[#077b32] animate-pulse align-middle ml-0.5"></span>' : '';

    return (
      <div key={i} className="table-row">
        <span className="table-cell text-right pr-4 text-gray-600 select-none w-8 text-xs leading-6">
          {i + 1}
        </span>
        <span 
          className="table-cell text-xs leading-6 whitespace-pre"
          dangerouslySetInnerHTML={{ __html: (html || ' ') + cursor }} 
        />
      </div>
    );
  });
};

// --- Icons ---
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// --- Brand Skill Icons ---
const SkillIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    // Next.js — official glyph (simple-icons: nextdotjs)
    nextjs: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    ),
 
    // Node.js — official hexagon glyph (simple-icons: nodedotjs)
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#5FA04E]">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    ),
 
    // NestJS — official glyph (simple-icons: nestjs)
    nest: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E0234E]">
        <path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z" />
      </svg>
    ),
 
    // TypeScript — official glyph (simple-icons: typescript)
    typescript: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3178C6]">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
 
    // Python — official glyph (simple-icons: python)
    python: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3776AB]">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
 
    // FastAPI — official glyph (simple-icons: fastapi)
    fastapi: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#009688]">
        <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
      </svg>
    ),
 
    // OpenAI / LLM — generic neural-network glyph.
    // (The real OpenAI mark is a registered logo; simple-icons itself no longer
    // ships it, so this uses a generic AI/network icon instead of imitating it.)
    openai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 text-gray-200">
        <circle cx="6" cy="6" r="2.1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="6" r="2.1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none" />
        <circle cx="6" cy="18" r="2.1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="18" r="2.1" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" d="M7.6 7.2l3 3.4M16.4 7.2l-3 3.4M7.6 16.8l3-3.4M16.4 16.8l-3-3.4" />
      </svg>
    ),
 
    // Docker — official whale/crates glyph (simple-icons: docker)
    docker: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2496ED]">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
      </svg>
    ),
 
    // Linux — official Tux glyph (simple-icons: linux)
    linux: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FCC624]">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
      </svg>
    ),
 
    // Generic cloud icon (no specific vendor)
    cloud: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-300">
        <path d="M6.5 19a5.5 5.5 0 01-.6-10.97A6.5 6.5 0 0118.9 9.02 4.75 4.75 0 0118 19H6.5z" />
      </svg>
    ),
 
    // Git — official branch glyph (simple-icons: git)
    git: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F03C2E]">
        <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z" />
      </svg>
    ),
 
    // React (Native uses the same atom mark) — official glyph (simple-icons: react)
    reactnative: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#61DAFB]">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
 
    // Generic database icon (no specific vendor)
    database: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
        <path d="M12 2C7.03 2 3 3.34 3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5c0-1.66-4.03-3-9-3zm7 17c0 .3-2.1 1.5-7 1.5S5 19.3 5 19v-2.9c1.64.9 4.24 1.4 7 1.4s5.36-.5 7-1.4V19zm0-5.5c0 .3-2.1 1.5-7 1.5s-7-1.2-7-1.5v-2.9c1.64.9 4.24 1.4 7 1.4s5.36-.5 7-1.4v2.9zM12 9c-4.9 0-7-1.2-7-1.5S7.1 6 12 6s7 1.2 7 1.5S16.9 9 12 9z" />
      </svg>
    ),
 
    // Tailwind CSS — official glyph (simple-icons: tailwindcss)
    tailwind: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#06B6D4]">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
 
    // Bootstrap — official glyph (simple-icons: bootstrap)
    bootstrap: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#7952B3]">
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
      </svg>
    ),
  };
 
  return icons[id] || (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-400">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
};

// --- Main Component ---
export default function SkillCodeEditor() {
  const [activeSkillId, setActiveSkillId] = useState<string>(skillsData[0].id);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(skillsData[0].id);

  const activeSkill = skillsData.find(s => s.id === activeSkillId) || skillsData[0];
  const { displayedText, isTyping } = useTypewriter(activeSkill.code, 15, 200);

  const handleAccordionClick = (id: string) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
      setActiveSkillId(id);
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-8" id="skills">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            <span className="text-2xl md:text-4xl tracking-widest uppercase font-bold text-[color-mix(in_oklab,#077b32_80%,white_20%)] py-5 animate-pulse">SKILLS</span>
            <span
              className="absolute inset-0 bg-[#077b32] opacity-20 rounded-full blur-2xl"
              style={{ transform: 'scale(1.2)' }}
            ></span>
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            My technical toolkit that helps me build powerful and beautiful digital experiences.
          </p>
        </div>
      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
        
        {/* LEFT SIDE: Skills Accordion */}
        <div className="w-full lg:w-4/12 flex flex-col bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 bg-[#252526]">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#077b32]"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Skill Set
            </h3>
          </div>
          
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {skillsData.map((skill) => {
              const isOpen = openAccordionId === skill.id;
              const isActive = activeSkillId === skill.id;
              
              return (
                <div key={skill.id} className={`border-b border-gray-800 transition-colors ${isActive ? 'bg-[#2a2d2e]' : 'hover:bg-[#252526]'}`}>
                  <button
                    onClick={() => handleAccordionClick(skill.id)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <SkillIcon id={skill.id} />
                      <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {skill.title}
                      </span>
                    </div>
                    <ChevronIcon isOpen={isOpen} />
                  </button>
                  
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 pt-0 text-xs leading-relaxed text-gray-400 border-l-2 border-[#077b32] ml-4">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: VS Code Editor */}
        <div className="w-full lg:w-8/12 flex flex-col rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-[#1e1e1e] font-mono">
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-gray-400 text-xs hidden sm:block">
              {activeSkill.filename} — Ali Khan Portfolio
            </div>
            <div className="w-10" />
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Editor Sidebar (File Explorer) */}
            <div className="w-32 md:w-40 bg-[#252526] border-r border-gray-700 block overflow-y-auto custom-scrollbar flex-shrink-0">
              <div className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Explorer
              </div>
              <div className="px-1">
                {skillsData.map((skill) => {
                  return (
                    <button
                      key={skill.id}
                      onClick={() => {
                        setActiveSkillId(skill.id);
                        setOpenAccordionId(skill.id);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-2 truncate ${
                        activeSkillId === skill.id
                          ? "bg-[#37373d] text-white"
                          : "text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200"
                      }`}
                    >
                      <SkillIcon id={skill.id} />
                      <span className="truncate">{skill.filename}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col min-h-[400px] overflow-hidden">
              {/* Editor Tabs */}
              <div className="flex bg-[#1e1e1e] border-b border-gray-700 overflow-x-auto flex-shrink-0">
                <div className="px-4 py-2 bg-[#1e1e1e] border-t-2 border-[#077b32] text-white text-xs flex items-center gap-2 min-w-fit">
                  <SkillIcon id={activeSkill.id} />
                  {activeSkill.filename}
                  <span className="ml-2 text-gray-500 hover:text-white cursor-pointer">×</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="flex-1 p-4 overflow-auto custom-scrollbar bg-[#1e1e1e]">
                <div className="table w-full">
                  {highlightCode(displayedText, activeSkill.language, isTyping)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #424242 #1e1e1e;
          overflow-y: scroll !important; 
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          display: block !important;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 4px;
          border: 2px solid #1e1e1e;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4f4f4f;
        }
      `}</style>
    </div>
  );
}