import { Component, OnInit } from '@angular/core';
import { MyAdat } from '../adat.model';
import { ElsoService } from '../elso.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public adatom: MyAdat[] = [];

  constructor( 
    public service: ElsoService,
    private router: Router
    ){}

  ngOnInit(): void {
  if(LoginComponent.IsLogged == false) this.router.navigate(['/login']);
  if ( this.service.adatom.length === 0)
    {
      this.service.fetch().subscribe(
        //sikeres a status: (100), 200-as , 300-as
        (data: any) => this.service.adatom = data.data,
        //errorr a status: 400-as, 500-as
        error => console.log(error),
        () => console.log('complete'));
    }
  }

  deletePlayer(adat: any): void {
    for(let i = 0; i < this.service.adatom.length; i++) 
    {
      if(this.service.adatom[i] === adat) 
      {
        this.service.adatom.splice(i,1);
        alert("You successfully deleted a player!");
      }
    }
  }

  player(adat: any):void{
    this.service.player[0] = adat;
  }

  getPlayer(id: number){
    this.router.navigate(['/details', id]);
  }

  editPlayer(id: number){
    this.router.navigate(['/edit', id]);
  }

}