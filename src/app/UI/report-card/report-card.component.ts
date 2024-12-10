import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { ReportAction } from '../../store/report/reports.action';

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.scss',
})
export class ReportCardComponent {
  constructor(private store: Store) {}
  @Input() report: any;
  @Input() reportAction: boolean = false;
  @Output() onReportAction = new EventEmitter<{
    reportId: any;
    action: string;
  }>();
  isPopupVisible: boolean = false;

  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  handleReportAction(reportId: any, action: string) {
    this.onReportAction.emit({ reportId, action });
    this.closePopup();
  }
}
