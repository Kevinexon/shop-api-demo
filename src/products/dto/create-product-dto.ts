import { Category } from './products-dto';

export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  quantity: number;
  producer: string;
  photoUrl: string;
  category: Category;
}
