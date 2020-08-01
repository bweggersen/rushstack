// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

// eslint-disable-next-line
const importLazy = require('import-lazy')(require);

console.log('RushCommandLineParser.ts  : 1: ' + (new Date().getTime() % 20000) / 1000.0);
import * as colors from 'colors';
console.log('RushCommandLineParser.ts  : 2: ' + (new Date().getTime() % 20000) / 1000.0);
import * as os from 'os';
console.log('RushCommandLineParser.ts  : 3: ' + (new Date().getTime() % 20000) / 1000.0);
import * as path from 'path';
console.log('RushCommandLineParser.ts  : 4: ' + (new Date().getTime() % 20000) / 1000.0);

import { CommandLineParser, CommandLineFlagParameter, CommandLineAction } from '@rushstack/ts-command-line';
console.log('RushCommandLineParser.ts  : 5: ' + (new Date().getTime() % 20000) / 1000.0);
// import { InternalError } from '@rushstack/node-core-library';
// eslint-disable-next-line
const nodeCoreLibrary = importLazy('@rushstack/node-core-library');

console.log('RushCommandLineParser.ts  : 6: ' + (new Date().getTime() % 20000) / 1000.0);

import { RushConfiguration } from '../api/RushConfiguration';
console.log('RushCommandLineParser.ts  : 7: ' + (new Date().getTime() % 20000) / 1000.0);
import { RushConstants } from '../logic/RushConstants';
console.log('RushCommandLineParser.ts  : 8: ' + (new Date().getTime() % 20000) / 1000.0);
import { CommandLineConfiguration } from '../api/CommandLineConfiguration';
console.log('RushCommandLineParser.ts  : 9: ' + (new Date().getTime() % 20000) / 1000.0);
import { CommandJson } from '../api/CommandLineJson';
console.log('RushCommandLineParser.ts  : 10: ' + (new Date().getTime() % 20000) / 1000.0);
import { Utilities } from '../utilities/Utilities';
console.log('RushCommandLineParser.ts  : 11: ' + (new Date().getTime() % 20000) / 1000.0);
import { BaseScriptAction } from '../cli/scriptActions/BaseScriptAction';
console.log('RushCommandLineParser.ts  : 12: ' + (new Date().getTime() % 20000) / 1000.0);

import { AddAction } from './actions/AddAction';
console.log('RushCommandLineParser.ts  : 13: ' + (new Date().getTime() % 20000) / 1000.0);
import { ChangeAction } from './actions/ChangeAction';
console.log('RushCommandLineParser.ts  : 14: ' + (new Date().getTime() % 20000) / 1000.0);
import { CheckAction } from './actions/CheckAction';
console.log('RushCommandLineParser.ts  : 15: ' + (new Date().getTime() % 20000) / 1000.0);
import { DeployAction } from './actions/DeployAction';
console.log('RushCommandLineParser.ts  : 16: ' + (new Date().getTime() % 20000) / 1000.0);
import { InitAction } from './actions/InitAction';
console.log('RushCommandLineParser.ts  : 17: ' + (new Date().getTime() % 20000) / 1000.0);
import { InitAutoinstallerAction } from './actions/InitAutoinstallerAction';
console.log('RushCommandLineParser.ts  : 18: ' + (new Date().getTime() % 20000) / 1000.0);
import { InitDeployAction } from './actions/InitDeployAction';
console.log('RushCommandLineParser.ts  : 19: ' + (new Date().getTime() % 20000) / 1000.0);
import { InstallAction } from './actions/InstallAction';
console.log('RushCommandLineParser.ts  : 20: ' + (new Date().getTime() % 20000) / 1000.0);
import { LinkAction } from './actions/LinkAction';
console.log('RushCommandLineParser.ts  : 21: ' + (new Date().getTime() % 20000) / 1000.0);
import { ListAction } from './actions/ListAction';
console.log('RushCommandLineParser.ts  : 22: ' + (new Date().getTime() % 20000) / 1000.0);
import { PublishAction } from './actions/PublishAction';
console.log('RushCommandLineParser.ts  : 23: ' + (new Date().getTime() % 20000) / 1000.0);
import { PurgeAction } from './actions/PurgeAction';
console.log('RushCommandLineParser.ts  : 24: ' + (new Date().getTime() % 20000) / 1000.0);
import { ScanAction } from './actions/ScanAction';
console.log('RushCommandLineParser.ts  : 25: ' + (new Date().getTime() % 20000) / 1000.0);
import { TabCompleteAction } from './actions/TabCompleteAction';
console.log('RushCommandLineParser.ts  : 26: ' + (new Date().getTime() % 20000) / 1000.0);
import { UnlinkAction } from './actions/UnlinkAction';
console.log('RushCommandLineParser.ts  : 27: ' + (new Date().getTime() % 20000) / 1000.0);
import { UpdateAction } from './actions/UpdateAction';
console.log('RushCommandLineParser.ts  : 28: ' + (new Date().getTime() % 20000) / 1000.0);
import { UpdateAutoinstallerAction } from './actions/UpdateAutoinstallerAction';
console.log('RushCommandLineParser.ts  : 29: ' + (new Date().getTime() % 20000) / 1000.0);
import { VersionAction } from './actions/VersionAction';
console.log('RushCommandLineParser.ts  : 30: ' + (new Date().getTime() % 20000) / 1000.0);

