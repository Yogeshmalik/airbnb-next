"use client";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start());
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.error);
setTimeout(() => {
  progress.finish();
}, 1000);

export default function Loading() {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
  });
  Router.events.on("routeChangeStart", progress.start());
  // Router.events.on("routeChangeComplete", progress.finish);
  // Router.events.on("routeChangeError", progress.error);
  setTimeout(() => {
    progress.finish();
  }, 1000);

  return <p>Loading...</p>;
}
