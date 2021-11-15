import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomersService } from './core/services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Create a new Customer or select an existing one';
  public customers: any[] = [];
  public filteredCustomers: any[] = [];
  private unsubscribe: Subscription[] = [];

  constructor(private customerService: CustomersService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    const allCustomersSubscription = this.customerService
      .getCustomers()
      .subscribe((response) => {
        this.customers = response;
        this.filteredCustomers = [...this.customers];
      });
    this.unsubscribe.push(allCustomersSubscription);
  }

  filterCustomers($event: any) {
    let searchInput = $event.target.value;
    this.filteredCustomers = this.customers.filter((row) => {
      if (row.companyName.toLowerCase().indexOf(searchInput) !== -1) {
        return true;
      }
      return false;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.unsubscribe = [];
  }
}
