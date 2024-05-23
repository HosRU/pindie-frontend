"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardsList from "../components/CardsListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function Popular() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");

    return(
        <main className="main">
            {
                popularGames ? (
                    <CardsList id="popular" title="Популярные" data={popularGames}/>
                ) : (
                    <Preloader/>
                )
            }
        </main>
    )
}