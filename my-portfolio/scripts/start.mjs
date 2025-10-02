import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/app.js'],
  outdir: 'src/js',
  bundle: true,
})

let { hosts, port } = await ctx.serve({
  port: 8000,
  host: 'localhost',
  servedir: 'src',
})