import { BulkScriptAction } from './scriptActions/BulkScriptAction';
console.log('RushCommandLineParser.ts  : 31: ' + (new Date().getTime() % 20000) / 1000.0);
import { GlobalScriptAction } from './scriptActions/GlobalScriptAction';
console.log('RushCommandLineParser.ts  : 32: ' + (new Date().getTime() % 20000) / 1000.0);

import { Telemetry } from '../logic/Telemetry';
console.log('RushCommandLineParser.ts  : 33: ' + (new Date().getTime() % 20000) / 1000.0);
import { AlreadyReportedError } from '../utilities/AlreadyReportedError';
console.log('RushCommandLineParser.ts  : 34: ' + (new Date().getTime() % 20000) / 1000.0);
import { RushGlobalFolder } from '../api/RushGlobalFolder';
console.log('RushCommandLineParser.ts  : 35: ' + (new Date().getTime() % 20000) / 1000.0);
import { NodeJsCompatibility } from '../logic/NodeJsCompatibility';
console.log('RushCommandLineParser.ts  : 36: ' + (new Date().getTime() % 20000) / 1000.0);

/**
 * Options for `RushCommandLineParser`.
 */
export interface IRushCommandLineParserOptions {
  cwd: string; // Defaults to `cwd`
  alreadyReportedNodeTooNewError: boolean;
}

export class RushCommandLineParser extends CommandLineParser {
  public telemetry: Telemetry | undefined;
  public rushGlobalFolder: RushGlobalFolder;
  public rushConfiguration: RushConfiguration;

  private _debugParameter: CommandLineFlagParameter;
  private _rushOptions: IRushCommandLineParserOptions;

  public constructor(options?: Partial<IRushCommandLineParserOptions>) {
    console.log('RushCommandLineParser.constructor  : 1: ' + (new Date().getTime() % 20000) / 1000.0);
    super({
      toolFilename: 'rush',
      toolDescription:
        'Rush makes life easier for JavaScript developers who develop, build, and publish' +
        ' many packages from a central Git repo.  It is designed to handle very large repositories' +
        ' supporting many projects and people.  Rush provides policies, protections, and customizations' +
        ' that help coordinate teams and safely onboard new contributors.  Rush also generates change logs' +
        ' and automates package publishing.  It can manage decoupled subsets of projects with different' +
        ' release and versioning strategies.  A full API is included to facilitate integration with other' +
        ' automation tools.  If you are looking for a proven turnkey solution for monorepo management,' +
        ' Rush is for you.'
    });
    console.log('RushCommandLineParser.constructor  : 2: ' + (new Date().getTime() % 20000) / 1000.0);

    this._rushOptions = this._normalizeOptions(options || {});
    console.log('RushCommandLineParser.constructor  : 3: ' + (new Date().getTime() % 20000) / 1000.0);

    try {
      const rushJsonFilename: string | undefined = RushConfiguration.tryFindRushJsonLocation({
        startingFolder: this._rushOptions.cwd,
        showVerbose: !Utilities.isNonDebugTabCompletionRequest()
      });
      console.log('RushCommandLineParser.constructor  : 4: ' + (new Date().getTime() % 20000) / 1000.0);
      if (rushJsonFilename) {
        this.rushConfiguration = RushConfiguration.loadFromConfigurationFile(rushJsonFilename);
      }
      console.log('RushCommandLineParser.constructor  : 5: ' + (new Date().getTime() % 20000) / 1000.0);
    } catch (error) {
      this._reportErrorAndSetExitCode(error);
    }

    console.log('RushCommandLineParser.constructor  : 6: ' + (new Date().getTime() % 20000) / 1000.0);
    NodeJsCompatibility.warnAboutCompatibilityIssues({
      isRushLib: true,
      alreadyReportedNodeTooNewError: this._rushOptions.alreadyReportedNodeTooNewError,
      rushConfiguration: this.rushConfiguration
    });

    console.log('RushCommandLineParser.constructor  : 7: ' + (new Date().getTime() % 20000) / 1000.0);
    this._populateActions();
    console.log('RushCommandLineParser.constructor  : 8: ' + (new Date().getTime() % 20000) / 1000.0);
  }

