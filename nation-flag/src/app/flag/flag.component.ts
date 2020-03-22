import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  continentsList:any = []
  selectedContinent:any
  name:any;
  flag:any
  contriesList:any;
  countryName:any = [];
  data:any = [
    {
      "continent": "Africa",
      "countries": [
        {
          "name": "Nigeria",
          "flag": "🇳🇬"
        },
        {
          "name": "Ethiopia",
          "flag": "🇪🇹"
        },
        {
          "name": "Egypt",
          "flag": "🇪🇬"
        },
        {
          "name": "DR Congo",
          "flag": "🇨🇩"
        },
        {
          "name": "South Africa",
          "flag": "🇿🇦"
        }
      ]
    },
    {
      "continent": "America",
      "countries": [
        {
          "name": "USA",
          "flag": "🇺🇸"
        },
        {
          "name": "Brazil",
          "flag": "🇧🇷"
        },
        {
          "name": "Mexico",
          "flag": "🇲🇽"
        },
        {
          "name": "Colombia",
          "flag": "🇨🇴"
        },
        {
          "name": "Argentina",
          "flag": "🇦🇷"
        }
      ]
    },
    {
      "continent": "Asia",
      "countries": [
        {
          "name": "China",
          "flag": "🇨🇳"
        },
        {
          "name": "India",
          "flag": "🇮🇳"
        },
        {
          "name": "Indonesia",
          "flag": "🇮🇩"
        },
        {
          "name": "Pakistan",
          "flag": "🇵🇰"
        },
        {
          "name": "Bangladesh",
          "flag": "🇧🇩"
        }
      ]
    },
    {
      "continent": "Europe",
      "countries": [
        {
          "name": "Russia",
          "flag": "🇷🇺"
        },
        {
          "name": "Germany",
          "flag": "🇩🇪"
        },
        {
          "name": "UK",
          "flag": "🇬🇧"
        },
        {
          "name": "France",
          "flag": "🇫🇷"
        },
        {
          "name": "Italy",
          "flag": "🇮🇹"
        }
      ]
    },
    {
      "continent": "Oceania",
      "countries": [
        {
          "name": "Australia",
          "flag": "🇦🇺"
        },
        {
          "name": "Papua New Guinea",
          "flag": "🇵🇬"
        },
        {
          "name": "New Zealand",
          "flag": "🇳🇿"
        },
        {
          "name": "Fiji",
          "flag": "🇫🇯"
        },
        {
          "name": "Solomon Islands",
          "flag": "🇸🇧"
        }
      ]
    }
  ]
  constructor(private http: Http) { }

  ngOnInit(): void {
    this.getContinents();
    this.getContriesList("");
    this.getflagList("")
  }

  getContinents(){
    for (var i in this.data)
    this.continentsList.push(this.data[i].continent)
    console.log('data',this.continentsList)
  }
  
  getContriesList(continent) {
    debugger
    console.log("con", continent)
    let list = [];
    for (var i in this.data) {
        let con = this.data[i].countries
        for(var j in con)
    list.push(con[j].name);
   
    }
    this.countryName = list;
    console.log('contrieslist',  this.countryName )
 
}
getflagList(continent) {
  debugger
  console.log("con", continent)
  let list = [];
  for (var i in this.data) {
      let con = this.data[i].countries
      for(var j in con)
  list.push(con[j].flag);
 
  }
  this.flag = list;
  console.log('flag',  this.flag )

}

// getContriesList(continent) {
//   debugger
//   console.log("con", continent)
//   let list = [];
//   for (var i in this.data) {
//     if(continent == this.data[i].continent){
//       let con = this.data[i].countries
//       for(var j in con)
//       list.push(con[j].name);
//     }
  
 
//   }
//   this.countryName = list;
//   console.log('contrieslist',  this.countryName )

// }

}
