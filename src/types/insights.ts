export interface ArticleItem {
  id: string;
  category: "AI/ML" | "Automation" | "Development";
  title: string;
  shortDesc: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}
