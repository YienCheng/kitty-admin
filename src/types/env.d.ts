/// <reference types="vite/client" />

/**
 * 环境变量类型定义
 */
interface ImportMetaEnv {
  // The base url of the application
  readonly VITE_BASE_URL: string;

  /** The title of the application */
  readonly VITE_APP_TITLE: string;

  /** The api base url of the application */
  readonly VITE_API_BASE_URL: string;
}
