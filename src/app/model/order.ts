import { OrderDetail } from './orderDetail';
export class Order {
    accountId: Number;
    createdDate:string;
    isFinished: boolean;
    orderDetails: OrderDetail[];
}