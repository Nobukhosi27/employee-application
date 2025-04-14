import { Injectable } from '@angular/core';
import { FingerprintService } from './fingerprint.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fingerprint: FingerprintService) {}

  async authenticate(): Promise<boolean> {
    return this.fingerprint.authenticate();
  }
}