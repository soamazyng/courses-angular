import { Component, Input } from '@angular/core';

interface ServerElement {
  type: string;
  name: string;
  content: string;
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent {
  @Input() public element: ServerElement = { type: '', name: '', content: '' };
}
