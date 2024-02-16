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
