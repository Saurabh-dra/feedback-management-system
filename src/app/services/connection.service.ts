import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  reportType: String;
  reportId: String;
  feedbacks: Observable<any>;
  report: Array<any> = []

  constructor(private http: HttpClient, private route: Router) { }


  setReportCred(reportType: String, reportId: String){
    this.reportId = reportId;
    this.reportType = reportType
    this.connect()
  }

  connect(){
    this.http.get<any>("http://localhost:7001/feedback/generateFeedbackReport/" + this.reportType + "/" + this.reportId).subscribe( i => {
      this.feedbacks = i;
      this.route.navigateByUrl('displayReport')
    });
  }

  getReport(): Array<any>{

    this.report = []

    this.report.push(this.feedbacks)
    this.report.push(this.reportType)
    this.report.push(this.reportId)


    return this.report;

  }


}
