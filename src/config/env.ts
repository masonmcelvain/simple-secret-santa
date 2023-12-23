export const MAIL_HOST = requireEnvVariable(process.env.MAIL_HOST, "MAIL_HOST");
export const MAIL_PORT = requireEnvVariable(process.env.MAIL_PORT, "MAIL_PORT");
export const MAIL_USER = requireEnvVariable(process.env.MAIL_USER, "MAIL_USER");
export const MAIL_PASS = requireEnvVariable(process.env.MAIL_PASS, "MAIL_PASS");

function requireEnvVariable(
   env: string | null | undefined,
   envName: string,
): string {
   if (env == null) {
      if (typeof window !== "undefined") {
         if (envName.startsWith("NEXT_PUBLIC")) {
            throw new Error(`environment variable "${envName}" is not defined`);
         }
      }
      throw new Error(`environment variable "${envName}" is not defined`);
   }
   return env;
}
