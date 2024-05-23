"use client"

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardsList from "../components/CardsListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooters(){
    const shootersGames = useGetDataByCategory(endpoints.games, "shooter");
    return(
        <main>
            {
                shootersGames ? (
                    <CardsList id="shooters" title="Шутеры" data={shootersGames}/>
                ) : (
                    <Preloader/>
                )
            }
        </main>
    )
}