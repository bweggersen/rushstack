// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { HeftToolsCommandLineParser } from './cli/HeftToolsCommandLineParser';

// Launching via lib/start.js bypasses the version selector.  Use that for debugging Heft.

const parser: HeftToolsCommandLineParser = new HeftToolsCommandLineParser();

parser
  .execute()
  .then(() => {
    // This should be removed when the issue with aria not tearing down
    process.exit(process.exitCode === undefined ? 0 : process.exitCode);
  })
  .catch((error) => {
    parser.terminal.writeErrorLine(error);
    process.exit(1);
  });
