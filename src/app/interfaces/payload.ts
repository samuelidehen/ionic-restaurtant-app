import {  Observable } from 'rxjs';

export interface PayLoad {
  qty: number;
  section: number;
  item: number;
  data: Option[];
  note: string;
}

interface Option {
  id: number;
  invokedBy: number;
  value: Value[];
}

interface Value {
 id: number;
 prefix: string;
 price: string;
 label: [];
}
