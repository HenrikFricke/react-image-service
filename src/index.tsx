import Koa from "koa";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import svg2img from "svg2img";
import { promisify } from "util";
import lib, { Lib } from "./lib";

const app = new Koa();
const asyncSvg2Img = promisify(svg2img);

interface Query {
  layout?: keyof Lib;
  size?: number;
  name: string;
}

app.use(async ctx => {
  const queryParams: Query = ctx.query;

  if (!queryParams.name) {
    ctx.status = 400;
    ctx.body = { error: "Name missing in query params" };
    return;
  }

  const layout = queryParams.layout || 1;
  const size = queryParams.size || 500;

  const Image = lib[layout];
  const svg = renderToStaticMarkup(<Image name={queryParams.name} />);
  const image = await asyncSvg2Img(svg, {
    format: "png",
    height: size,
    width: size
  });

  ctx.type = "png";
  ctx.body = image;
});

app.listen(process.env.PORT || 3000);
