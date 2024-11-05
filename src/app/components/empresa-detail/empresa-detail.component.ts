// src/app/components/empresa-detail/empresa-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpresaService, Empresa } from '../../services/empresa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {
  empresa: Empresa | undefined;

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.empresaService.getEmpresa(id).subscribe((data: Empresa) => {
      this.empresa = data;
    });
  }
}
