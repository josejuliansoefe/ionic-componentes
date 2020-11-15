import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  onClick(item: any){
    console.log(item);
  }

  async verData() {
    let datos: string = "";
    this.form.forEach(item => {
      datos += item.val + " ";
      item.isChecked ? datos += " (Con Ingrediente) " : datos += " (Sin Ingrediente) ";
    });
    const alert = await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Aquí viene la data',
      message: datos,
      buttons: ['OK']
    });

    await alert.present();
  }
}
