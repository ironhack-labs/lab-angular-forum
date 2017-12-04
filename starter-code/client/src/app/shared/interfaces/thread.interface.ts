export interface IThread {
  _author?: string;
  title: string;
  content: string;
  date?: Date;
  replies?: Array<any>;
}
