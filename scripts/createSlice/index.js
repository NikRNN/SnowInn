import createTemplate from "./templates/createTemplate.js";

const layer = process.argv[2]; //entities, features или pages слой
const sliceName = process.argv[3]; //слайс

const layers = ["features", "entities", "pages"];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(" или ")}`);
}

if (!sliceName) {
    throw new Error("Укажите название слайса");
}

createTemplate(layer, sliceName);
