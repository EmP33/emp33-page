export interface ResourceType {
  id: number;
  category:
    | "Javascript"
    | "SVG"
    | "Pictures"
    | "React"
    | "Fonts"
    | "Database"
    | "Logo"
    | "Layout"
    | "Colors"
    | "Hosting"
    | "Tools";
  title: string;
  description: string;
  link: string;
}

export interface WorkType {
  id: number;
  title: string;
  description: string;
  image: string;
  ghlink: string;
  link: string;
  topics: string[];
}
