export interface TaskModel {
  id: number,
  assigner: number,
  project_id: number,
  section_id: number,
  order: number,
  content: String,
  description: String,
  completed: boolean,
  label_ids: String[],
  priority: number,
  comment_count: number,
  creator: number,
  created: String,
  url: String
}
