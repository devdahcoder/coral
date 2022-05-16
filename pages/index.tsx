import type { NextPage } from 'next'
import MainPage from '../components/Frame/MainPage';
import Header from '../components/Header';
import Collection from '../components/Section/Collection'
import Brand from '../components/Section/Brand'
import PopularCollection from '../components/Section/PopularCollection'
import NewProducts from '../components/Section/NewProducts'

const Home: NextPage = () => {
    return (
        <MainPage>
            <Collection />
            <Brand />
            <PopularCollection />
            <NewProducts />
        </MainPage>
    )
}

export default Home
