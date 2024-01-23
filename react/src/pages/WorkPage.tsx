import React, { useEffect, useState } from "react";
import "../css/WorkPage.css";

function WorkPage() {
  const projects = [
    { imageUrl: "/android-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/aws-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/discord-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/google-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/javascript-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/kotlin-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/nightbot-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/steam-logo.svg", projectUrl: "https://github.com/" },
    { imageUrl: "/ubuntu-logo.svg", projectUrl: "https://github.com/" },
  ];

  const [githubInfo, setGithubInfo] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3000/get")
      .then((response) => response.json())
      .then((body: any) => {
        setGithubInfo(body);
        console.log("working?", body);
      })
      .catch((err) => console.log(err));
  }, []);

  function Project(props: any) {
    return (
      <a className="projectImage" target="_" href={props.projectUrl}>
        <img src={props.imageUrl}></img>
      </a>
    );
  }

  return (
    <>
      <div id="projectsTitleContainer">
        <h1>Projects</h1>
        {!!githubInfo ? (
          <h2>
            My GitHub currently has{" "}
            {githubInfo.public_repos + githubInfo.total_private_repos}{" "}
            repositories!
            <br /> Check some of them out below.
          </h2>
        ) : (
          <p>loading...</p>
        )}
        <div className="pageDivider"></div>
      </div>
      <div id="projectList">
        {projects.map((project) => (
          <Project key={project.imageUrl} {...project} />
        ))}
      </div>
    </>
  );
}

export default WorkPage;
