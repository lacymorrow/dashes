
// DEMO
import GoogleMapReact from 'google-map-react'

import jsonp from 'jsonp'
import assign from 'object-assign'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import Layout from './GlobalLayout'
import Card from './Card'
import Header from './Header'
import { colors, gradients } from './styles'
import DashGroup from './DashGroup'
import DashList from './DashList'
import DashTabs from './DashTabs'
import Dash from './Dash'
import Board from './Board'

class App extends React.Component {

	constructor () {

		super()
		this.state = assign(
			{},
			{
				drawerOpen: false,
				repo: {}
			}
		)
	}

	componentDidMount () {

		jsonp( 'https://api.github.com/repos/jxnblk/rebass', ( err, response ) => {

			this.setState( { repo: response.data } )
			console.log( response.data )

		} ).bind( this )

	}

  demo (ix) {
    var indents = [];
    for (var i = 0; i < ix; i++) {
      indents.push(
        <Dash
          title='Global Average'
          subtitle='160ms RTT'
          text='0.4mbps'
          subtext='119.06s'
          badge={{error: '+114.06s'}}>
        </Dash>
      )
    }
    return indents;
  }

	render () {

		const sx = {
			app: {
				width: '100%',
				maxWidth: '2800px',
				borderRadius: '4px',
				paddingTop: '5px',
				paddingBottom: '5px',
				boxShadow: '0 6px 20px 0 rgba(37, 45, 71, 0.34)',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				position: 'relative',
				zIndex: '99',
				color: colors.lighter,
				backgroundColor: colors.dashboardBgDarkest
			}
		}
		const {
			drawerOpen,
			repo
		} = this.state

		return (
			<Layout>
				<div style={sx.app}>
					<Header />
					<Board>
						<Flex width={[1, 1, 1, 1 / 4]} height='100%' direction='column'>
							<Card background={gradients.fire} title='Compiler Status' text='Idle' subtext='done in 0.249 sec' />
							<Card background={gradients.berry} title='Errors and Warnings' text='0' subtext='and no warnings' />
							<Card background={gradients.evening} title='Total Asset Size' text='6.23 MB' />
						</Flex>
						<Dash width={[1, 1, 1, 1 / 2]}>
							<GoogleMapReact
								style={{height: '100%'}}
								bootstrapURLKeys={{key: 'AIzaSyAgy7hEbpa5f6db4beN2kycYR5TBu-jzro'}}
								center={{lat: 59.95, lng: 30.33}}
								zoom={11}
							/>
						</Dash>
						<DashGroup width={[1, 1, 1, 1 / 4]}>
							<Dash
								title='dist/components/Script.js'
								text='0 CHUNKS, 1.08 KB'
								badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
							</Dash>
							<Dash
								title='Hello'>
                ayyo, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                byyo, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                cyyo, World!
								{repo.name}
							</Dash>
							<Dash>
                HELLO, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                ayyo, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                byyo, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                cyyo, World!
								{repo.name}
							</Dash>
							<Dash>
                HELLO, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                ayyo, World!
								{repo.name}
							</Dash>
							<Dash
								title='Hello'>
                byyo, World!
								{repo.name}
							</Dash>
							<Dash>
                HELLO, World!
								{repo.name}
							</Dash>
						</DashGroup>
					</Board>
					<Board>
						<DashTabs width={[1, 1, 1, 1/2]}>
							<DashGroup title="All Modules" text="343" subtext="100%">
								<Dash
									title='dist/components/Script.js'
									text='829 MB'
									badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
								</Dash>
                { this.demo(10) }
							</DashGroup>

              <DashGroup title="Treeshakeable" text="6" subtext="2%">
                <Dash
                  title='/user/name/random/file/path/dist/components/Script.js'
                  text='1.08 KB'
                  badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
                </Dash>
                { this.demo(10) }
              </DashGroup>
						</DashTabs>
            <DashGroup width={[1, 1, 1, 1 / 2]} title="Average Man!">
              <Dash
                title='dist/components/Script.js'
                text='0 CHUNKS, 1.08 KB'
                badge={{ success: {text: 'OK', link: '#'}, error: {text: 'OK', link: '#'} }}>
              </Dash>
              { this.demo(1) }
            </DashGroup>
					</Board>
				</div>
			</Layout>
		)

	}

}

export default App
