import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion, LayoutGroup } from "framer-motion";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

const cardLangs = [
  {
    "id": "py",
    "name": "Python",
    "img": "https://media.graphassets.com/j7nUTJtDThOdKIlVR1jv",
  },
  {
    "id": "dj",
    "name": "Django",
    "img": "https://media.graphassets.com/XoyRduWnTq6vzAThXfcG"
  },
  {
    "id": "ts",
    "name": "Typescript",
    "img": "https://media.graphassets.com/Rza595n2Rc6ZMKuF2V0q"
  },
  {
    "id": "rjs",
    "name": "React",
    "img": "https://media.graphassets.com/wVqBSeHRNOrqvBRg41fw"
  },
  {
    "id": "rn",
    "name": "React Native",
    "img": "https://media.graphassets.com/OpNcflykQKqORJHFlqMX"
  },
  {
    "id": "ex",
    "name": "Expo",
    "img": "https://media.graphassets.com/X6W1F8AQxWXEMFnX7Lr9"
  },
  {
    "id": "sass",
    "name": "Sass",
    "img": "https://media.graphassets.com/3cANQENsTC6QIbiN8kD1"
  },
  {
    "id": "pg",
    "name": "Postgresql",
    "img": "https://media.graphassets.com/hQb3EujNRHq7rdtgycmC"
  },
  {
    "id": "gql",
    "name": "GraphQL",
    "img": "https://media.graphassets.com/amF5g6yOQCqNcGyn2d2m"
  },
]

interface GetProjectsQueryResponse {
  projects: {
      id: string
      title: string
      siteUrl: string
      githubUrl: string
      description: string
      image: {
          url: string
      }
      langs: {
          id: string;
          name: string;
          langUrl: {
              url: string
          }
      }[]
  }[]
}

type Params = {
  locale: string
}

export default function Home({projects}: GetProjectsQueryResponse) {
  // const { locale } = useRouter();
  const { t } = useTranslation("home");

  console.log("RENDERIZOU")

  const data = {
    "projects": [
      {
        "id": "cl6wgpwivhcmb0disx0ix0ive",
        "title": "Flor de Chita E-commerce",
        "siteUrl": "https://flordechitateste.herokuapp.com/",
        "githubUrl": "https://google.com",
        "description": "Site E-commerce feito para uma loja de roupas.",
        "image": {
          "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
        },
        "langs": [
          {
            "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
            "name": "Django",
            "langUrl": {
              "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
            }
          },
          {
            "id": "cl6wgk1bfhc0u0ck38l2oukzb",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "cl78bu48ed7650dim30cgs89i",
            "name": "Postgresql",
            "langUrl": {
              "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
            }
          }
        ]
      },
      {
        "id": "cl6wgpwivhcmb0disx0ix0ive",
        "title": "Flor de Chita E-commerce",
        "siteUrl": "https://flordechitateste.herokuapp.com/",
        "githubUrl": null,
        "description": "Site E-commerce feito para uma loja de roupas.",
        "image": {
          "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
        },
        "langs": [
          {
            "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
            "name": "Django",
            "langUrl": {
              "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
            }
          },
          {
            "id": "cl6wgk1bfhc0u0ck38l2oukzb",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "cl78bu48ed7650dim30cgs89i",
            "name": "Postgresql",
            "langUrl": {
              "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
            }
          }
        ]
      },
      {
        "id": "cl6wgpwivhcmb0disx0ix0ive",
        "title": "Flor de Chita E-commerce",
        "siteUrl": "https://flordechitateste.herokuapp.com/",
        "githubUrl": null,
        "description": "Site E-commerce feito para uma loja de roupas.",
        "image": {
          "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
        },
        "langs": [
          {
            "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
            "name": "Django",
            "langUrl": {
              "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
            }
          },
          {
            "id": "cl6wgk1bfhc0u0ck38l2oukzb",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "cl78bu48ed7650dim30cgs89i",
            "name": "Postgresql",
            "langUrl": {
              "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
            }
          }
        ]
      }
    ]
  }

  const divAnim = {
    visible: { opacity: 1, display: "flex" },
    hidden: { opacity: 0, display: "none" },
  }

  return (
    <>
      <NextSeo title="Home" />

      {/* <motion.div className="logo-container" initial="visible" whileInView="hidden" viewport={{ once: true }} variants={divAnim} transition={{ opacity: { delay: 3 }, display: { delay: 5 }, duration: 9 }}>
        <Loading />
      </motion.div> */}


      <main className="container">
        <Hero />

        <section className="section section-large" style={{ paddingTop: 0 }}>

          <div className="about flex flex-between gap-md">
            <div className="sticky-texts">
              <h2>{t('about.title')}</h2>
              <p>{t('about.desc.first')}</p>
              <p>{t('about.desc.second')}</p>
              {/* <p style={{textAlign: "justify", marginTop: "20px"}}>{t('about.desc.third')}</p> */}

            </div>

            <ul className="lang-cards flex">

              {
                cardLangs.map((card, count) => {
                  return (
                    <motion.li key={card.id} className="card-lang gap-md" initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: count * .05 }} viewport={{ once: true }} >
                      <div>
                        <motion.img src={card.img} loading="lazy" alt="" />
                      </div>
                    </motion.li>
                  )
                })
              }

            </ul>

          </div>

        </section>

        <section className="section" id="home_projects">
          <h2>{t('projects.title')}</h2>
          {/* <div>
                        <motion.hr style={{ border: "none", borderBottom: "1px solid #fff" }} initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 1 }} />
                    </div> */}

          <motion.ul
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "30px", marginTop: "50px" }}>


            {
              data &&

              data?.projects.map((project, count) => {
                return (
                  <li key={count}>
                    <LayoutGroup id={`card-${count}`}>
                      <Card imageUrl={project.image.url} id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                    </LayoutGroup>
                  </li>
                )
              })
            }

          </motion.ul>

          <div className="see_more">
            {/* <p>{t('projects.likeit')}</p> */}
            <Link href={"/projects"}>
              <a >{t('projects.seemore')}</a>
            </Link>
          </div>

        </section>

      </main>

    </>
  );
}

export async function getStaticProps({ locale }: Params) {

  // const { data } = await client.query({
  //   query: gql`
  //   query MyQuery($locale: [Locale!]!) {
  //     projects(stage: PUBLISHED, locales: $locale) {
  //       id
  //       title
  //       siteUrl
  //       githubUrl
  //       description
  //       image {
  //         url
  //       }
  //       langs {
  //         ... on LangTag {
  //           id
  //           name
  //           abbreviation
  //           langUrl {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `,
  //   variables: {
  //     locale: [locale]
  //   }
  // });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home","common"])),
      // projects: data
    },
  };
}