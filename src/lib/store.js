import { useCallback, useEffect, useState } from "react";
import { RESULTS } from "../data/results.js";

const KEY = "smesl.results.v1";

function readLocal() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeLocal(data) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Private browsing or a full quota — scores stay in memory for this visit.
  }
}

/**
 * Scores live in two layers:
 *   RESULTS  — committed in the repo, the same for every visitor
 *   local    — typed on this device, not yet published
 * Local wins where both have a score for the same match.
 */
export function useResults() {
  const [local, setLocal] = useState(() => (typeof window === "undefined" ? {} : readLocal()));

  // Keep other tabs in sync.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setLocal(readLocal());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setScore = useCallback((id, home, away) => {
    setLocal((prev) => {
      const next = { ...prev };
      if (home === "" || away === "" || home == null || away == null) delete next[id];
      else next[id] = [Number(home), Number(away)];
      writeLocal(next);
      return next;
    });
  }, []);

  const replaceAll = useCallback((data) => {
    setLocal(data);
    writeLocal(data);
  }, []);

  const clearLocal = useCallback(() => replaceAll({}), [replaceAll]);

  return {
    results: { ...RESULTS, ...local },
    published: RESULTS,
    local,
    unpublishedCount: Object.keys(local).length,
    setScore,
    replaceAll,
    clearLocal,
  };
}

/** Formats local scores as a paste-ready block for src/data/results.js. */
export function toResultsFile(local) {
  const lines = Object.entries({ ...RESULTS, ...local })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, [h, a]]) => `  "${id}": [${h}, ${a}],`);
  return lines.join("\n");
}
