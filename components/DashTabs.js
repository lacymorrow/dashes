import {
	Flex,
	Box,
	List,
	Text,
	Tabs,
	TabItem
} from 'rebass'
import assign from 'object-assign'
import PropTypes from 'prop-types'

import Dash from './Dash'
import Board from './Board'

import { colors, fontSizes } from './styles'

class DashTabs extends React.Component {

	constructor () {

		super()
		this.state = assign(
			{},
			{
				activeTab: 0
			}
		)
		this.changeTab = this.changeTab.bind( this )
	}

	changeTab ( i ) {

		this.setState( { activeTab: i } )

	}

	render () {

		const { height, width } = this.props
		const sx = {
			dash: {
				position: 'relative',
				top: '0',
				left: '0',
				width: '100%',
				flexGrow: '1',
				margin: '0 4px 4px 0',
				overflow: 'auto'
			},
			board: {
				maxHeight: height || '455px',
				background: colors.dashboardBgDarker,
				margin: '0',
				padding: '0',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				flexDirection: 'column',
				flex: '1'
			},
			tabs: {
				background: colors.dashboardBgDarker,
				border: '0'
			},
			tabItem: {
				fontSize: fontSizes.fontBodyXS,
				padding: '8px',
				margin: '0',
				marginRight: 'auto'
			},
			title: {
				color: colors.colorMain,
				fontSize: fontSizes.fontHeaderSM,
				textTransform: 'uppercase',
				fontWeight: '500'
			},
			text: {
				color: colors.lighter
			},
			subtext: {
				fontWeight: '500'
			}
		}

		return (

			<Board width={width} style={sx.board} { ...this.props } >
				<Tabs width={1} style={sx.tabs}>
					{React.Children.map( this.props.children, ( child, i ) => {

						const colorIndex = i % this.props.children.length + 1
						const tabItemColor = child.props.color || colors['colorData' + colorIndex] || colors.colorData1
						return (
							<TabItem
								onClick={ () => this.changeTab( i ) }
								active={this.state.activeTab === i}
								width={1}
								style={{ ...sx.tabItem, color: tabItemColor }} >
								{child.props.title && ( <Text is='h4' width={1} style={sx.title}>{child.props.title}</Text> )}
								{child.props.text && ( <Text width={1} style={sx.text}>{child.props.text}</Text> )}
								{child.props.subtext && ( <Text width={1} style={sx.subtext}>{child.props.subtext}</Text> )}
							</TabItem>
						)

					} )}
				</Tabs>

				{React.Children.map( this.props.children, ( child, i ) => {

					return ( <Dash className='dashtab' width={1} style={{ ...sx.dash, display: ( this.state.activeTab === i ) ? 'flex' : 'none' }} >
						{child}
					</Dash> )

				} )}
			</Board>
		)

	}

}

DashTabs.propTypes = {
	height: PropTypes.string || PropTypes.number
}

export default DashTabs
