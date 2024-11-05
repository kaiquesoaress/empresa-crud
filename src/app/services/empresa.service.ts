// src/app/services/empresa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Empresa {
    id?: number;
    razao_social: string;
    cnpj: string;
    endereco?: string;
    email?: string;
    telefone?: string;
    celular?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
    private apiUrl = 'http://localhost:8000/api/empresas';

    constructor(private http: HttpClient) {}

    getEmpresas(): Observable<Empresa[]> {
        return this.http.get<Empresa[]>(this.apiUrl);
    }

    getEmpresa(id: number): Observable<Empresa> {
        return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
    }

    addEmpresa(empresa: Empresa): Observable<Empresa> {
        return this.http.post<Empresa>(this.apiUrl, empresa);
    }

    updateEmpresa(id: number, empresa: Empresa): Observable<Empresa> {
        return this.http.put<Empresa>(`${this.apiUrl}/${id}`, empresa);
    }

    deleteEmpresa(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
