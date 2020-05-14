import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens = [
    {
      local: "Porto Belo",
      descricao: "Estudos arqueológicos indicam que a região do município já é habitada há, pelo menos, há 5000 anos.[carece de fontes] A região era habitada por índios carijós, quando chegaram os primeiros navegadores, no início do século XVI. carece de fontesA região era originalmente conhecida como 'Garoupas', recebendo navegadores, mas sem habitação permanente.",
      data: 2019,
      url: "https://images.app.goo.gl/GBoqGuEax1kCoEyq6"
    },
    {
      local: "Beto Carero",
      descricao: "Beto Carrero World é um parque temático localizado no litoral norte do estado de Santa Catarina, Brasil. Inaugurado no dia 28 de dezembro de 1991, pelo seu idealizador João Batista Sérgio Murad, artisticamente conhecido como Beto Carrero, o parque foi desenvolvido em uma área de 14 milhões de metros quadrados.",
      data: 2019,
      url: "https://images.app.goo.gl/dpRsSCADz7JXFU2n7"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
