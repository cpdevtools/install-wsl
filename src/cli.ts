#!/usr/bin/env node
import { installOrUpdate } from "./index";

(async () => {
  await installOrUpdate();
})();
