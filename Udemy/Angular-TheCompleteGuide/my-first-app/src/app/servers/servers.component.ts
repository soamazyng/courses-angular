import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created!';
  countClick = 0;
  serverCreated = false;
  servers = ['Test Server', 'Test Server2'];

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.countClick++;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
