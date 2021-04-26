import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MyAdat } from '../adat.model';
import { ElsoService } from '../elso.service';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
  export class FormComponent implements OnInit {
  
      adat = new MyAdat();
  
    constructor( 
      private service: ElsoService,
      private router: Router
      ){ }
  
    ngOnInit(): void {
      if(LoginComponent.IsLogged == false) this.router.navigate(['/login']);
    }
  
    save(): void{
        if(this.adat.id!=null && this.adat.first_name!=null && this.adat.last_name!=null && this.adat.position!=null)
        {          
          this.service.adatom.push(this.adat);
          this.adat = new MyAdat();
          alert("Successfully added a new player!");
        }
        else alert("You have to fill out everything to create a new player!");
    }
  }