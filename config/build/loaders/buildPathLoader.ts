import { BuildPaths } from "../types/config";

export function buildPathLoaders(paths: BuildPaths) {
    return {
        alias: {
            src: paths.src,
            app: paths.app,
            shared: paths.shared,
            entities: paths.entities,
            features: paths.features,
            pages: paths.pages,
            widgets: paths.widgets,
        },
    };
}
