import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import Layout from '../pages/Layout'
import HomePage from '../pages/Home'

export const pageRoutes = new Elysia()
  .use(html())
  .get('/', () => (
    <Layout
      head={
        <>
          <link rel='stylesheet' href='public/css/index.css' />
          <script src='public/lib/d3.v7.min.js'></script>
          <script type='module' src='public/js/index.js' defer></script>
        </>
      }
    >
      <HomePage />
    </Layout>
  ))
  .get('/issues', () => (
    <Layout head={<link rel='stylesheet' href='public/css/issues.css' />}>
      <h1>This is a Issues Page</h1>
    </Layout>
  ))
