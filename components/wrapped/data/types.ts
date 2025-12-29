export interface MediaItem {
  timestamp: string;
  path: string;
  label: string;
  type: "image" | "video";
  hint: string;
}

export interface MomentConfig {
  items: MediaItem[];
  layout: "feature" | "polaroid" | "polaroid-cluster" | "grid" | "text";
  narrative?: string;
  timeContext?: string;
  highlight?: boolean;
}

export type Month =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";
