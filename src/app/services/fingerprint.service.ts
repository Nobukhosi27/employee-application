import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private fingerprint: FingerprintAIO, private platform: Platform) {}

  async authenticate(): Promise<boolean> {
    if (!this.platform.is('cordova')) {
      console.warn('Fingerprint authentication is not available in the browser.');
      return this.mockAuthentication(); // Use mock authentication in the browser
    }

    try {
      const result = await this.fingerprint.show({
        title: 'Admin Authentication',
        subtitle: 'Authenticate to access admin features',
        description: 'Place your finger on the sensor',
        disableBackup: true, // Disable backup authentication (e.g., PIN)
      });
      return result === 'Success';
    } catch (error) {
      console.error('Fingerprint authentication failed:', error);
      return false;
    }
  }

  private async mockAuthentication(): Promise<boolean> {
    console.log('Mock Fingerprint: Simulating fingerprint authentication');
    return true; // Simulate successful authentication
  }
}