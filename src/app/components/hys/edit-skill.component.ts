import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
  skill: Skill = null;

  constructor(private skillS: SkillService, private activatedRouter: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id,this.skill).subscribe(
      data =>{
        this,this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la Skill");
        this.router.navigate(['']);
      }
    )
  }
}
