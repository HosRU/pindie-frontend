"use client"

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import CardsList from "../components/CardsListSection/CardsList";
import { Preloader } from "../components/Preloader/Preloader";

export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

    return(
        <main className="main">
            {
                pixelGames ? (
                    <CardsList id="pixel" title="Пиксельные" data={pixelGames}/>
                ) : (
                    <Preloader/>
                )
            }
            
        </main>
    )
}