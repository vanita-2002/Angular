import { Component, OnInit } from '@angular/core';
import { faDashboard,faUserGraduate,faChalkboardTeacher,faRulerVertical,faBookOpenReader,faComment,faBell,faSignOut,faSearch, faBookOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  icons ={
    dashboardIcon:faDashboard,
    userGraduateIcon:faUserGraduate,
    chalkboardTeacher:faChalkboardTeacher,
    rulerVertical:faRulerVertical,
    bookReader:faBookOpenReader,
    Comments:faComment,
    Bell:faBell,
    Signout:faSignOut,
    Search:faSearch,
    testIcon:faBookOpen




  }

  constructor() { }

  ngOnInit(): void {
  }

}
