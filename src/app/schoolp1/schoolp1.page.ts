import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController,IonSlides } from '@ionic/angular';
import { crudapi } from '../crudapi';


@Component({
  selector: 'app-schoolp1',
  templateUrl: './schoolp1.page.html',
  styleUrls: ['./schoolp1.page.scss'],
})
export class Schoolp1Page implements OnInit {
  myname:String ;
  myimg:String;
  myhigh:String ;
  address:String;
  image01:String;
  image02:String;
  image03:String;
  image04:String;
  student:String;
  latitude:String;
  longitude:String;
  manager:String;
  ordinary:String;
  schoolcode:String;
  teachers:String;
  director:String;
  Schoolbadge:String;
  highschool:String;
  elementary:String;
  junor:String;
  kinder:String;
  number:String;
  prerimary:String;
  totalclass:String;
  licensees:String;

  @ViewChild('slidesRef') slides: IonSlides;
  public slideOpts = {
    initialSlide: 1,
    speed: 2500,
    autoplay: true,
    loop: true
  };
  constructor(private getcrud:crudapi,
    public navCtrl:NavController , public actroute: ActivatedRoute){ }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('sendid');
    let schoolp1 = JSON.parse(dataRev);
    console.log(schoolp1);

    this.myname = schoolp1['myname'];
    this.myimg = schoolp1['myimg'];
    this.myhigh = schoolp1['myhigh'];
    this.address = schoolp1['address'];
    this.image01 = schoolp1['image01'];
    this.image02 = schoolp1['image02'];
    this.image03 = schoolp1['image03'];
    this.image04 = schoolp1['image04'];
    this.student = schoolp1['student'];
    this.latitude = schoolp1['latitude'];
    this.longitude = schoolp1['longitude'];
    this.manager = schoolp1['manager'];
    this.ordinary = schoolp1['ordinary'];
    this.schoolcode = schoolp1['schoolcode'];
    this.teachers = schoolp1['teachers'];
    this.director = schoolp1['director'];
    this.highschool = schoolp1['highschool'];
    this.elementary = schoolp1['elementary'];
    this.junor = schoolp1['junor'];
    this.kinder = schoolp1['kinder'];
    this.prerimary = schoolp1['prerimary'];
    this.totalclass = schoolp1['totalclass'];
    this.licensees = schoolp1['licensees'];
    this.number = schoolp1['number'];
    console.log(schoolp1);

  }
  back(){
    this.navCtrl.pop();
  }


}
