import { PackageJsonInfo } from './PackageInfo';

export interface IPluginInfo {
	readonly mainFile: string;
	readonly location: string;
	readonly name: string;
	readonly version: string;
	readonly dependencies: { [name: string]: string };
	dependentPackages?: {
		[name: string]: PackageJsonInfo | undefined;
	}
}
