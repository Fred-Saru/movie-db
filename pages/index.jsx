import { FaDev } from 'react-icons/fa'

import Layout from '../components/layout'

import utilStyles from '../styles/utils.module.css'

const Home = () => {

  return (
    <Layout home>
      <div className={utilStyles.devLogo}>
        <FaDev/>
      </div>
    </Layout>
  )
}

export default Home
