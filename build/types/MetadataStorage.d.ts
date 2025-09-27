import { TypeMetadata, ExposeMetadata, ExcludeMetadata, TransformMetadata } from './interfaces';
import { TransformationType } from './enums';
/**
 * Storage all library metadata.
 */
export declare class MetadataStorage {
  private _typeMetadatas;
  private _transformMetadatas;
  private _exposeMetadatas;
  private _excludeMetadatas;
  private _ancestorsMap;
  addTypeMetadata(metadata: TypeMetadata): void;
  addTransformMetadata(metadata: TransformMetadata): void;
  addExposeMetadata(metadata: ExposeMetadata): void;
  addExcludeMetadata(metadata: ExcludeMetadata): void;
  findTransformMetadatas(
    target: Function,
    propertyName: string,
    transformationType: TransformationType
  ): TransformMetadata[];
  findExcludeMetadata(target: Function, propertyName: string): ExcludeMetadata | undefined;
  findExposeMetadata(
    target: Function,
    propertyName: string,
    transformationType: TransformationType
  ): ExposeMetadata | undefined;
  findExposeMetadataByCustomName(
    target: Function,
    name: string,
    transformType: TransformationType
  ): ExposeMetadata | undefined;
  findTypeMetadata(target: Function, propertyName: string): TypeMetadata | undefined;
  getStrategy(target: Function): 'excludeAll' | 'exposeAll' | 'none';
  getExposedMetadatas(target: Function): ExposeMetadata[];
  getExcludedMetadatas(target: Function): ExcludeMetadata[];
  getExposedProperties(target: Function, transformationType: TransformationType): string[];
  getExcludedProperties(target: Function, transformationType: TransformationType): string[];
  clear(): void;
  private getMetadata;
  private getMetadatas;
  private findMetadata;
  private findMetadatas;
  private getAncestors;
}
