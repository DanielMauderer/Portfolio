import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-game-server-manager',
  standalone: true,
  imports: [PanelModule, TagModule, DividerModule, Highlight],
  templateUrl: './game-server-manager.component.html',
  styleUrl: './game-server-manager.component.css'
})
export class GameServerManagerComponent {
  proto =
`service ServerAPI {
  rpc Get(ServerRequest) returns (Server); 
  rpc GetAll(google.protobuf.Empty) returns (ServerList); 
  rpc Import(ImportRequest) returns (ImportResponse); 
  rpc Start(StartRequest) returns (Status); 
  rpc Stop(StopRequest) returns (Status); 
  rpc Update(UpdateRequest) returns (google.protobuf.Empty); 
  rpc GetLog(LogRequest) returns (Logs); 
  rpc GetActiveLogs(LogRequest) returns (Logs); 
  rpc Attach (AttachRequest) returns (stream StdOut); 
  rpc SendCommand (SendCommandRequest) returns (google.protobuf.Empty); 
}`
  
  importMessage = 
`message ImportRequest{
	string Name = 1;
	string Comment = 2;
	string Description = 3;
	string Image = 4;
	repeated MountingPoint Mounts = 5;
	repeated PortMap Ports = 6;
	ServerScripts ContainerScripts  = 7;
	repeated Variable Variables = 8;
}`
}
