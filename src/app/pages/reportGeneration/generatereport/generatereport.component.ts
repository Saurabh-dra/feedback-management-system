import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.css']
})
export class GeneratereportComponent implements OnInit {

  id: String = "";

  constructor(private conn: ConnectionService) { }

  ngOnInit(): void {
  }

  quotes = [["Mistakes should be examined, learned from, and discarded; not dwelled upon and stored.","Tim Fargo"],
            ["To avoid criticism, do nothing, say nothing, and be nothing.","Elbert Hubbard"],
            ["Make feedback normal. Not a performance review.", "Ed Batista"]]

  
  scrollTo(className: string){
    document.querySelector(className).scrollIntoView();
  }


  fetchReport(type: String){
    if(type == "incomplete"){
      this.id = "incomplete"
    }
    this.conn.setReportCred(type,this.id);
  }

}