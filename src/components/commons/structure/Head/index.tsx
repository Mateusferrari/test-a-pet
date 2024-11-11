// External Libraries
import React from 'react'
import NextHead from 'next/head'

interface HeadProps {
  title: string
  image?: string
}

export const Head: React.FC<HeadProps> = ({ title, image }) => {
  // Functions
  function getTitle() {
    return `${title} | Test a pet`
  }

  return (
    <NextHead>
      <title>{getTitle()}</title>

      <meta name="title" content={getTitle()} />

      <meta property="og:title" content={getTitle()} />

      <meta property="og:type" content="article" />

      <meta property="og:image" content={image} />

      <link sizes="180x180" rel="apple-touch-icon" href="/favicon/dog.svg" />

      <link rel="icon" sizes="32x32" type="image/png" href="/favicon/dog.svg" />

      <link rel="icon" sizes="16x16" type="image/png" href="/favicon/dog.svg" />

      <link rel="manifest" href="/favicon/dog.svg" />

      <meta name="msapplication-TileColor" content="#eb86f7dd" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>
  )
}
