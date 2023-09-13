import { Component, OnInit, inject } from '@angular/core';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DatatableService } from '../../services/datatable-service.service';
import { ICustomer } from '../../types/customer.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datatable-container',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule],
  providers: [DatatableService, provideAnimations(), provideNoopAnimations()],
  templateUrl: './datatable-container.component.html',
  styleUrls: ['./datatable-container.component.scss'],
})
export default class DatatableContainerComponent implements OnInit {
  private datatableService = inject(DatatableService);
  customers: ICustomer[] = [];

  ngOnInit(): void {
    this.customers = this.datatableService.getCustomers();
  }
}
