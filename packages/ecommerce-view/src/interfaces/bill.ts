export interface Bill {
  clientNo: string;
  clientInfo: {
    name: string;
    email: string;
    phone?: string;
    country: string;
  };
  billDetails: {
    id: string;
    date: string;
    products: {
      productName: string;
      productCategory: string;
      productPrice: number;
      amount: number;
      tax: number;
    }[];
    total: number;
  };
}
