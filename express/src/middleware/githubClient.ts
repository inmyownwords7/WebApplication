// import { Octokit } from "octokit";
// import dotenv from "dotenv";
// import path from "path";
//
// // let a = path.resolve(path.normalize('G:\\Github\\WebApp\\WebApplication\\.env'))
// let env = path.join("C:\\Users\\Inmyo\\OneDrive\\Documents\\GitHub\\WebApplication", ".env");
// //let env = path.join("C:\\Users\\Inmyo\\OneDrive\\Documents\\GitHub\\WebApplication", ".env");
// // console.log(env)
// // dotenv.config({path: path.join(path.resolve('./', '.env'))});
// dotenv.config({ path: env });
//
// export async function authenticate() {
//   const octokit = new Octokit({
//     auth: process.env.GITHUB_ACCESS_TOKEN,
//   });
//
//   console.log(process.env.GITHUB_ACCESS_TOKEN + " github key");
//   //   const {
//   //     data: { login },
//   //   } = await octokit.rest.users.getAuthenticated();
//   //   console.log("Hello, %s", login);
//   // }
//   try {
//     const res = await octokit.rest.users.getAuthenticated();
//     const userData = res.data;
//     console.log(userData)
//   } catch (err) {
//     console.error(err.message);
//   }
// }
