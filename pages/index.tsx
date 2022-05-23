import type { NextPage } from 'next'
import MainPage from '../components/Frame/MainPage';
import Header from '../components/Header';
import Collection from '../components/Section/Collection';
import Brand from '../components/Section/Brand';
import PopularCollection from '../components/Section/PopularCollection';
import NewProducts from '../components/Section/NewProducts';
import Banner from '../components/Section/Banner';
import { newProductHeaderLink } from '../constants/newProductHeader';
import BestProduct from '../components/Section/BestSellers';
// import AllProductItem from '../AllProductItem';

const Home: NextPage = () => {
    return (
        <MainPage>
            <Collection />
            <Brand />
            <PopularCollection />
            <NewProducts  />
            <Banner />
            <BestProduct />
        </MainPage>
    )
}

export default Home
