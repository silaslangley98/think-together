import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
	constructor(private db: AngularFirestore) {}

	getAll(path): Observable<any[]> {
		return this.db.collection(path).valueChanges();
	}
}
