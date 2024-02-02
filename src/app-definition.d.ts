declare namespace Express {
  // These open interfaces may be extended in an application-specific manner via declaration merging.
  // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
  export interface Request {
    user?: import("./models/User").User;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * database connection string
     * @example "mysql://user:pass@example.com:3396/nodedata"
     */
    DB_CONNECTION_URI: string;
    NODE_ENV: "development" | "staging" | "production";
    PORT: string;
  }
}
declare module "http" {
  interface IncomingHttpHeaders {
    /**
     * @deprecated to be replaced with oAuth JWT
     */
    "x-customer": string;
  }
}
