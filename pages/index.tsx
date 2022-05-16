import type { NextPage } from 'next'
import MainPage from '../components/Frame/MainPage';
import Header from '../components/Header';
import Collection from '../components/Section/Collection'

const Home: NextPage = () => {
    return (
        <MainPage>
            <Collection />
        </MainPage>
    )
}

export default Home
