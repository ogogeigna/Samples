import { Component } from "../../../node_modules/@angular/core";
import { ViewController } from "../../../node_modules/ionic-angular";

@Component({
    selector: 'page-sl-options',
    template:`
        <ion-grid text-center>

            <ion-row>
                <ion-col>
                    <h3>Store & Load</h3>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    <button ion-button outline (click)="onAction('load')">Load List</button>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    <button ion-button outline (click)="onAction('store')">Save List</button>
                </ion-col>
            </ion-row>

        </ion-grid>
    `
})

export class DatabaseOptionsPage {

    // inject the ViewController
    constructor(private viewCtrl: ViewController) {}

    onAction(action: string) {
        this.viewCtrl.dismiss({action: action});
    }

}