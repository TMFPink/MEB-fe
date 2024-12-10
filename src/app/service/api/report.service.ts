import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl: string;
  private httpOptions = {
    withCredentials: true,
  };

  constructor(
    private http: HttpClient,
    @Inject(String) apiUrl: string,
  ) {
    this.apiUrl = `${apiUrl}/reports`;
  }

  getReport(page: number, size: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?page=${page}&size=${size}`,
      this.httpOptions,
    );
  }

  updateReport(reportId: string, reportStatus: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${reportId}?reportStatus=${reportStatus}`,
      {},
      this.httpOptions,
    );
  }

  createReport(blogId: any, reportForm: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/${blogId}`,
      reportForm,
      this.httpOptions,
    );
  }
}
