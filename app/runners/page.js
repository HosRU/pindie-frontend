"use client"

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardsList from "../components/CardsListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function Runners() {
    const runnersGames = useGetDataByCategory(endpoints.games, "runner");
    return(
        <main>
            {
                runnersGames ? (
                    <CardsList id="runners" title="Гонки" data={runnersGames}/>
                ) : (
                    <Preloader/>
                )
            }
        </main>
    )
}