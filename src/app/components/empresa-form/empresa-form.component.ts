// src/app/components/empresa-form/empresa-form.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpresaService, Empresa } from '../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {
  empresa: Empresa = {
    razao_social: '',
    cnpj: '',
    endereco: '',
    email: '',
    telefone: '',
    celular: ''
  };
  isEditMode = false;

  constructor(
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.empresaService.getEmpresa(id).subscribe((data: Empresa) => {
        this.empresa = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.empresaService.updateEmpresa(this.empresa.id!, this.empresa).subscribe(() => {
        this.router.navigate(['/empresas']);
      });
    } else {
      this.empresaService.addEmpresa(this.empresa).subscribe(() => {
        this.router.navigate(['/empresas']);
      });
    }
  }
}
