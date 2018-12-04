import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn : 'root',
})

export class ApiService {
	constructor(private db: AngularFirestore) {}

	public getAll(path, filter): Observable<any[]> {
		const query = this.db.collection(path, ref =>
			filter ? ref.where(filter.key, '==', filter.value) : ref
		);

		return query.snapshotChanges()
			.pipe(map(this.assignIdsToEntries));
	}

	public add(path: string, data: any): void {
		this.db.collection(path).add(data);
	}

	private assignIdsToEntries(entries) {
		return entries.map(entry => {
			return Object.assign(entry.payload.doc.data(), { id: entry.payload.doc.id });
		});
	}
}
