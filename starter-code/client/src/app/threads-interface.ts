export interface Threads {
  _id: string,
  _author: string,
  title: string
  content: string,
  replies: Array<string>,
  date: Date
}