import fs from "fs/promises";
import resolveRoot from "../resolveRoot.js";
import firstCharUpperCase from "../firstCharUpperCase.js";
import componentTemplate from "./componentTemplate.js";
import storyTemplate from "./storyTemplate.js";
import styleTemplate from "./styleTemplate.js";

export default async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot("src", layer, sliceName, "ui", ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log("Не удалось создать UI директорию");
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                storyTemplate(layer, componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(componentName),
            );
        } catch (e) {
            console.log("Не удалось создать компонент");
        }
    };

    await createUIDir();
    await createComponent();
};
