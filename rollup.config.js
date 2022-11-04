import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import livereload from 'rollup-plugin-livereload';
import scss from 'rollup-plugin-scss';
import emitEJS from 'rollup-plugin-emit-ejs';

import { components } from './components.js';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const bundles = [
	// base
	{
		input: 'src/main.js',
		output: {
			file: 'assets/js/index.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: false // since we don't minify
		},
		plugins: [
			resolve(),
			commonjs(), // converts commonJS modules to ES modules
			// disabled, will minify in Kentico
			production && terser(),
			!production && livereload(),
			scss({
				sass: require('sass'),
				output: 'assets/css/main.css',
				sourceMap: production,
				watch: 'src/scss',
				outputStyle: production ? 'compressed' : 'expanded'
			}),
			production && clear({
				targets: [
					'assets/css',
					'assets/js'
				]
			}),
			production && copy({
				targets: [
					{
						src: [
							'src/favicon.png',
							'src/manifest.json',
							'src/images',
							'src/fonts'
						],
						dest: './'
					}
				]
			})
		]
	}
];

// pages
bundles.push({
	input: 'src/pages/pages.js',
	output: {
		file: './pages.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: false // since we don't minify
	},
	plugins: [
		resolve(),
		commonjs(), // converts commonJS modules to ES modules
		// disabled, will minify in Kentico
		// production && terser(), // minify in production,
		!production && livereload(),
		emitEJS({
			src: 'src/pages',
			layout: 'src/pages/layout.html.ejs',
			exclude: 'common/*.ejs'
		}),
		production && clear({
			targets: [
				'./*.html',
				'./*.js'
			]
		})
	]
});

// components
components.forEach(component => {
	bundles.push({
		input: `src/components/${component}/${component}.js`,
		output: {
			file: `./components/${component}/${component}.js`,
			format: 'iife',
			sourcemap: false // since we don't minify
		},
		plugins: [
			resolve(),
			commonjs(),
			production && terser(),
			!production && livereload(),
			scss({
				sass: require('sass'),
				output: `./components/${component}/${component}.css`,
				sourceMap: production,
				watch: `src/components/${component}`,
				outputStyle: production ? 'compressed' : 'expanded'
			}),
			emitEJS({
        src: `src/components/${component}`,
      }),
			production && clear({
				targets: [
					`./components/${component}/${component}.{css, js, map}`
				]
			})
		]
	});
});

export default bundles;
