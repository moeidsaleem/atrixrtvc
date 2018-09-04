import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

customer:any;


  constructor(private afs:AngularFirestore) { }



/* :::::::::::::::::::::::::::::::::::::: CUSTOMER :::::::::::::::::::::::::::::::::: */

//Create
  createCustomer(uid, data){
   return this.afs.collection('customers').add(data);
  }

//READ 
getCustomer(uid){
  return this.afs.doc('custeomers/'+uid).snapshotChanges();
}

//UPDATE 
updateCustomer(uid, data){
  return this.afs.doc('customers'+uid).update(data);

}
  
deleteCustomer(uid){
  return this.afs.doc('customers/'+uid).delete();
}


}
