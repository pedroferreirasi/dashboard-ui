export interface TaskModel {
  id: number;
  assigner: number;
  project_id: number;
  section_id: number;
  order: number;
  content: string;
  description: string;
  completed: boolean;
  label_ids: number[];
  priority: number;
  comment_count: number;
  creator: number;
  created: Date;
  due: Due;
  url: string;
}

export interface Due {
  date: string;
  string: string;
  lang: string;
  recurring: boolean;
}
