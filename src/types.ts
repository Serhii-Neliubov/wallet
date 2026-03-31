export interface Transaction {
  id: number;
  type: 'Credit' | 'Payment';
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser: string | null;
  iconBg: string;
  faIcon: string;
  cashback: number | null;
  status: string;
  bank: string;
}
