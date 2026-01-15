
export interface TaskItem {
  id: string;
  title: string;
  type: string;
  profitLabel: string;
  description: string;
  price: string;
  benefit: string;
  reward: string;
  income: string;
  tag: string;
  imageUrl: string;
  isRightAligned: boolean;
  tagColor: string;
  productLetter: string; // Properti baru untuk A, B, C, atau D
}

export interface SiteHeader {
  workPage: string;
  product: string;
  payment: string;
  account: string;
  managementStatus: string;
}
