import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { METADATA } from '../../../constants'
import { AnimatePresence } from 'framer-motion'

const Cursor = dynamic(() => import("../elements/Cursor"), { ssr: false })
const ProgressIndicator = dynamic(() => import("../elements/ProgressIndicator"), { ssr: false })

import Header from "../header/Header";
import NavigationMenu from "../header/NavigationMenu";

interface Props {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props:Props) => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={METADATA.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:url" content={METADATA.siteUrl} />
        <meta property="og:site_name" content={METADATA.title} />
        <meta property="og:image" content="https://tonydugue.fr/assets/preview.jpeg" />
        <meta property="og:image:secure_url" content={METADATA.siteUrl} />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>

        <ProgressIndicator />

        <Header>
          <NavigationMenu />
        </Header>

        <Cursor isDesktop />

        <main>{props.children}</main>
      </AnimatePresence>
    </>
  )
}

export default Layout;
