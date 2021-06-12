import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from "@angular/fire/firestore";
import { AlertController,NavController} from  '@ionic/angular'
import { crudapi } from '../crudapi';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.page.html',
  styleUrls: ['./add-school.page.scss'],
})
export class AddSchoolPage implements OnInit {
  public foodlist:any;

  tmpcountrylist : any;

  sampleArr = [];
  resultArr = [];
  id = [];

  constructor(public fs: AngularFirestore ,private getcrud:crudapi,
    public Nav:NavController , public router:Router) {

  }

  ngOnInit() {
    this.getcrud.readData().subscribe(data =>{
      this.tmpcountrylist = data.map(e =>{
        return{
          id: e.payload.doc.id,
          myname: e.payload.doc.data()['Name'.toString()],
          myimg: e.payload.doc.data()['Schoolbadge'.toString()],
          myhigh: e.payload.doc.data()['HighSchool'.toString()],
          address: e.payload.doc.data()['Address'.toString()],
          elementary: e.payload.doc.data()['Elementary'.toString()],
          highschool: e.payload.doc.data()['Highschool'.toString()],
          junor: e.payload.doc.data()['Junor'.toString()],
          kinder: e.payload.doc.data()['Kindergarten'.toString()],
          latitude: e.payload.doc.data()['Latitude'.toString()],
          licensees: e.payload.doc.data()['Licensees'.toString()],
          longitude: e.payload.doc.data()['Longitude'.toString()],
          director: e.payload.doc.data()['NameDirector'.toString()],
          manager: e.payload.doc.data()['NameManager'.toString()],
          number: e.payload.doc.data()['Number'.toString()],
          ordinary: e.payload.doc.data()['Ordinary'.toString()],
          prerimary: e.payload.doc.data()['Prerimary'.toString()],
          schoolcode: e.payload.doc.data()['SchoolCode'.toString()],
          student: e.payload.doc.data()['Student'.toString()],
          totalclass: e.payload.doc.data()['TotalClass'.toString()],
          teachers: e.payload.doc.data()['TotalTeachers'.toString()],
          image01: e.payload.doc.data()['Image01'.toString()],
          image02: e.payload.doc.data()['image01'.toString()],
          image03: e.payload.doc.data()['image02'.toString()],
          image04: e.payload.doc.data()['Image04'.toString()],}
      });

      console.log(this.tmpcountrylist);
    });
  }

  sendData(){
    this.Nav.navigateForward('/school-p1/'+this.id+'/')
  }

  search(event) {
    let searchKey: string = event.target.value;
    let firstLetter = searchKey.toUpperCase();


    if (searchKey.length == 0) {
      this.sampleArr = [];
      this.resultArr = [];
    }

    if (this.sampleArr.length == 0) {
      this.fs.collection('userschool', ref => ref.where('SearchIndex', '==', firstLetter)).snapshotChanges()
        .subscribe(data => {
          data.forEach(chilData => {
            this.sampleArr.push(chilData.payload.doc.data())
          })
        })
    }
    else {
      this.resultArr = [];
      this.sampleArr.forEach(val => {
        let name: string = val['Name'];
        if (name.toUpperCase().startsWith(searchKey.toUpperCase())) {
          if (true) {
            this.resultArr.push(val);
          }
        }
      })
    }
  }
  schoolp1(item:any){
    let schoolp1 = JSON.stringify(item);
    this.router.navigate(["schoolp1",schoolp1]);


  }

  // _ionChange(event) {
  //   const val = event.target.value;

  //   this.searchedItem = this.list;
  //   if (val && val.trim() != '') {
  //     this.searchedItem = this.searchedItem.filter((item: any) => {
  //       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  //   // this.search.getInputElement().then(item => console.log(item))
  // }

}
