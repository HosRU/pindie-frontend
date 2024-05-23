"use client";

import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks.js";
import { Preloader } from "../components/Preloader/Preloader";
import CardsList from "../components/CardsListSection/CardsList";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");

    return(
        <main className="main">
            {
                newGames ? (
                    <CardsList id="new" title="Новинки" data={newGames}/>
                ) : (
                    <Preloader/>
                )
            }
            
        </main>
    )
}