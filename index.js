// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  products;
  projects;
  contactSubmissions;
  currentUserId;
  currentProductId;
  currentProjectId;
  currentContactSubmissionId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentProjectId = 1;
    this.currentContactSubmissionId = 1;
    this.initializeSampleData();
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Products
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProductById(id) {
    return this.products.get(id);
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  async getRelatedProducts(productId) {
    const product = this.products.get(productId);
    if (!product) return [];
    const relatedProducts = Array.from(this.products.values()).filter((p) => p.category === product.category && p.id !== productId).slice(0, 3);
    return relatedProducts;
  }
  async createProduct(insertProduct) {
    const id = this.currentProductId++;
    const now = /* @__PURE__ */ new Date();
    const product = {
      ...insertProduct,
      id,
      createdAt: now
    };
    this.products.set(id, product);
    return product;
  }
  // Projects
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async getProjectById(id) {
    return this.projects.get(id);
  }
  async getProjectsByCategory(category) {
    return Array.from(this.projects.values()).filter(
      (project) => project.category === category
    );
  }
  async createProject(insertProject) {
    const id = this.currentProjectId++;
    const now = /* @__PURE__ */ new Date();
    const project = {
      ...insertProject,
      id,
      createdAt: now
    };
    this.projects.set(id, project);
    return project;
  }
  // Contact submissions
  async createContactSubmission(insertSubmission) {
    const id = this.currentContactSubmissionId++;
    const now = /* @__PURE__ */ new Date();
    const submission = {
      ...insertSubmission,
      id,
      createdAt: now
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  // Initialize with sample data
  initializeSampleData() {
    const sampleProducts = [
      {
        name: "EC-200 Electrochlorinator",
        category: "electrochlorinators",
        shortDescription: "Compact on-site chlorine generator ideal for small to medium water treatment applications.",
        description: "The EC-200 Electrochlorinator is our compact solution for on-site sodium hypochlorite generation. It produces up to 200g/hr of chlorine equivalent using only salt, water, and electricity. The system is designed for easy installation and maintenance, making it perfect for small municipalities, community water systems, and commercial pools.",
        imageUrl: "https://images.unsplash.com/photo-1558449033-2eb8d52c94d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["Produces up to 200g/hr of chlorine equivalent", "Compact footprint for easy installation", "Automated operation with minimal supervision", "Low maintenance requirements", "Remote monitoring capabilities"],
        specifications: [
          { name: "Production Capacity", value: "200g/hr chlorine equivalent" },
          { name: "Salt Consumption", value: "3.5kg per kg of chlorine produced" },
          { name: "Power Consumption", value: "4.5 kWh per kg of chlorine produced" },
          { name: "Dimensions (WxDxH)", value: "800 x 600 x 1200 mm" },
          { name: "Weight", value: "120 kg" }
        ]
      },
      {
        name: "UV-1000 Disinfection System",
        category: "water-disinfection",
        shortDescription: "High-performance UV water treatment system for commercial and industrial applications.",
        description: "The UV-1000 Disinfection System uses high-intensity ultraviolet light to inactivate bacteria, viruses, and other pathogens without adding chemicals to the water. With a flow capacity of up to 1000 liters per minute, it's suitable for municipal water treatment, food and beverage processing, and pharmaceutical manufacturing.",
        imageUrl: "https://images.unsplash.com/photo-1626285470057-b40b67d19ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["Flow rate up to 1000 liters per minute", "99.99% inactivation of harmful microorganisms", "Chemical-free disinfection", "Low energy consumption", "Easy to install and maintain"],
        specifications: [
          { name: "Flow Capacity", value: "Up to 1000 L/min" },
          { name: "UV Dose", value: "40 mJ/cm\xB2" },
          { name: "Lamp Life", value: "12,000 hours" },
          { name: "Power Consumption", value: "1.2 kW" },
          { name: "Control System", value: "PLC with touch screen interface" }
        ]
      },
      {
        name: "SolarPak 500",
        category: "solar",
        shortDescription: "Complete solar power system for off-grid water treatment installations.",
        description: "The SolarPak 500 is an integrated solar power solution designed specifically for water treatment applications in remote locations. With 500W capacity, it can power small to medium-sized treatment systems, pumps, and monitoring equipment. The system includes solar panels, charge controllers, batteries, and all necessary components for a complete installation.",
        imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["500W solar array", "Battery storage for 24/7 operation", "Weather-resistant enclosure", "Simple plug-and-play installation", "Remote monitoring system"],
        specifications: [
          { name: "Solar Capacity", value: "500W" },
          { name: "Battery Storage", value: "2.4 kWh" },
          { name: "Output", value: "12V DC and 110/220V AC" },
          { name: "Operating Temperature", value: "-20\xB0C to 60\xB0C" },
          { name: "Dimensions (WxDxH)", value: "Panel array: 3m x 1.5m, Battery box: 600 x 400 x 200 mm" }
        ]
      },
      {
        name: "ChlorPro 1000",
        category: "electrochlorinators",
        shortDescription: "Industrial-grade electrochlorination system for large-scale applications.",
        description: "The ChlorPro 1000 is our flagship electrochlorination system designed for industrial and municipal applications requiring high volumes of disinfectant. Capable of producing up to 1000g/hr of chlorine equivalent, this robust system features redundant components, advanced automation, and comprehensive safety features.",
        imageUrl: "https://images.unsplash.com/photo-1601065410979-23b554e014c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["Produces up to 1000g/hr of chlorine equivalent", "Modular design for easy maintenance", "Advanced control system with data logging", "Integrated safety features", "Remote operation capability"],
        specifications: [
          { name: "Production Capacity", value: "1000g/hr chlorine equivalent" },
          { name: "Salt Consumption", value: "3.2kg per kg of chlorine produced" },
          { name: "Power Consumption", value: "4.2 kWh per kg of chlorine produced" },
          { name: "Dimensions (WxDxH)", value: "1800 x 1200 x 2000 mm" },
          { name: "Weight", value: "650 kg" }
        ]
      },
      {
        name: "OzonePro Disinfection",
        category: "water-disinfection",
        shortDescription: "Advanced ozone-based water treatment for superior disinfection results.",
        description: "The OzonePro Disinfection system uses state-of-the-art ozone generation technology to provide powerful oxidation and disinfection capabilities. Ozone effectively eliminates bacteria, viruses, and many chemical contaminants without leaving harmful residuals. Ideal for municipal water treatment, bottling plants, and aquaculture.",
        imageUrl: "https://images.unsplash.com/photo-1581093196277-9f608732aee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["Ozone production up to 100g/hr", "Fully automated operation", "Integrated destruct system for excess ozone", "Real-time monitoring of water quality", "Compact, modular design"],
        specifications: [
          { name: "Ozone Production", value: "Up to 100g/hr" },
          { name: "Contact System", value: "Venturi injection with static mixer" },
          { name: "Power Consumption", value: "2.1 kW" },
          { name: "Control System", value: 'PLC with 10" HMI touchscreen' },
          { name: "Monitoring Parameters", value: "ORP, pH, flow rate, ozone concentration" }
        ]
      },
      {
        name: "SolarTrack 360",
        category: "solar",
        shortDescription: "Solar panel tracking system that maximizes energy generation efficiency.",
        description: "The SolarTrack 360 is a dual-axis solar tracking system that follows the sun throughout the day, maximizing energy production by up to 45% compared to fixed solar arrays. This system is ideal for powering water treatment facilities in areas with high solar potential, ensuring maximum efficiency and return on investment.",
        imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        datasheetUrl: "#",
        features: ["Dual-axis tracking for maximum solar harvest", "Supports up to 2kW of solar panels", "Automated weather protection modes", "Low maintenance mechanical design", "Integrated with monitoring systems"],
        specifications: [
          { name: "Tracking", value: "Dual-axis, 360\xB0 azimuth, 0-80\xB0 elevation" },
          { name: "Panel Capacity", value: "Up to 2kW" },
          { name: "Tracking Accuracy", value: "\xB10.1\xB0" },
          { name: "Wind Resistance", value: "Up to 140 km/h" },
          { name: "Power Consumption", value: "< 10W daily average" }
        ]
      }
    ];
    sampleProducts.forEach((product) => {
      this.createProduct(product);
    });
    const sampleProjects = [
      {
        title: "Municipal Water Treatment Upgrade",
        shortDescription: "Upgraded the municipal water treatment facility with our EC-500 electrochlorination system, resulting in 40% operational cost reduction.",
        description: "The Riverside Municipality sought to modernize their aging water treatment facility to improve efficiency and reduce operational costs. We implemented our EC-500 electrochlorination system, replacing their traditional chlorine gas disinfection method. The project included system design, installation, staff training, and ongoing support.",
        executiveSummary: "40% reduction in operational costs and improved water quality metrics following installation of an EC-500 electrochlorination system at the Riverside municipal water treatment facility.",
        location: "Riverside Municipality, California",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
        category: "municipal",
        rating: 5,
        postedBy: "Engineering Team",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        additionalImages: [
          "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
          "https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80"
        ]
      },
      {
        title: "Off-Grid Solar Water System",
        shortDescription: "Implemented a solar-powered water disinfection system that provides clean drinking water to 5,000 residents in a remote area.",
        description: "Greenfield Village in Kenya lacked access to both clean water and reliable electricity. We designed and installed a comprehensive solution incorporating solar power, water pumping, and our UV-1000 disinfection system. The project now provides clean drinking water to 5,000 residents without requiring grid electricity.",
        executiveSummary: "Installation of a completely off-grid water treatment system powered by renewable energy, bringing clean water to 5,000 residents in a remote Kenyan village.",
        location: "Greenfield Village, Kenya",
        imageUrl: "https://images.unsplash.com/photo-1626808642875-0aa545ce58d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
        category: "humanitarian",
        rating: 4.5,
        postedBy: "Development Projects Team",
        videoUrl: "",
        additionalImages: [
          "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
          "https://images.unsplash.com/photo-1611811787188-da23609a00a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80"
        ]
      },
      {
        title: "Luxury Resort Water System",
        shortDescription: "Designed and installed a complete water treatment solution for a luxury resort, ensuring pristine water quality for guests.",
        description: "Paradise Bay Resort in the Maldives required a comprehensive water management system that could provide high-quality drinking water, pool treatment, and wastewater handling while maintaining strict environmental standards. We implemented an integrated solution featuring our OzonePro disinfection system and ChlorPro electrochlorinator.",
        executiveSummary: "Implementation of an eco-friendly water treatment and management system for a luxury resort, meeting the highest quality standards while minimizing environmental impact.",
        location: "Paradise Bay Resort, Maldives",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
        category: "commercial",
        rating: 5,
        postedBy: "Resort Solutions Team",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        additionalImages: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
          "https://images.unsplash.com/photo-1582610116397-edb318620f44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80"
        ]
      }
    ];
    sampleProjects.forEach((project) => {
      this.createProject(project);
    });
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp, doublePrecision, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  // 'electrochlorinators', 'water-disinfection', 'solar'
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  datasheetUrl: text("datasheet_url"),
  features: jsonb("features").$type(),
  specifications: jsonb("specifications").$type(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true
});
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  executiveSummary: text("executive_summary"),
  location: text("location").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  // can be by type or location
  rating: doublePrecision("rating"),
  // Client satisfaction rating (0-5)
  postedBy: text("posted_by"),
  videoUrl: text("video_url"),
  additionalImages: jsonb("additional_images").$type(),
  // URLs to additional images
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true
});
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms."
  })
});
var insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      const product = await storage.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  app2.get("/api/products/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const products2 = await storage.getProductsByCategory(category);
      res.json(products2);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      res.status(500).json({ message: "Failed to fetch products by category" });
    }
  });
  app2.get("/api/products/related/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid product ID" });
      }
      const relatedProducts = await storage.getRelatedProducts(id);
      res.json(relatedProducts);
    } catch (error) {
      console.error("Error fetching related products:", error);
      res.status(500).json({ message: "Failed to fetch related products" });
    }
  });
  app2.get("/api/projects", async (req, res) => {
    try {
      const projects2 = await storage.getProjects();
      res.json(projects2);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid project ID" });
      }
      const project = await storage.getProjectById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });
  app2.get("/api/projects/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const projects2 = await storage.getProjectsByCategory(category);
      res.json(projects2);
    } catch (error) {
      console.error("Error fetching projects by category:", error);
      res.status(500).json({ message: "Failed to fetch projects by category" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          message: "Invalid form data",
          errors: validationError.details
        });
      }
      const contactData = result.data;
      const submission = await storage.createContactSubmission(contactData);
      console.log("New contact form submission:", submission);
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to process contact form" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  base: "/Everspark_website",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "127.0.0.1"
    // Changed from "0.0.0.0" to "127.0.0.1"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
