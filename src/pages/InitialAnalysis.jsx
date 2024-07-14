import { useState } from "react";
import Doughnut from "../components/Doughnut";
import StackedBarChart from "../components/StackedBar";
import StatCard from "../components/StatCard";
import GithubCard from "../components/GithubCard";
import Headline from "../components/Headline";
import Releases from "../components/Releases";

export default function InitialAnalysis() {
  // API REQ

  const [data, setData] = useState({
    head: {
      photoURL:
        "https://lh3.googleusercontent.com/a-/ALV-UjXDEBPTzmwZfbW1GCPpLKO6VGLJtB7osFYGEEgU1gsFRbOImwhrq_UN6x1sTr96Y3Oir_ar0Tl3ZCNTZMm-dzwCin-wWnDgRtlgry4SF0zYlraCd3j7IQMTMlKR2o3t65aqqvQNo3RpN84pFhIp_LR2eK9CnZdMngX_s_dvmk-P6NiDrsxXrILiB6CGHazimm4V_P_UpSX-XTiCjnqnE2jbjxWi1O_kCYIC8bQFIlSj2f6JPHqO65HSfH-k6kuDCKaGwBG0lQ5nxd4BcIM7noBAD3XPG1WcCsGr_cMYRdGcKbYeZxLjwTM40R_cPJgVRWDcIEHK3DgckUzJqsavttbxiZWpJsp184mYrcyf9tesobASVQpPFkPQJGYKg6v7Xq_1qRl_ryGfU3bUj8C0u5Ui3b3p8zoRqx1QDYR1N8u2SdR3wpg2X2qaJ9vSSMWqM8T_f9JSHqFPnqUM6I3venvEJLeoZpvfmaertEvNvG1IY2F7wyS_OT_J_1i-A6f1A1BWprI3kcbAedtrlWfu7KtsMRN_kxa9qQu85KbJevbFD6Ih-bXSh-qv35aLkiz97XkNQaMmxlx2-h43V65JhiDv5He0PHAisMBTy7P2QPmFO9eyHVMFOHfQrlMmaOaar2fo6g6XwPG0jGYoYieSz1B-rIHTqkpW6hP-rqUopeUI9OBYxPB9bqkOFqCC_P2I6H5zWc6Awe71oPeB0wD8RZ-WqTMMY0tN-f0LgtX1WTtH5dDYSQQyoKoUh7q2WlLMiBfooqoGYH1N3k6BIxDu0igWaEqry0aznPkWf7WgN1cfIb8VlKwbWdO5yd0KkyGaIyc3wW1WtzUCkhQweJ2LeX4Ml3aJRXRtgT_dZ4GqAqdxDWPoa67BdJNgCNb0-l15cLS0l0DhHeqws9MZtctnGpnB_9lkNvd9E-TlTzkCHEzLVGX7iBxk6SujFwmLUxICWTjlPpdVTOb7dzNIC_yMod2lvpWU=s288-c-no",
      name: "Angeline Reetu A",
      bio: "Software Engineer",
      followers: "5",
      emp: "Sysvine Technologies",
      link: "https://www.google.com",
    },
    repositories: "",
    commits: "",
    repos: [
      {
        repoName: "",
        repoDesc: "",
        repoLang: "",
        repoStars: "",
      },
    ],
    links: [],
  });

  return (
    <>
      <div className="container-fluid">
        <Headline
          photoURL={data.head.photoURL}
          name={data.head.name}
          bio={data.head.bio}
          followers={data.head.followers}
          emp={data.head.emp}
          link={data.head.link}
        />
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="d-flex">
            <StatCard statName="ACTIVITY" cardPadding="p-4">
              <Doughnut />
            </StatCard>
            <div className="vr"></div>
            <StatCard statName="REPOSITORIES" cardPadding="p-5">
              300+
            </StatCard>
            <div className="vr"></div>
            <StatCard statName="COMMITS" cardPadding="p-5">
              40+
            </StatCard>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2">
            <StackedBarChart />
          </div>
          <div className="col-md-6">
            <div className="card bg-light border-dark px-3 pt-1">
              <div className="card-title fs-3 fw-bold">Highlights</div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <GithubCard
                      repoName="GithubRepoName"
                      repoDesc="GithubRepoDesc"
                      repoLang="Java"
                      repoStars="21"
                    />
                  </div>
                  <div className="col">
                    <GithubCard
                      repoName="GithubRepoName"
                      repoDesc="GithubRepoDesc"
                      repoLang="Java"
                      repoStars="21"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Releases
              links={data.links.link1}
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
