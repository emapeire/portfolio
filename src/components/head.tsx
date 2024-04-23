import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <title>{metadata.title?.toString()}</title>
      <meta name='description' content={metadata.description?.toString()} />

      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content='Emanuel Peire' />
      <meta name='robots' content='index, follow' />

      <meta property='og:title' content={metadata.title?.toString()} />
      <meta
        property='og:description'
        content={metadata.description?.toString()}
      />
      <meta property='og:url' content='https://emapeire.xyz' />
      <meta
        property='og:image'
        content='https://emapeire.xyz/opengraph-image.png'
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content='Emanuel Peire' />
      <meta property='og:image:type' content='image/png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@emapeire' />
      <meta name='twitter:title' content={metadata.title?.toString()} />
      <meta
        name='twitter:description'
        content={metadata.description?.toString()}
      />
      <meta
        name='twitter:image'
        content='https://emapeire.xyz/opengraph-image.png'
      />
      <meta property='twitter:image:width' content='1200' />
      <meta property='twitter:image:height' content='630' />
      <meta property='twitter:image:alt' content='Emanuel Peire' />
      <meta property='twitter:image:type' content='image/png' />

      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#000000'></meta>

      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </head>
  )
}
