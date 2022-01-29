import { FaDev } from 'react-icons/fa'

import Layout from '../components/layout'
import Card from '../components/card'

import { getHeaders } from '../lib/url'

import utilStyles from '../styles/utils.module.css'

const Home = ({movieDetail}) => {

  return (
    <Layout home>
      <Card movie={movieDetail}/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/728526?language=en-US`,{
      headers: getHeaders()
  })
  const movieDetail = await res.json()
  console.log(movieDetail)
  return {
      props: {
          movieDetail
      }
  }
}

export default Home