  public get isDebug(): boolean {
    return this._debugParameter.value;
  }

  public flushTelemetry(): void {
    if (this.telemetry) {
      this.telemetry.flush();
    }
  }

  protected onDefineParameters(): void {
    this._debugParameter = this.defineFlagParameter({
      parameterLongName: '--debug',
      parameterShortName: '-d',
      description: 'Show the full call stack if an error occurs while executing the tool'
    });
  }

  protected onExecute(): Promise<void> {
    // Defensively set the exit code to 1 so if Rush crashes for whatever reason, we'll have a nonzero exit code.
    // For example, Node.js currently has the inexcusable design of terminating with zero exit code when
    // there is an uncaught promise exception.  This will supposedly be fixed in Node.js 9.
    // Ideally we should do this for all the Rush actions, but "rush build" is the most critical one
    // -- if it falsely appears to succeed, we could merge bad PRs, publish empty packages, etc.
    process.exitCode = 1;

    if (this._debugParameter.value) {
      nodeCoreLibrary.InternalError.breakInDebugger = true;
    }

    return this._wrapOnExecute()
      .catch((error: Error) => {
        this._reportErrorAndSetExitCode(error);
      })
      .then(() => {
        // If we make it here, everything went fine, so reset the exit code back to 0
        process.exitCode = 0;
      });
  }

  private _normalizeOptions(options: Partial<IRushCommandLineParserOptions>): IRushCommandLineParserOptions {
    return {
      cwd: options.cwd || process.cwd(),
      alreadyReportedNodeTooNewError: options.alreadyReportedNodeTooNewError || false
    };
  }

