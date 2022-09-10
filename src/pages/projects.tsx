import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { LayoutGroup, motion } from "framer-motion";
import { Card } from "../components/Card";
import { useState } from "react";
import classNames from "classnames";

export default function Projects() {
  const { locale } = useRouter();
  const [filter, setFilter] = useState('all')

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
            "id": "dj",
            "name": "Django",
            "langUrl": {
              "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
            }
          },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
            "id": "dj",
            "name": "Django",
            "langUrl": {
              "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
            }
          },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
          // {
          //   "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
          //   "name": "Django",
          //   "langUrl": {
          //     "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
          //   }
          // },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
          // {
          //   "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
          //   "name": "Django",
          //   "langUrl": {
          //     "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
          //   }
          // },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
          // {
          //   "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
          //   "name": "Django",
          //   "langUrl": {
          //     "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
          //   }
          // },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
          // {
          //   "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
          //   "name": "Django",
          //   "langUrl": {
          //     "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
          //   }
          // },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
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
          // {
          //   "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
          //   "name": "Django",
          //   "langUrl": {
          //     "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
          //   }
          // },
          {
            "id": "hcj",
            "name": "HTML+CSS+JS",
            "langUrl": {
              "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
            }
          },
          {
            "id": "pg",
            "name": "Postgresql",
            "langUrl": {
              "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
            }
          }
        ]
      },
    ]
  }

  const filterLangs = [
    {
      id: "all",
      name: "Todos"
    },
    {
      id: "dj",
      name: "Django"
    },
    {
      id: "hcj",
      name: "HTML (Static)"
    },
    {
      id: "rjs",
      name: "React"
    },
    {
      id: "rn",
      name: "React Native"
    },
  ]

  const filteredProjs = filter != 'all' ?
    data.projects.filter(item => { return item.langs.find(tag => { if (tag.id === filter) { return true } }); })
    : null

  return (
    <>
      <NextSeo noindex={true} title={"Projects"} />
      <main>
        <div className="container section section-large">

          <div className="lang-filter">
            <ul className="flex flex-wrap">
              {
                filterLangs.map((lang) => {
                  return (
                    <li key={lang.id}>
                      <button onClick={e => setFilter(lang.id)} className={classNames({
                        'active': filter === lang.id,
                      })}>
                        {lang.name}
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <motion.ul
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "30px", marginTop: "50px" }}>


            {/* {
              data &&

              data?.projects.map((project, count) => {
                return (
                  <LayoutGroup key={count} id={`card-${count}`}>
                    <Card id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                  </LayoutGroup>
                )
              })
            } */}

            {
              filter === 'all' ?

                data?.projects.map((project, count) => {
                  return (
                    <LayoutGroup key={count} id={`card-${count}`}>
                      <Card id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                    </LayoutGroup>
                  )
                })

                :

                filteredProjs ?
                  filteredProjs.map((project, count) => {
                    return (
                      <LayoutGroup key={count} id={`card-${count}`}>
                        <Card id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                      </LayoutGroup>
                    )
                  })

                  :

                  <p>Não tem nada aqui</p>

            }

          </motion.ul>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}