import {Injectable} from '@angular/core';
import {FirebaseService} from "./core/firebase.service";

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  constructor(private firebaseService: FirebaseService) {

  }


  async getRotas() {
    let res = await this.firebaseService.db.collection('rotas').get();
    return res.docs.map(item => item.data());
  }

  async getRota(documentId: string) {
    let res = await this.firebaseService.db.collection('rotas').doc(documentId).get();
    return res.data();
  }

}
