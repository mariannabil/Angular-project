import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
server:{id:number, name:string , status:string};
serverName:'';
serverStatus='';
  constructor(private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    // this.server = this.serversService.getServer(1);

  }

}
