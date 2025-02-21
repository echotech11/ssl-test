import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, JsonPipe],
})
export class HomePage implements OnInit {
  http = inject(HttpClient);
  res ={};

  ngOnInit(): void {

  }

  onClick() {
    this.http.get(`https://192.168.20.93`).subscribe({
      next: (res) => this.onSuccess(res),
      error: (err) => this.onFailure(err)
    })
  }


  onSuccess(res: any) {
    console.log('success', res);
    this.res = res
  }

  onFailure(err: any) {
    console.log('failure', err);
    this.res = err
  }
}
