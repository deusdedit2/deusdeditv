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
          "url": "https://thumbs.dreamstime.com/b/seascape-abstrato-com-palmeira-fundo-tropical-da-praia-luz-do-bokeh-borr-o-mar-calmo-e-c-u-conceito-das-f-rias-de-ver-146142855.jpg"
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
          "url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
          "url": "http://pm1.narvii.com/7349/20496af691a3f529d64bdffade368e123b204328r1-640-526v2_uhq.jpg"
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
          "url": "https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg"
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
          "url": "https://64.media.tumblr.com/51ce939c3b7570134515eea1c7eb59ff/tumblr_n2pgeb86ro1tw7pebo1_400.jpg"
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
          "url": "https://img-9gag-fun.9cache.com/photo/adKLM9V_460s.jpg"
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
                      <Card imageUrl={project.image.url} id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                    </LayoutGroup>
                  )
                })

                :

                filteredProjs ?
                  filteredProjs.map((project, count) => {
                    return (
                      <LayoutGroup key={count} id={`card-${count}`}>
                        <Card imageUrl={project.image.url} id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 150 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
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