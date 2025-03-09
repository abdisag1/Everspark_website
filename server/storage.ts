import { users, type User, type InsertUser, products, type Product, type InsertProduct, projects, type Project, type InsertProject, contactSubmissions, type ContactSubmission, type InsertContact } from "@shared/schema";

// Storage interface for all our data models
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getRelatedProducts(productId: number): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private projects: Map<number, Project>;
  private contactSubmissions: Map<number, ContactSubmission>;
  currentUserId: number;
  currentProductId: number;
  currentProjectId: number;
  currentContactSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.projects = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentProjectId = 1;
    this.currentContactSubmissionId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }
  
  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  
  async getRelatedProducts(productId: number): Promise<Product[]> {
    const product = this.products.get(productId);
    if (!product) return [];
    
    // Get products in the same category, excluding the current product
    const relatedProducts = Array.from(this.products.values())
      .filter(p => p.category === product.category && p.id !== productId)
      .slice(0, 3); // Limit to 3 related products
      
    return relatedProducts;
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const now = new Date();
    const product: Product = { 
      ...insertProduct, 
      id,
      createdAt: now
    };
    this.products.set(id, product);
    return product;
  }
  
  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.category === category
    );
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const now = new Date();
    const project: Project = { 
      ...insertProject, 
      id,
      createdAt: now
    };
    this.projects.set(id, project);
    return project;
  }
  
  // Contact submissions
  async createContactSubmission(insertSubmission: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const now = new Date();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: now
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Initialize with sample data
  private initializeSampleData() {
    // Sample products
    const sampleProducts: InsertProduct[] = [
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
          { name: "UV Dose", value: "40 mJ/cm²" },
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
          { name: "Operating Temperature", value: "-20°C to 60°C" },
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
          { name: "Control System", value: "PLC with 10\" HMI touchscreen" },
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
          { name: "Tracking", value: "Dual-axis, 360° azimuth, 0-80° elevation" },
          { name: "Panel Capacity", value: "Up to 2kW" },
          { name: "Tracking Accuracy", value: "±0.1°" },
          { name: "Wind Resistance", value: "Up to 140 km/h" },
          { name: "Power Consumption", value: "< 10W daily average" }
        ]
      }
    ];
    
    // Add sample products
    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
    
    // Sample projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Municipal Water Treatment Upgrade",
        shortDescription: "Upgraded the municipal water treatment facility with our EC-500 electrochlorination system, resulting in 40% operational cost reduction.",
        description: "The Riverside Municipality sought to modernize their aging water treatment facility to improve efficiency and reduce operational costs. We implemented our EC-500 electrochlorination system, replacing their traditional chlorine gas disinfection method. The project included system design, installation, staff training, and ongoing support.",
        executiveSummary: "40% reduction in operational costs and improved water quality metrics following installation of an EC-500 electrochlorination system at the Riverside municipal water treatment facility.",
        location: "Riverside Municipality, California",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
        category: "municipal",
        rating: 5.0,
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
        rating: 5.0,
        postedBy: "Resort Solutions Team",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        additionalImages: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
          "https://images.unsplash.com/photo-1582610116397-edb318620f44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80"
        ]
      }
    ];
    
    // Add sample projects
    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }
}

export const storage = new MemStorage();
