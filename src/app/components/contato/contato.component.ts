// src/app/components/contato/contato.component.ts
import { Component, Input } from '@angular/core';

interface Contato {
  email?: string;
  telefone?: string;
  celular?: string;
}

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  @Input() contato: Contato = {};
}
