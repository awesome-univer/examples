
import "./style.css";

import { LocaleType, LogLevel, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import { DebuggerPlugin } from '../plugins/debugger';
import { locales } from "./locales";
import { generateWorkbookData } from "./data";
// import { IUniverRPCMainThreadConfig, UniverRPCMainThreadPlugin } from "@univerjs/rpc";

// const LOAD_LAZY_PLUGINS_TIMEOUT = 1_000;
// univer
const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales,
  logLevel: LogLevel.VERBOSE,
});

// core plugins
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  header: true,
  footer: true,
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);

// sheet feature plugins
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(DebuggerPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
// univer.registerPlugin(UniverFormulaEnginePlugin, {
//   notExecuteFormula: true,
// });
univer.registerPlugin(UniverSheetsFormulaPlugin);
// univer.registerPlugin(UniverRPCMainThreadPlugin, {
//   workerURL: './worker.js',
// } as IUniverRPCMainThreadConfig);
univer.registerPlugin(UniverSheetsZenEditorPlugin);
// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, generateWorkbookData(1000000,10));

// setTimeout(() => {
//   import('./lazy').then((lazy) => {
//       const plugins = lazy.default();
//       plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
//   });
// }, LOAD_LAZY_PLUGINS_TIMEOUT);
