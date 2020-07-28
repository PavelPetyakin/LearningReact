declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

interface SvgComponent extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const value: SvgComponent;
  export default value;
}

declare module "*.scss" {
  const content: { [key: string]: string };
  export default content;
}

declare type KVN<T extends { id: number }> = { [id: number]: T };
declare type KVS<T extends { id: string }> = { [id: string]: T };

declare type FMN<T> = T;
declare type FMS<T> = T;
