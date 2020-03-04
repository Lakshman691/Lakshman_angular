import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Mcq } from "./mcq";
import { MCQLIST } from "./mock-mcq";
@Injectable({
  providedIn: "root"
})
export class MCQService {
  getMCQs(): Observable<Mcq[]> {
    return of(MCQLIST);
  }
  getMCQ(id: Number): Observable<Mcq> {
    return of(MCQLIST.find(mcq => mcq.qNo === id));
  }
}
