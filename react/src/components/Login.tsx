// <h1>Sign in</h1>
// <form action="/login/password" method="post">
//     <section>
//         <label for="username">Username</label>
//         <input id="username" name="username" type="text" autocomplete="username" required autofocus>
//     </section>
//     <section>
//         <label for="current-password">Password</label>
//         <input id="current-password" name="password" type="password" autocomplete="current-password" required>
//     </section>
//     <button type="submit">Sign in</button>
// </form>
import React from 'react';

const SigninPage: React.FC = () => {
  return (
    <>
      <h1>Sign in</h1>
      <form action="/login/password" method="post">
        <section>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </section>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default SigninPage;
