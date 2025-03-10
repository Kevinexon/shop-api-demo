export type Category = 'mouse' | 'keyboard' | 'monitor' | 'headset';

export class ProductDto {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  producer: string;
  photoUrl: string;
  category: Category;
}
