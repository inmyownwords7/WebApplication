{/* <h1>Sign up</h1>
<form action="/signup" method="post">
    <section>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required>
    </section>
    <section>
        <label for="new-password">Password</label>
        <input id="new-password" name="password" type="password" autocomplete="new-password" required>
    </section>
    <button type="submit">Sign up</button>
</form> */}
import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <>
      <h1>Sign up</h1>
      <form action="/signup" method="post">
        <section>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" autoComplete="username" required />
        </section>
        <section>
          <label htmlFor="new-password">Password</label>
          <input id="new-password" name="password" type="password" autoComplete="new-password" required />
        </section>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignupPage;
