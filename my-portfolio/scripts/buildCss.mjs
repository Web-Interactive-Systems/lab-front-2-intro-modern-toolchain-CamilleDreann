import * as esbuild from 'esbuild'

await esbuild.buildSync({
  entryPoints: ['./src/style.css'],
  bundle: true,
  outfile: 'out.css',
})