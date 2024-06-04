export interface EditForm {
  title: string;
  quantity: number;
  price: number;
  visibility: string;
  toggleEditFormVisibility: () => void;
}
