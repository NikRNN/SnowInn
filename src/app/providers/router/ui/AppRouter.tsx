import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig.js";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Загрузка</div>}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
