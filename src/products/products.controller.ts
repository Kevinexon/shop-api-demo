import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { Category } from './dto/products-dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(
    @Query('category') category?: Category,
    @Query('sort') sort?: 'desc' | 'asc',
  ) {
    return this.productsService.getAllProducts(category, sort);
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProduct(id);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.addProduct(body);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateProductDto,
  ) {
    return this.productsService.editProduct(id, body);
  }
}
