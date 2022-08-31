import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion, LayoutGroup } from "framer-motion";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import Head from "next/head";
import { Loading } from "../components/Loading";

export default function Home() {
  const { locale } = useRouter();
  const { t } = useTranslation("home");

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
      <Head>
        <title>Deusdedit Vilar | Full Stack Dev</title>
        <link rel="shortcut icon" href="logo2.ico" type="image/x-icon" />
      </Head>

      <motion.div className="logo-container" initial="visible" whileInView="hidden" viewport={{ once: true }} variants={divAnim} transition={{ opacity: { delay: 3 }, display: { delay: 5 }, duration: 9 }}>
        <Loading />
      </motion.div>
      <main className="container">
        <Hero />

        <div className="section section-large">

          <div className="about flex flex-between gap-md">
            <div className="stiky-texts">
              <h2>{t('about.title')}</h2>
              <p style={{textAlign: "justify", marginTop: "20px"}}>{t('about.desc')}</p>
            </div>

            <div className="lang-cards flex flex-column" style={{ gap: "60px" }}>
              <div className="card-lang gap-md">
                <div>
                  <motion.img src="https://media.graphassets.com/j7nUTJtDThOdKIlVR1jv" loading="lazy" alt="" />
                </div>

                <div>
                  <h3>Python</h3>
                </div>

              </div>

              <div className="card-lang gap-md">
                <div>
                  <motion.img src="https://media.graphassets.com/XoyRduWnTq6vzAThXfcG" loading="lazy" alt="" />
                </div>

                <div>
                  <h3>Django</h3>
                </div>

              </div>

              <div className="card-lang gap-md">
                <div>
                  <motion.img src="https://media.graphassets.com/Rza595n2Rc6ZMKuF2V0q" loading="lazy" alt="" />
                </div>

                <div>
                  <h3>Typescript</h3>
                </div>

              </div>

              <div className="card-lang gap-md">
                <div>
                  <motion.img src="https://media.graphassets.com/wVqBSeHRNOrqvBRg41fw" loading="lazy" alt="" />
                </div>

                <div>
                  <h3>React</h3>
                </div>

              </div>

              <div className="card-lang gap-md">
                <div>
                  <motion.img src="https://media.graphassets.com/OpNcflykQKqORJHFlqMX" loading="lazy" alt="" />
                </div>

                <div>
                  <h3>React Native</h3>
                </div>

              </div>


            </div>

          </div>

        </div>

        <div className="section">
          <h2>{t('desc.proj')}</h2>
          {/* <div>
                        <motion.hr style={{ border: "none", borderBottom: "1px solid #fff" }} initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 1 }} />
                    </div> */}

          <motion.ul
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "30px", marginTop: "50px" }}>


            {
              data &&

              data?.projects.map((project, count) => {
                return (
                  <LayoutGroup key={count} id={`card-${count}`}>
                    <Card id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                  </LayoutGroup>
                )
              })
            }

          </motion.ul>

          {/* <div>
                        <a href="">Ver Mais</a>
                    </div> */}

        </div>

      </main>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      // Will be passed to the page component as props
    },
  };
}