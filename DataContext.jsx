import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    initialAnalysis: {
      headlineData: {
        avatar: "",
        name: "",
        bio: "",
        followers: 0,
        following: 0,
        location:"",
        company: "",
        link: "",
      },
      statcardData: {
        totalContributions: 0,
        yearlyContributions: 0,
        repositories: 0,
        languages: 0,
        doughnut: 0,
        events: 0
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
