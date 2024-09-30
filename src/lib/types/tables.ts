export type ApplicationFormType = {
  id: string;
  fullName: string;
  application: string;
  description: string;
  date: string;
  status: string;
  dob: string;
};

export type NotificationType = {
  id: number;
  title: string;
  status: string;
  date: string;
  read: boolean;
  desc: string;
};

export type BillingTransactionsType = {
  id: string;
  invoice: string;
  date: string;
  amount: string;
  status: string;
};
