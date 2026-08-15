/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GOOGLE_ADS_ID?: string;
  readonly VITE_LEAD_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
