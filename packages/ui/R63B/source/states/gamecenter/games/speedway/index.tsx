import React, { Component } from 'react'

export default class Speedway extends Component {
	render() {
		return(
			<div className='gamecontainer'>

				<div className='game__container__content'>
					<p className='slogan'>Ready, Set... GO!</p>
					<img src='/games/speedway/logo.png' className='logo' />
					<div className='description'>
						Strap yourself in for some slotcar carnage, Race the track against friends, <br /> use a variety of power-ups to reach pole position and take some gold.
					</div>

					<button className='illumina-button'>
						Play now!
					</button>

					<div className='prizes'>
						<div className='rewards'>
							<h2 className='title'>The Prize of the Week</h2>

							{/* <div className='timer'>
								<div className='hand'>
									<div className='value'>
										05
									</div>
									<span>days</span>
								</div>
								<span className='divider'>:</span>
								<div className='hand'>
									<div className='value'>
										09
									</div>
									<span>hrs</span>
								</div>
								<span className='divider'>:</span>
								<div className='hand'>
									<div className='value'>
										05
									</div>
									<span>mins</span>
								</div>
							</div>								 */}
						</div>
						<div className='last_winner'>
						<h2 className='title'>Previous Winner</h2>
						</div>
						<div className='lucky_winners'>
							<h2 className='title'>Lucky Winners</h2>
						</div>
					</div>
				</div>


				<div className='game__container__leaderboards'>

					<fieldset>
							<legend>YOUR Speedway ACHIEVEMENTS</legend>
						
					</fieldset>

					<fieldset>
							<legend>FRIEND RANKING</legend>
							<div>
								
							</div>
					</fieldset>

				</div>
				
				{/* <div className='banner'>
					<img src='/games/speedway/banner.png'/>
				</div> */}

				
			</div>
		)
	}
}