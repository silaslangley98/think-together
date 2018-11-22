import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root',
})

export class ApiService {
	constructor(private db: AngularFirestore) {}

	public getAll(path): Observable<any[]> {
		return this.db.collection(path).valueChanges();
	}

	public add(path: string, data: any): void {
		this.db.collection(path).add(data);
	}
}
