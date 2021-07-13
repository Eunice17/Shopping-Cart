import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ClientsModel } from '../models/clients.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: AngularFirestore) { }

  public createClient(data: ClientsModel){
    return this.firestore.collection('clients').add(data);
  }

  public getClient(documentId: string){
    return this.firestore.collection('clients').doc(documentId).snapshotChanges();
  }

  public getClients(){
    return this.firestore.collection('clients').snapshotChanges();
  }

  public updateClient(documentId: string, data: ClientsModel){
    return this.firestore.collection('clients').doc(documentId).set(data);
  }

  public deleteClient(documentId: string){
    return this.firestore.collection('clients').doc(documentId).delete();
  }
}
