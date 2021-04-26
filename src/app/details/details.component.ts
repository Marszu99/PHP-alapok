import { Component, OnInit } from '@angular/core';
import { ElsoService } from '../elso.service';
import { MyAdat } from '../adat.model';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
  
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
   
  adat = new MyAdat();
  
  constructor(
    public service: ElsoService,
    private router: Router
   ) { }

ngOnInit(): void {
    if(LoginComponent.IsLogged == false) this.router.navigate(['/login']);
    this.adat = this.service.player[0];
  }
  
}