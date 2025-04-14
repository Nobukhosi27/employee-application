import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

export class MockFingerprintAIO extends FingerprintAIO {
  override async show(options?: any): Promise<any> {
    console.log('Mock FingerprintAIO: Simulating fingerprint authentication');
    return 'Success'; // Simulate successful authentication
  }
}