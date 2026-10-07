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

## October 7 update

- Skip any warmup or exercise. Skipping cancels that movement's timer, preserves performed sets, and records skipped exercise status. Skipped work earns no exercise completion XP. Finish or skip each exercise to close a session; a completely skipped session remains partial and earns zero XP.
- Upcoming movement preview on current warmup/exercise screens.
- The timer ring now follows fractional deadline time with a subtle linear transition instead of jumping at integer seconds. Reduced-motion preferences disable the transition.
- Workout options → Weight used shows the current setup and offers only valid inventory-based setups. Override affects future sets only; history shows actual per-set weights. Automatic loading stays the default.
- More → App preferences & testing contains an in-memory Testing mode and Reset data. Testing mode does not save changes. Turning it off or reopening the app discards the trial. Reset trial affects only memory; normal reset requires typing RESET, offers backup export, and clears only Iron Week storage keys.
- New validation.js validates imported identifiers, settings, dates, numbers, exercise records and timer state. Malicious imported IDs and attribute payloads are rejected before rendering. Existing schema 2 and legitimate legacy data are retained.

Verification: 31 state/data regression tests plus mobile browser interaction checks at 390 × 844. Checked countdown restoration, both rests, skips, actual per-set override weights, trial isolation, protected reset, malicious-backup rejection, legacy migration, rotation, redemption/XP separation and mobile layout. Tests run in Chromium/Edge, not physical iOS Safari. Exercise animation assets remain reserved for a later update; this change preserves the existing guide sheet.

Production files now also include validation.js and controls.js; both are referenced by index.html. No build or backend is needed.
