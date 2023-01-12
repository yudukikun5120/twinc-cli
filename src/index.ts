#!/usr/bin/env node

import { program } from "commander";
import { readFileSync, writeFileSync } from "fs";
import { createICS } from "./core/createICS";

program
  .name("twinc")
  .description("Command-line interface for TwinC.")
  .version("1.0.0")
  .option(
    "-d, --includeDeadlines",
    "include deadlines for advance registrations and course registrations"
  )
  .argument(
    "<CSV file>",
    "Path to the file containing the course IDs, such as RSReferCsv.csv"
  )
  .option("-o, --output <path>", "output file path (default: stdout)");

program.parse();

const options = program.opts();
const output = options.output;
const fileContent = readFileSync(program.args[0], "utf-8");
const ics = createICS(fileContent, options.includeDeadlines);

if (output) {
  writeFileSync(output, ics);
} else {
  console.log(ics);
}
