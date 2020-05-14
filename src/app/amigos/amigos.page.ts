import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular'

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
    amigos = [
      {
        nome: 'Felipe Ameno',
        idade: 23,
        nivelDeAmizade: 5
      },
      {
        nome: 'Brenner',
        idade: 20,
        nivelDeAmizade: 5
      },
      {
        nome: 'Pedro',
        idade: 22,
        nivelDeAmizade: 5
      },
      {
        nome: 'Otavio',
        idade: 24,
        nivelDeAmizade: 5
      },
      {
        nome: 'Rafael',
        idade: 24,
        nivelDeAmizade: 4
      }
    ];
    constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async deleteAmigoAction(nome: string){
    let buttons = [
      { text: "Deletar", role: "destructive",
      handler: () => {
        this.deleteAmigo(nome);
      }},
      { text: "Editar"},
      { text: "Cancelar", role: "cancel"}
    ];
    const actionSheet = await this.actionSheetController.create({
      header: "Ações",
      buttons: buttons
    });
    await actionSheet.present();
  }

  deleteAmigo(nome: String){
    this.amigos.forEach((item, index)=>{
      if(item.nome === nome) this.amigos.splice(index,1);
    })
  }
 

}
