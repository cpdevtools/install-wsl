#!/usr/bin/env node
import { installOrUpdate } from "./index";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

(async () => {
  const argv = yargs(hideBin(process.argv)).argv;

  await installOrUpdate();
})();
