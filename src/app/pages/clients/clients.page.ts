import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { Client, ClientsService } from 'src/app/services/clients/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  clients: Client[] = [];
  currentPage = 1;

  constructor(private clientService: ClientsService,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadClients();
  }

  async loadClients() {
    const loading = await this.loadingController.create(
      {
        message: "Loading...",
        spinner: "bubbles"
      }
    );

    await loading.present();

    this.clientService.getAllClients()
      .subscribe
      (
        (response) => {
          loading.dismiss();
          this.clients = [...this.clients, ...response];
        }
      )
  }
}
