import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ssl-test',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    SSLPinning: {
      certs: ['certificates/cert.crt', 'certificates/certificate.der']
    }
  }
};

export default config;
