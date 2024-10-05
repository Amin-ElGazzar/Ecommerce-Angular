import { Pipe, PipeTransform } from '@angular/core';
import { ProductDTO } from '../Interfaces/product-dto';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: ProductDTO[], searchText: string): ProductDTO[] {
    return products.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }
}
