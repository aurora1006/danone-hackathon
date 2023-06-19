import Container from '../components/container'
import Home from './home/home'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index({ preview }) {

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>{`Home page`}</title>
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </div>
  )
}
