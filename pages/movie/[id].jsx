import { FaDev } from 'react-icons/fa'

import Layout from '../../components/layout'
import Card from '../../components/card'
import { getHeaders } from '../../lib/url'

import utilStyles from '../../styles/utils.module.css'

export default function Movie({movieDetail}) {
    return (
        <Layout>
            <Card movie={movieDetail}/>
            <h1>{movieDetail.original_title}</h1>
            <div className={utilStyles.devLogo}>
                <FaDev />
            </div>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const { id } = params
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
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
