import { Component, OnInit, HostListener } from '@angular/core';
import * as productsData from './../../assets/products.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  sortBy = 'hightolow'
  allRawProducts:any = productsData;
  sortedProducts:any[] = this.allRawProducts.default;
  products:any[] = this.sortedProducts.slice(0, 12);

  pageNumber = 0;

  constructor(private router: Router, private route: ActivatedRoute,) { 
    // debugger
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sortBy = params['sortType'];
    });

    if(this.sortBy == 'lowtohigh') {
      this.sortedProducts.sort((a, b) => (a['MRP'] > b['MRP']) ? 1 : -1)
    } else if(this.sortBy == 'hightolow') {
      this.sortedProducts.sort((a, b) => (a['MRP'] > b['MRP']) ? -1 : 1)
    }

    this.products = this.sortedProducts.slice(0, 12);
  }

  sortProducts(){
    this.router.navigateByUrl('/list?sortType=' + this.sortBy)

    if(this.sortBy == 'lowtohigh') {
      this.sortedProducts.sort((a, b) => (a['MRP'] > b['MRP']) ? 1 : -1)
    } else if(this.sortBy == 'hightolow') {
      this.sortedProducts.sort((a, b) => (a['MRP'] > b['MRP']) ? -1 : 1)
    }

    this.products = this.sortedProducts.slice(0, 12);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {

  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
   if(pos == max )   {
    this.pageNumber = this.pageNumber + 1;
    let nextPageProducts = this.sortedProducts.slice(this.pageNumber * 12, this.pageNumber * 12 + 12)
    this.products = this.products.concat(nextPageProducts);
   }
  }

}
