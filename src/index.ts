import { getWslVersion, isWslInstalled, installWSL } from "@cpdevtools/lib-node-utilities";

async function install() {
  console.log("Installing WSL");
}

export async function update() {
  console.log("Updating WSL");
}

export async function installOrUpdate() {
  if (!isWslInstalled()) {
    await install();
  } else {
    await update();
  }
}
