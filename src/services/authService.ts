import { AuthData } from "../contexts/Auth";

async function signIn( email: string, pass: string ): Promise<AuthData> {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      if (email === "user@gmail.com" && pass === "user"){
        resolve({
          token: "asdrfwefdfgtyunfg4tfSDFV12tdefg5",
          email: "oiCasada@gmail.com",
          name: "War",
        });
      } else {
        reject("Credenciais inválidas");
      }
    }, 500);
  });
}

export const authService = { signIn };