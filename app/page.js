"use client"

import Banner from "./components/Banner/Banner.jsx";
import Promo from "./components/Promo/Promo.jsx";
import { Preloader } from "./components/Preloader/Preloader.jsx";
import { useGetDataByCategory } from "./api/api-hooks.js";
import { endpoints } from "./api/config.js";
import CardsListSection from "./components/CardsListSection/CardsListSection.jsx";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main">
      <Banner />
      {popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider"/> : <Preloader/> }
      {newGames ? <CardsListSection id="new" title="Новинки" data={newGames} type="slider"/> : <Preloader/> }
      <Promo />
    </main>
  )
}
