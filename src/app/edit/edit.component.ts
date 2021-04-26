import { Component, OnInit } from '@angular/core';
import { ElsoService } from '../elso.service';
import { MyAdat } from '../adat.model';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
   
  adat = new MyAdat();
  public IsLogged:boolean = false;  

  constructor(
    public service: ElsoService,
    private router: Router
   ) {}
  
  ngOnInit(): void {
    if(LoginComponent.IsLogged == false) this.router.navigate(['/login']);
  }

  edit(): void{
    if(this.adat.first_name.length > 0 && this.adat.last_name.length > 0 && this.adat.position.length > 0) 
    {
      alert('The edit was successfull!');
    }
    else alert("You have to fill out everything to edit the player!");
  }
  
}