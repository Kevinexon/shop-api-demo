import { Injectable } from '@nestjs/common';
import { Category, ProductDto } from 'src/products/dto/products-dto';
import { CreateProductDto } from './dto/create-product-dto';

const items: ProductDto[] = [
  {
    id: 1,
    name: 'mouse',
    description: 'mouse description',
    price: 10,
    quantity: 10,
    producer: 'producer',
    photoUrl: 'photoUrl',
    category: 'mouse',
  },
  {
    id: 2,
    name: 'keyboard',
    description: 'keyboard description',
    price: 15,
    quantity: 10,
    producer: 'producer',
    photoUrl: 'photoUrl',
    category: 'keyboard',
  },
  {
    id: 3,
    name: 'monitor',
    description: 'monitor description',
    price: 5,
    quantity: 10,
    producer: 'producer',
    photoUrl: 'photoUrl',
    category: 'monitor',
  },
  {
    id: 4,
    name: 'headset',
    description: 'headset description',
    price: 25,
    quantity: 10,
    producer: 'producer',
    photoUrl: 'photoUrl',
    category: 'headset',
  },
];

@Injectable()
export class ProductsService {
  getAllProducts(category?: Category, sort?: 'desc' | 'asc'): ProductDto[] {
    let result = [...items];
    if (category) result = result.filter((item) => item.category === category);
    if (sort === 'desc') {
      result = result.sort((a, b) => b.price - a.price);
    } else if (sort === 'asc') {
      result = result.sort((a, b) => a.price - b.price);
    }
    return result;
  }

  getProduct(id: number) {
    return items.find((item) => item.id === id);
  }

  addProduct(product: CreateProductDto): ProductDto {
    const last = items.sort((a, b) => a.id - b.id)[items.length - 1];
    const created = { ...product, id: last.id + 1 };
    items.push(created);
    return created;
  }

  deleteProduct(id: number): boolean {
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    return true;
  }

  editProduct(id: number, body: CreateProductDto): boolean {
    const index = items.findIndex((item) => item.id === id);
    items[index] = { ...items[index], ...body };
    return true;
  }
}
