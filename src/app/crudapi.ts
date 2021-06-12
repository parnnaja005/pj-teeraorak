import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable , OnInit } from '@angular/core';

@Injectable({
  providedIn : 'root' ,
})

export class crudapi{

  constructor(private fs:AngularFirestore){}
  readData(){
    return this.fs.collection('DataSchool').snapshotChanges();
  }
}
