import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  student_details = false

  studentdata:Array<any> = []

  st:Array<object> = []

  studentlist:Array<any> = []
  class1:any = []
  class2:any = []
  class3:any = []
  class4:any = []
  class5:any = []
  class6:any = []
  class7:any = []
  class8:any = []
  class9:any = []
  class10:any = []
  class11:any = []
  class12:any = []


  ishidden = false


  constructor(private service : SharedService) { }

  ngOnInit(): void {

    this.refreshstudent();
    this.studentdata.push(this.class2,this.class1)
    
  }


  refreshstudent(){

    this.service.getstudentlist().subscribe((data)=>{
      this.studentlist=data;


      for(let i=0;i<this.studentlist.length;i++){

       let cls= this.studentlist[i].class
    
       switch (cls) {
    
            case 1:
              this.class1.push(this.studentlist[i])
                break;
            case 2:
              this.class2.push(this.studentlist[i])
                break;
            case 3:
              this.class3.push(this.studentlist[i])
                break;
            case 4:
              this.class4.push(this.studentlist[i])
                break;
            case 5:
              this.class5.push(this.studentlist[i])
                break;
            case 6:
              this.class6.push(this.studentlist[i])
                break;
            case 7:
              this.class7.push(this.studentlist[i])
                break; 
            case 8:
              this.class8.push(this.studentlist[i])
                break;
            case 9:
              this.class9.push(this.studentlist[i])
                break;
            case 10:
              this.class10.push(this.studentlist[i])
                break;
            case 11:
              this.class11.push(this.studentlist[i])
                break;
            case 12:
              this.class12.push(this.studentlist[i])
                break;
   
          }



      }


      console.log(this.class1)
      console.log(this.class2)
      console.log(this.class3)
      console.log(this.class4)
      console.log(this.class5)
      console.log(this.class6)
      console.log(this.class7)
      console.log(this.class8)
      console.log(this.class9)
      console.log(this.class10)
      console.log(this.class11)
      console.log(this.class12)

    })
  }


  cli(){
    this.student_details = true
  }

  remove(){
    this.student_details= !this.student_details
  }


}
