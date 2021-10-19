#!/usr/bin/env node
import slotifyCss from "../slotifyCss"
import { program } from "commander"
import reqPackageJson from "req-package-json"
const config = reqPackageJson()

program
  .version(config.version)
  .name(config.name)

program
  .option('-s, --silent', 'silence stdout')
.parse(process.argv)


slotifyCss(...program.args)
