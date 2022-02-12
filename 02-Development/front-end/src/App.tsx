import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import {
	KOIContent,
	KOIFooter,
	KOIHeader,
	KOISlider
} from '@components/common/index'
import { Layout } from '@douyinfe/semi-ui'

const App: React.FC = () => {
	const style = { border: '1px solid var(--semi-color-border)' }
	return (
		<Provider store={store}>
			<Layout style={style}>
				<KOISlider />
				<Layout>
					<KOIHeader />
					<KOIContent />
					<KOIFooter />
				</Layout>
			</Layout>
		</Provider>
	)
}

export default App
