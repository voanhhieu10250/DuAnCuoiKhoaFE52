import React, { Suspense } from "react";
import Loader2 from "../../../../components/Loader/loader2";

const CinemasEachSystem = React.lazy(() => import("./CinemasEachSystem"));

export default function DetailCinemaSystem({ listCinemaSystem }) {
  const renderCinemas = () => {
    return listCinemaSystem.map((system, index) => {
      return (
        <div
          className={
            index === 0 ? "tab-pane fade show active" : "tab-pane fade"
          }
          id={system.biDanh}
          role="tabpanel"
          aria-labelledby={system.maHeThongRap}
          key={index}
        >
          <CinemasEachSystem identityCode={system.maHeThongRap} />
        </div>
      );
    });
  };

  return (
    <div className="tab-content" id="listCinemas" style={{ height: 705 }}>
      <Suspense
        fallback={
          <div className="mainContent text-center">
            <Loader2 />
          </div>
        }
      >
        {renderCinemas()}
      </Suspense>
    </div>
  );
}
