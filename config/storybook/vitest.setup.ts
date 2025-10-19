import "@testing-library/jest-dom"; // для ассершнов

import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react";
import * as projectAnnotations from "./preview";

// Это устанавливает аннотации проекта Storybook для Vitest
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
