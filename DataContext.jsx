import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    initialAnalysis: {
      headlineData: {
        avatar: "",
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
        doughnut: 0,
      },
      stackBarData:{},
      languagesData: [],
      githubData: [],
      releases: [],
    },
    codeAnalysis: {
      repos: {},
    },
    contactDetails: {
      email: "",
    },
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
