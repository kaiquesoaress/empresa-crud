// src/app/components/empresa-list/empresa-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpresaService, Empresa } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe((data: Empresa[]) => {
      this.empresas = data;
    });
  }

  deleteEmpresa(id: number): void {
    this.empresaService.deleteEmpresa(id).subscribe(() => {
      this.loadEmpresas();
    });
  }
}
