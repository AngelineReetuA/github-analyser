import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({
    initialAnalysis: {
      headlineData: {
        login: "",
        bio: "",
        followers: 0,
        company: "",
        link: "",
      },
      statcardData: {
        totalContributions: 0,
        repositories: 0,
        languages: 0,
      },
      languagesData: [{ label: "", data: 0 }],
      githubData: {
        repoName: "",
        repoDesc: "",
        repoLang: "",
        repoStars: "",
        repoLink: "",
      },
      releases: [],
    },
    codeAnalysis: {
      repos: {},
    },
    contactDetails: {
      email: "",
    },
  });

  // first api normal - basic user details /users/{uname}
  // ---- login, bio, followers, company, link
  // ---- repositories(public_repos)
  // ---- email
  // second api - contributions .json api
  // ---- totalContributions
  // third api - /repos 
  // ---- languages, languagesData(choose top 3) (recur function)
  // ---- githubData (choose 2 with the highest size/first two)
  // ---- repos

  return (
    <DataContext.Provider value={{ inputValue, setInputValue, data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
