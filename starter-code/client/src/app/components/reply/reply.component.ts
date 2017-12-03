import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() reply:any;
  constructor() { }

  ngOnInit() {}

}
