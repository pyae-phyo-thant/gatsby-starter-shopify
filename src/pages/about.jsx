import React from "react"
import {
  titleVideo,
  title,
  container,
  titleDesc,
  main,
  startedDesc,
  started,
  startedImg,
  appro,
  who,
  ApproImg,
  ApproDesc,
  startedDescContainer,
  ApproDescContainer
} from "./about-us.module.css"
import {Layout} from '../components/layout'
import startedSteve from "../assets/images/steven.webp"
import ApproSewing from "../assets/images/sewing.webp"




export default function About({data}) {
  console.log(data)
  return (
    <Layout>
      <div className={container}>
        <h1 className={title}>Our Story</h1>
        <p className={titleVideo}>Watch Video</p>

        <p className={titleDesc}>
          Fresh, minimalist shirts you can trust year over year
        </p>

        <div className={main}>
          <div className={started}>
            <div className={startedDescContainer}>
            <div className={startedDesc}>
              <h1>How It All Started</h1>
              <p>
                In 2016, Cuts was created by Steven Borrelli when he found
                himself struggling to find the perfect t-shirt that had enough
                quality to be worn professionally at work yet also enough style
                for a night out.
              </p>
              <br />
              <p>
                No matter where we looked nothing fit the bill, so he took
                matters into his own hands by creating something new, a product
                you could be proud to wear anytime, anywhere, without
                sacrificing comfort.
              </p>
            </div>
            </div>
            <div className={startedImg}>
              <img src={startedSteve} alt="steven" />
            </div>
          </div>
          <div className={appro}>
            <div className={ApproImg}>
              <img src={ApproSewing} alt="sewing" />
            </div>
            <div className={ApproDescContainer}>
              <div className={ApproDesc}>
                <h1>A Custom Approach</h1>
                <p>
                  It wasn’t easy, but after countless hours of research and way
                  too much coffee, we custom engineered our own Pyca fabric. We
                  knew we needed something durable yet breathable which our
                  tri-blend fabric delivers and then some.
                </p>
                <br />
                <p>
                  We’ve all been there before, you find a shirt that fits well but
                  then it is limited in colors, styles or even worse, it
                  disappears from existence since it is part of a one time
                  seasonal collection. We’re changing that.
                </p>
              </div>
            </div>
          </div>
          <div className={who}>
            <h1>Who We're Here For</h1> <br />
            <p>
              Driven, confident, and contemporary, these are guys with a
              purpose. They believe they can have it all, and they’re passionate
              about living a well-rounded life. They demand versatile
              performance and considered solutions, delivered with originality
              and expression.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
