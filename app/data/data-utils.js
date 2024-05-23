import { data } from "./data.js";

export function getGamesByCategory(category) {
  return data.filter((game) => {
    return game.category.find((item) => {
      return item.name === category;
    });
  });
}

export function getGameById(id) {
  return data.find((game) => game.id === Number(id));
}
