import { roboto } from '@theme-ui/presets'
export default {
	...roboto,
	colors: {
		...roboto.colors,
		background: 'yellow'
	},
	styles: {
		...roboto.styles
	},
	containers: {
		page: {
			width: '100%',
			maxWidth: '960px',
			m: '0',
			mx: 'auto'
		}
	}
}
