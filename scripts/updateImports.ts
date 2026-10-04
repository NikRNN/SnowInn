import {Project} from "ts-morph";

const project = new Project({});

//добавляю файлы с исходным кодом, с которым буду работать (их рабочая для правок и т.п.)
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx")

//возвращаю массив всех файлов, которые только что добавил (можно каждоый файл перемеиновать, удалить, искать что-то и т.п.)
const files = project.getSourceFiles();

const ABSOLUTE_LAYERS = ["app", "entities", "features", "pages", "shared", "widgets"];

function isAbsolute (value: string) : boolean {

  const firstSegment = value.split("/")[0];

  return ABSOLUTE_LAYERS.some(item=> firstSegment === item)   
}

files.forEach(sourceFile => {
    //возвращает массив всех импортов в файле
    const importDeclarations = sourceFile.getImportDeclarations();

    //прохожу по массиву и для каждого элемента возаращю путь в кавычках после from
    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if(isAbsolute(value)) {
            importDeclaration.setModuleSpecifier("@/"+value)
            console.log(`"${value}" → "@/${value}"`);
        }
        console.log(importDeclaration.getText());
    })
    
}

);

project.save();