  private _wrapOnExecute(): Promise<void> {
    try {
      if (this.rushConfiguration) {
        this.telemetry = new Telemetry(this.rushConfiguration);
      }
      return super.onExecute().then(() => {
        if (this.telemetry) {
          this.flushTelemetry();
        }
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private _populateActions(): void {
    try {
      this.rushGlobalFolder = new RushGlobalFolder();

      this.addAction(new AddAction(this));
      this.addAction(new ChangeAction(this));
      this.addAction(new CheckAction(this));
      this.addAction(new DeployAction(this));
      this.addAction(new InitAction(this));
      this.addAction(new InitAutoinstallerAction(this));
      this.addAction(new InitDeployAction(this));
      this.addAction(new InstallAction(this));
      this.addAction(new LinkAction(this));
      this.addAction(new ListAction(this));
      this.addAction(new PublishAction(this));
      this.addAction(new PurgeAction(this));
      this.addAction(new ScanAction(this));
      this.addAction(new UnlinkAction(this));
      this.addAction(new TabCompleteAction(this));
      this.addAction(new UpdateAction(this));
      this.addAction(new UpdateAutoinstallerAction(this));
      this.addAction(new VersionAction(this));

      this._populateScriptActions();
    } catch (error) {
      this._reportErrorAndSetExitCode(error);
    }
  }

  private _populateScriptActions(): void {
    let commandLineConfiguration: CommandLineConfiguration | undefined = undefined;

    // If there is not a rush.json file, we still want "build" and "rebuild" to appear in the
    // command-line help
    if (this.rushConfiguration) {
      const commandLineConfigFile: string = path.join(
        this.rushConfiguration.commonRushConfigFolder,
        RushConstants.commandLineFilename
      );

      commandLineConfiguration = CommandLineConfiguration.loadFromFileOrDefault(commandLineConfigFile);
    }

    // Build actions from the command line configuration supersede default build actions.
    this._addCommandLineConfigActions(commandLineConfiguration);
    this._addDefaultBuildActions(commandLineConfiguration);
    this._validateCommandLineConfigParameterAssociations(commandLineConfiguration);
  }

  private _addDefaultBuildActions(commandLineConfiguration?: CommandLineConfiguration): void {
    if (!this.tryGetAction(RushConstants.buildCommandName)) {
      this._addCommandLineConfigAction(
        commandLineConfiguration,
        CommandLineConfiguration.defaultBuildCommandJson
      );
    }

    if (!this.tryGetAction(RushConstants.rebuildCommandName)) {
      this._addCommandLineConfigAction(
        commandLineConfiguration,
        CommandLineConfiguration.defaultRebuildCommandJson,
        RushConstants.buildCommandName
      );
    }
  }

  private _addCommandLineConfigActions(commandLineConfiguration?: CommandLineConfiguration): void {
    if (!commandLineConfiguration) {
      return;
    }

    // Register each custom command
    for (const command of commandLineConfiguration.commands) {
      this._addCommandLineConfigAction(commandLineConfiguration, command);
    }
  }

  private _addCommandLineConfigAction(
    commandLineConfiguration: CommandLineConfiguration | undefined,
    command: CommandJson,
    commandToRun?: string
  ): void {
    if (this.tryGetAction(command.name)) {
      throw new Error(
        `${RushConstants.commandLineFilename} defines a command "${command.name}"` +
          ` using a name that already exists`
      );
    }

    this._validateCommandLineConfigCommand(command);

    switch (command.commandKind) {
      case RushConstants.bulkCommandKind:
        this.addAction(
          new BulkScriptAction({
            actionName: command.name,

            // By default, the "rebuild" action runs the "build" script. However, if the command-line.json file
            // overrides "rebuild," the "rebuild" script should be run.
            commandToRun: commandToRun,

            summary: command.summary,
            documentation: command.description || command.summary,
            safeForSimultaneousRushProcesses: command.safeForSimultaneousRushProcesses,

            parser: this,
            commandLineConfiguration: commandLineConfiguration,

            enableParallelism: command.enableParallelism,
            ignoreMissingScript: command.ignoreMissingScript || false,
            ignoreDependencyOrder: command.ignoreDependencyOrder || false,
            incremental: command.incremental || false,
            allowWarningsInSuccessfulBuild: !!command.allowWarningsInSuccessfulBuild
          })
        );
        break;

      case RushConstants.globalCommandKind:
        this.addAction(
          new GlobalScriptAction({
            actionName: command.name,
            summary: command.summary,
            documentation: command.description || command.summary,
            safeForSimultaneousRushProcesses: command.safeForSimultaneousRushProcesses,

            parser: this,
            commandLineConfiguration: commandLineConfiguration,

            shellCommand: command.shellCommand,

            autoinstallerName: command.autoinstallerName
          })
        );
        break;
      default:
        throw new Error(
          `${RushConstants.commandLineFilename} defines a command "${command!.name}"` +
            ` using an unsupported command kind "${command!.commandKind}"`
        );
    }
  }

  private _validateCommandLineConfigParameterAssociations(
    commandLineConfiguration?: CommandLineConfiguration
  ): void {
    if (!commandLineConfiguration) {
      return;
    }

    // Check for any invalid associations
    for (const parameter of commandLineConfiguration.parameters) {
      for (const associatedCommand of parameter.associatedCommands) {
        const action: CommandLineAction | undefined = this.tryGetAction(associatedCommand);
        if (!action) {
          throw new Error(
            `${RushConstants.commandLineFilename} defines a parameter "${parameter.longName}"` +
              ` that is associated with a nonexistent command "${associatedCommand}"`
          );
        }
        if (!(action instanceof BaseScriptAction)) {
          throw new Error(
            `${RushConstants.commandLineFilename} defines a parameter "${parameter.longName}"` +
              ` that is associated with a command "${associatedCommand}", but that command does not` +
              ` support custom parameters`
          );
        }
      }
    }
  }

  private _validateCommandLineConfigCommand(command: CommandJson): void {
    // There are some restrictions on the 'build' and 'rebuild' commands.
    if (
      command.name !== RushConstants.buildCommandName &&
      command.name !== RushConstants.rebuildCommandName
    ) {
      return;
    }

    if (command.commandKind === RushConstants.globalCommandKind) {
      throw new Error(
        `${RushConstants.commandLineFilename} defines a command "${command.name}" using ` +
          `the command kind "${RushConstants.globalCommandKind}". This command can only be designated as a command ` +
          `kind "${RushConstants.bulkCommandKind}".`
      );
    }
    if (command.safeForSimultaneousRushProcesses) {
      throw new Error(
        `${RushConstants.commandLineFilename} defines a command "${command.name}" using ` +
          `"safeForSimultaneousRushProcesses=true". This configuration is not supported for "${command.name}".`
      );
    }
  }

  private _reportErrorAndSetExitCode(error: Error): void {
    if (!(error instanceof AlreadyReportedError)) {
      const prefix: string = 'ERROR: ';
      console.error(os.EOL + colors.red(Utilities.wrapWords(prefix + error.message)));
    }

    if (this._debugParameter.value) {
      // If catchSyncErrors() called this, then show a call stack similar to what Node.js
      // would show for an uncaught error
      console.error(os.EOL + error.stack);
    }

    this.flushTelemetry();

    // Ideally we want to eliminate all calls to process.exit() from our code, and replace them
    // with normal control flow that properly cleans up its data structures.
    // For this particular call, we have a problem that the RushCommandLineParser constructor
    // performs nontrivial work that can throw an exception.  Either the Rush class would need
    // to handle reporting for those exceptions, or else _populateActions() should be moved
    // to a RushCommandLineParser lifecycle stage that can handle it.
    if (!process.exitCode || process.exitCode > 0) {
      process.exit(process.exitCode);
    } else {
      process.exit(1);
    }
  }
}
