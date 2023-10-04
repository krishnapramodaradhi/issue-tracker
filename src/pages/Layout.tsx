import Html from '@kitajs/html'

export default function Layout(
  props: Html.PropsWithChildren<{ head: string; title?: string }>
) {
  return (
    <>
      {`<!DOCTYPE html>`}
      <html lang='en'>
        <head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>{props.title || 'Issue Tracker'}</title>
          <link rel='stylesheet' href='public/css/global.css' />
          <link rel='stylesheet' href='public/css/layout.css' />
          <script src='public/lib/htmx.v1_9_6.min.js'></script>
          {props.head}
        </head>
        <body>
          <header>
            <nav class='navbar'>
              <a class='nav-logo' href='/'>
                Issue Tracker
              </a>
              <ul class='nav-links' role='list'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/issues'>Issues</a>
                </li>
                <li>
                  <a href='/signup'>Signup</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>{props.children}</main>
        </body>
      </html>
    </>
  )
}
