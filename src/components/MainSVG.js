import React, { useEffect } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import MotionBar from './MotionBar'

export default function MainSVG() {
  const { scrollYProgress } = useViewportScroll()

  useEffect(
    scrollYProgress => {
      if (window) {
        window.addEventListener(`scroll`, scrollYProgress =>
          console.log(scrollYProgress)
        )
      }
      return () => {
        window.removeEventListener(`scroll`)
      }
    },
    [scrollYProgress]
  )

  return (
    <motion.svg
      // style={{ scaleX: scrollYProgress }}
      // xmlns: dc="http://purl.org/dc/elements/1.1/"
      // xmlns: cc="http://creativecommons.org/ns#"
      // xmlns: rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      // xmlns: svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 888.00636 552.78086"
      height="552.78086"
      width="888.00636"
      data-name="Layer 1"
      id="f871edae-d68c-46d4-8324-c4853318dddd"
    >
      <defs id="defs113" />
      <title id="title2">online_articles</title>
      <rect
        id="rect4"
        fill="#e6e6e6"
        height="332"
        width="182"
        y="108"
        x="615.00687"
      />
      <path
        id="path6"
        fill="#fff"
        transform="translate(-155.99682 -173.60957)"
        d="M788.00369,596.60957h148v-298h-148Z"
      />
      <rect
        id="rect8"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="188.91458"
        x="688.874"
      />
      <rect
        id="rect10"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="202.79994"
        x="688.874"
      />
      <rect
        id="rect12"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="216.68531"
        x="688.874"
      />
      <rect
        id="rect14"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="188.97418"
        x="647.80523"
      />
      <rect
        id="rect16"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="257.91458"
        x="688.874"
      />
      <rect
        id="rect18"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="271.79994"
        x="688.874"
      />
      <rect
        id="rect20"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="285.68531"
        x="688.874"
      />
      <rect
        id="rect22"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="257.97418"
        x="647.80523"
      />
      <rect
        id="rect24"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="326.91458"
        x="688.874"
      />
      <rect
        id="rect26"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="340.79994"
        x="688.874"
      />
      <rect
        id="rect28"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="354.68531"
        x="688.874"
      />
      <rect
        id="rect30"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="326.97418"
        x="647.80523"
      />
      <rect
        id="rect32"
        fill="#e6e6e6"
        height="332"
        width="182"
        y="108"
        x="107.00687"
      />
      <path
        id="path34"
        fill="#fff"
        transform="translate(-155.99682 -173.60957)"
        d="M280.00369,596.60957h148v-298h-148Z"
      />
      <rect
        id="rect36"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="188.91458"
        x="180.874"
      />
      <rect
        id="rect38"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="202.79994"
        x="180.874"
      />
      <rect
        id="rect40"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="216.68531"
        x="180.874"
      />
      <rect
        id="rect42"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="188.97418"
        x="139.80523"
      />
      <rect
        id="rect44"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="257.91458"
        x="180.874"
      />
      <rect
        id="rect46"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="271.79994"
        x="180.874"
      />
      <rect
        id="rect48"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="285.68531"
        x="180.874"
      />
      <rect
        id="rect50"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="257.97418"
        x="139.80523"
      />
      <rect
        id="rect52"
        fill="#e6e6e6"
        height="4.01391"
        width="43.22325"
        y="326.91458"
        x="180.874"
      />
      <rect
        id="rect54"
        fill="#e6e6e6"
        height="4.01391"
        width="75.3345"
        y="340.79994"
        x="180.874"
      />
      <rect
        id="rect56"
        fill="#e6e6e6"
        height="4.01391"
        width="75.26073"
        y="354.68531"
        x="180.874"
      />
      <rect
        id="rect58"
        fill="#e6e6e6"
        height="32.11125"
        width="32.11125"
        y="326.97418"
        x="139.80523"
      />
      <ellipse
        id="ellipse60"
        fill="#e6e6e6"
        ry="18"
        rx="444.00318"
        cy="449"
        cx="444.00318"
      />
      <rect
        id="rect62"
        fill="#3f3d56"
        height="452"
        width="247.78313"
        x="328.1153"
      />
      <path
        id="path64"
        fill="#fff"
        transform="translate(-155.99682 -173.60957)"
        d="M494.81971,614.10957h226.368v-429h-226.368Z"
      />
      <MotionBar
        delayNumber={1}
        id="rect66"
        fill="#f9a826"
        height="5.46471"
        width="58.84611"
        y="110.16081"
        x="428.6814"
      />
      <rect
        id="rect68"
        fill="#e6e6e6"
        height="5.46471"
        width="102.56383"
        y="129.06498"
        x="428.6814"
      />
      <rect
        id="rect70"
        fill="#e6e6e6"
        height="5.46471"
        width="102.4634"
        y="147.96916"
        x="428.6814"
      />
      <motion.rect
      animate={ {rotate: 360}}
      transition={{ duration: 2}}
        id="rect72"
        fill="#f9a826"
        height="43.71772"
        width="43.71772"
        y="110.24195"
        x="372.7685"
      />
      <MotionBar
        delayNumber={2}
        id="rect74"
        fill="#f9a826"
        height="5.46471"
        width="58.84611"
        y="204.10057"
        x="428.6814"
      />
      <rect
        id="rect76"
        fill="#e6e6e6"
        height="5.46471"
        width="102.56383"
        y="223.00474"
        x="428.6814"
      />
      <rect
        id="rect78"
        fill="#e6e6e6"
        height="5.46471"
        width="102.4634"
        y="241.90892"
        x="428.6814"
      />
      <rect
        id="rect80"
        fill="#f9a826"
        height="43.71772"
        width="43.71772"
        y="204.18171"
        x="372.7685"
      />
      <MotionBar
        delayNumber={3}
        id="rect82"
        fill="#f9a826"
        height="5.46471"
        width="58.84611"
        y="298.04033"
        x="428.6814"
      />
      <rect
        id="rect84"
        fill="#e6e6e6"
        height="5.46471"
        width="102.56383"
        y="316.9445"
        x="428.6814"
      />
      <rect
        id="rect86"
        fill="#e6e6e6"
        height="5.46471"
        width="102.4634"
        y="335.84868"
        x="428.6814"
      />
      <rect
        id="rect88"
        fill="#f9a826"
        height="43.71772"
        width="43.71772"
        y="298.12147"
        x="372.7685"
      />
      <path
        id="path90"
        fill="#ffb8b8"
        transform="translate(-155.99682 -173.60957)"
        d="M517.50369,494.10957l-3,13s1,30-7,27-6-29-6-29l7-13Z"
      />
      <circle id="circle92" fill="#ffb8b8" r="20" cy="158" cx="317.00687" />
      <path
        id="path94"
        fill="#ffb8b8"
        transform="translate(-155.99682 -173.60957)"
        d="M457.50369,337.10957l-2,29,25,3s0-24,2-27S457.50369,337.10957,457.50369,337.10957Z"
      />
      <path
        id="path96"
        fill="#575a89"
        transform="translate(-155.99682 -173.60957)"
        d="M513.00369,374.60957,480.621,360.89614s-15.469-11.93614-24.54315-3.11135l-4.07412,5.82478s-36,14-36,25l14,55s-8,31,4,33l65,6s9-11,1-25l3-33Z"
      />
      <path
        id="path98"
        fill="#575a89"
        transform="translate(-155.99682 -173.60957)"
        d="M491.00369,375.60957l22-1s7,2,12,21,6,50,6,50l-12,56-15-2,6-54-10-36Z"
      />
      <path
        id="path100"
        fill="#575a89"
        transform="translate(-155.99682 -173.60957)"
        d="M428.00369,381.60957l-10.84646,3.378s-9.15354,13.622-9.15354,20.622-4,60-4,60l26,43,8-21-16-27,13-33Z"
      />
      <path
        id="path102"
        fill="#2f2e41"
        transform="translate(-155.99682 -173.60957)"
        d="M502.00369,480.60957l-71.8968-6.32585s-7.1032,45.32585-6.1032,63.32585,2,46,2,46l-8,122,31-4,4-101,13-55,15,70,10,90,27-3-9-109S517.00369,495.60957,502.00369,480.60957Z"
      />
      <path
        id="path104"
        fill="#2f2e41"
        transform="translate(-155.99682 -173.60957)"
        d="M512.00369,697.60957l9,3s19-5,14,8-19,11-19,11-17,13-24,3l4-21Z"
      />
      <path
        id="path106"
        fill="#2f2e41"
        transform="translate(-155.99682 -173.60957)"
        d="M439.00369,697.60957l9,3s19-5,14,8-19,11-19,11-17,13-24,3l4-21Z"
      />
      <path
        id="path108"
        fill="#2f2e41"
        transform="translate(-155.99682 -173.60957)"
        d="M457.50369,349.10957s-21-15-10-33c7.63117-12.48738,23.44411-11.49893,32.414-9.72226a15.154,15.154,0,0,1,11.086,8.72226c1.5,3.5,1.5,7-4.5,7-12,0-6,9-6,9s-8,2-6,9S457.50369,349.10957,457.50369,349.10957Z"
      />
    </motion.svg>
  )
}
