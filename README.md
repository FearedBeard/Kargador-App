# Iron Week — focused iPhone correction

This is a static Vercel project. No install, build command, account or backend is required.

## Deploy

Replace the files in the existing Vercel project with index.html, styles.css, data.js, app.js, workout.js, manifest.webmanifest and assets/. Preserve that folder structure. Deploy to the same production domain. Choose Other as framework preset; leave the build command empty and serve the project root. Tests and this README do not need to be deployed.

Export an in-app backup before updating. Existing ironweek_v2 data and legacy keys remain; no storage reset is needed. Reopen the existing Home Screen shortcut after deployment. There is no service worker caching older app code. You should not need to delete or re-add the shortcut.

## Correction scope

- Circular automatic countdowns for marching, both arm-circle directions, planks, set rest and exercise transition rest.
- Persistent timer deadlines, timer/session/exercise identity and durations. Background time counts; explicit pause freezes the clock. Reopening recalculates remaining time, and expired timed sets log once. Rest waits for Start Set / Continue.
- Planks begin at a manageable 15-second target, adapt by small steps, and can end early to record actual clean seconds.
- Dumbbell rows and RDLs by default, with optional barbell variants.
- No per-set weight field. Each exercise uses a fixed recommended setup.
- Symmetric per-end visualization with inventory shared across both dumbbells. Pair load is per dumbbell; single load is one dumbbell; bar load is total. Bodyweight has no load UI.
- Two qualifying completed sessions can suggest a load change automatically. Increases are limited to the smallest available step within 15% or 0.5 kg, whichever is larger. Larger jumps keep the existing load. Two difficult sessions can select the next lighter setup. Uncomfortable feedback does not increase load.
- Bottom navigation hidden during the active Workout screen. Pause, exit, exercise navigation and substitutions live in the top menu.

## Existing data

The schema remains version 2 and uses the existing ironweek_v2 key. New session fields are additive. Existing completed sessions are unchanged. Old in-progress exercise weights remain fixed; previously bar-based rows/RDLs remain bar-based for that session. Saved old row/RDL total-load defaults are converted to a per-dumbbell seed once (loadGuideVersion marker); original history is not rewritten. Old warmups restart their warmup sequence because the new sequence has separate timed directions.

Rod weights are never invented. Until measured in More → Equipment, the displayed setup is explicitly plate mass plus the unknown rod weight. Such sets are flagged loadUnknown and excluded from load-progression decisions. After measuring rods, new sessions show exact achievable total equipment weights.

## Verification

Run `node tests/workout.test.cjs`: 20 focused state/data tests.
Run `node tests/browser.test.cjs`: mobile browser interaction check using Playwright and installed Edge. Update the Playwright require path if running on another machine.
Deployment connected to Vercel.

Checked: live marching countdown, ring rendering, reload/resume, deadline completion after background-equivalent elapsed time, plank auto-logging, rest gating and skip, transition rest, paused timers, fixed loads, pair/single/bar/bodyweight display, inventory constraints, progression bounds, saved partial session, substitution persistence, hidden nav, and mobile horizontal overflow.

Browser screenshots were inspected at 390 × 844 (iPhone 14 CSS viewport). Tests use Chromium/Edge, not actual iOS Safari. iOS suspends background JavaScript; the deadline catches up on return, but a completion alert cannot be guaranteed while the app is suspended. Vibration is optional and ignored on unsupported browsers.

Exercise demonstration placeholders remain unchanged in the detail sheet. This pass does not add movement animation assets or redesign unrelated areas.
