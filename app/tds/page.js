"use client"

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardsList from "../components/CardsListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function TDS(){
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
    return(
        <main>
            {
                tdsGames ? (
                    <CardsList id="tds" title="TDS" data={tdsGames}/>
                ) : (
                    <Preloader/>
                )
            }
        </main>
    )
}