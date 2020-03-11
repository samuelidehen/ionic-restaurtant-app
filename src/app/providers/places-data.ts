import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { of, Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { UserData } from "./user-data";
import { PayLoad } from "../interfaces/payload";

@Injectable({
  providedIn: "root"
})
export class PlacesData {
  data: any;
  Url = `https://order.restomenu.com/api/v2/web/place/new`;
  menuUrl = `https://order.restomenu.com/api/v2/web/menu/view/`;
  private counter = new BehaviorSubject<number>(0);
  selectCount = this.counter.asObservable();
  private priceCount = new BehaviorSubject<number>(0);
  selectPrice = this.priceCount.asObservable();
  private itemName = new BehaviorSubject<string>("");
  selectedName = this.itemName.asObservable();
  extra: any;
  item = [];
  Selected: PayLoad = {
    qty: 1,
    section: 0,
    item: 0,
    data: [],
    note: ""
  };

  constructor(public http: HttpClient, public user: UserData) {}
  getData() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append(" X-Requested-With", "XMLHttpRequest");
    return this.http.get(this.Url, { headers: headers });
  }

  getMap() {
    return this.load().pipe(
      map((data: any) => {
        return data.map;
      })
    );
  }

  getMenu(slug) {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append(" X-Requested-With", "XMLHttpRequest");
    return this.http.get(this.menuUrl + slug, { headers: headers });
  }
  getRestaurants() {
    return this.load();
  }

  setSelected(section, item) {
    this.Selected.section = section;
    this.Selected.item = item;
    this.Selected.data = [];
    this.Selected.note = "";
  }

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get(this.Url);
    }
  }

  ItemCounter(message: number) {
    this.Selected.qty = message;
    this.counter.next(message);
  }
  totalPrice(message: number, title: string) {
    this.priceCount.next(message);
    this.extra = title;
  }

  ItemSelected(OptionId: number, ParentOtionId: number) {
    this.Selected.data.push({
      id: OptionId,
      invokedBy: ParentOtionId,
      value: []
    });
  }

  itemNameChange(message: string) {
    this.itemName.next(message);
  }
}
