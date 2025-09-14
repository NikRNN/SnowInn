import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig.js";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route element={element} path={path} key={path} />;
        })}
      </Routes>
    </Suspense>
  );
};
