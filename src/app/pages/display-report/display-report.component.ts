import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { trigger,style,transition,animate,keyframes,query,stagger, state, animation } from '@angular/animations';


@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({opacity: 0, transform: 'translateY(-75%)'}), {optional: true}),
        query(':enter', stagger('500ms', [
          animate('500ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(-75%),', offset: 0.1, background:'#6e61ab'}),
            style({opacity: 1, transform: 'translateY(35px),', offset: 0.8, background:'#6e61ab'}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0, background:'#928fce'}),
          ]))]), {optional: true})
        
      ])
    ])
  ]
})
export class DisplayReportComponent implements OnInit {

  feedbacks: any = []
  averageFeedback:any = [0,0,0,0]
  report: Array<any> = []
  reportType: String
  reportId: String

  constructor(private conn: ConnectionService) { }

  ngOnInit(): void {
    this.report = this.conn.getReport();
    this.feedbacks = this.report[0]
    this.reportType = this.report[1]
    this.reportId = this.report[2]
    this.calcAverage()
  }

  calcAverage(){
    for(var i = 0; i < this.feedbacks.length ;i++){
      this.averageFeedback[0] += this.feedbacks[i].feedbackRating.communicationSkills;
      this.averageFeedback[1] += this.feedbacks[i].feedbackRating.doubtClarity;
      this.averageFeedback[2] += this.feedbacks[i].feedbackRating.resourceSharing;
      this.averageFeedback[3] += this.feedbacks[i].feedbackRating.timeManagement;
    }

    for(var i = 0; i < this.averageFeedback.length ;i++){
      this.averageFeedback[i] = this.averageFeedback[i]/this.feedbacks.length
    }

    // this.chartFunction()

  }

}
