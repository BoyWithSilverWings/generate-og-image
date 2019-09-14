import * as core from '@actions/core';

import { GITHUB_TOKEN, GITHUB_EVENT_NAME } from "./constants";

if (!GITHUB_TOKEN) {
  console.log("You must enable the GITHUB_TOKEN secret");
  process.exit(1);
}

async function run() {

  // Bail out if the event that executed the action wasn’t a pull_request
  if (GITHUB_EVENT_NAME !== "pull_request") {
    console.log("This action only runs for pushes to PRs");
    process.exit(78);
  }
  
  try {
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
