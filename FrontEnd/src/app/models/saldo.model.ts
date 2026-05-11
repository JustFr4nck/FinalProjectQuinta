export interface AccountBalance {
  accountId: number;
  balance: number;
}

export interface Transaction{
  id: number,
  account_id: number,
  description: string,
  amount:number,
  type: string,
  created_at: string
}
