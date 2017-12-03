import { User } from './User.model'
import { Reply } from './Reply.model'

export class Thread {
  author:User;
  title: String;
  content: String;
  date: Date;
  replies: Array<Reply>
}
