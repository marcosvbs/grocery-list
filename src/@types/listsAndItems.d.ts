interface Item {
  id: number;
  name: string;
  amount: number;
  value: number;
  isChecked: boolean;
}
export interface List {
  id: number;
  name: string;
  items: Item[];
}
