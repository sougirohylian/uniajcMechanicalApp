import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private firestore:AngularFirestore) { }
  read_Users(){
    return this.firestore.collection('usuarios').snapshotChanges();
  }
}
