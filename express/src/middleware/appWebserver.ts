import url from "url";
async function createNodeMiddleware() {
  const code = new URL(location.href).searchParams.get("code");
  if (code) {
    // remove ?code=... from URL
    const path =
      location.pathname +
      location.search.replace(/\b(code|state)=\w+/g, "").replace(/[?&]+$/, "");
    history.replaceState({}, "", path);

    // exchange the code for a token with your backend.
    // If you use https://github.com/octokit/oauth-app.js
    // the exchange would look something like this
    const response = await fetch("/api/github/oauth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    const { token } = await response.json();
    // `token` is the OAuth Access Token that can be use

    const { Octokit } = await import("https://esm.sh/@octokit/core");
    const octokit = new Octokit({ auth: token });

    const {
      data: { login },
    } = await octokit.request("GET /user");
    alert("Hi there, " + login);
  }
}
