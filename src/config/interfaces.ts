export interface AppConfig {
  name: string;
  port: number;
  appEnv: string;
  nodeEnv: string;
}

export interface Config {
  app: AppConfig;
}
