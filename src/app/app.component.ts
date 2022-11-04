import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: DataSource;
  title = 'dx-app';

  ngOnInit(): void {
    let person = {
      firstName: 'Jim',
      lastName: 'Cooper',
      age: 18,
      isAdult() {
        return this.age >= 18
      }
    };

    // console.log(Object.keys(person));
    ;


  }

  constructor() {
    this.dataSource = new DataSource(
      {
        store: [
          { name: "item1", value: 33 },
          { name: "item2", value: 28 },
          { name: "item3", value: 15 },
          { name: "item4", value: 61 },
          { name: "item5", value: 44 },
          { name: "item6", value: 8 }
        ],


        // filter: [
        // ["value", ">", "40"],
        // "or",
        // [
        //   ["name", "=", "item3"],
        //   "or",
        //   ["name", "=", "item6"]
        // ]
        // ]
      }
    )
  }

  // { item(filter: [
  //   { or:
  //     { value: "name", operator: "like", property: 6 },
  //     { value: "name", operator: "like", property: 6 }
  //   }
  // ]

  // groupOperator

  onValueChange(filter: []) {
    console.log(...filter);
if(Array.isArray(filter)) {
  console.log('isArray')
}
    // for (const item in filter) {
    //   console.log(item);
    // }

    }


    //
    //     if (Array.isArray(filter[item])) {
    //
    //       Object.assign(obj, filter[item])
    //       console.log('OBJ: ', obj);
    //     } else {
    //       console.log(item.toUpperCase());
    //       return
    //     }
    //
    //
    //   }
    //   //
    //   // if (dxFilter[1] == "and" || "or") {
    //   //   const obj = {}
    //   // }
    //   // console.log(dxFilter)
    // }


  }
