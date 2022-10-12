import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: DataSource;
  title = 'dx-app';

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
        filter: [
          ["value", ">", "40"],
          "or",
          [
            ["name", "=", "item3"],
            "or",
            ["name", "=", "item6"]
          ]
        ]
      }
    )
  }
}
