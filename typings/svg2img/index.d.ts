declare module "svg2img" {
  namespace svg2img {
    interface Options {
      format?: string;
      quality?: number;
      width?: number;
      height?: number;
    }
  }

  function svg2img(
    svg: string,
    options: svg2img.Options,
    cb: (error: Error, buffer: Buffer) => void
  ): void;

  export = svg2img;
}
