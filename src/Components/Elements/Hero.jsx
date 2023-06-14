import React from 'react'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div>
      <div className='container hero'>
        <div className='row'>
          <div className="col-6 hero-left">
            <div className='left-heading'>Discover collect,& sell <span className='gradient'>Extraordinary</span> NFTs</div>
            <div className='left-description'>The leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.</div>
            <div className="left-btns">
            <Button btnType='PRIMARY' btnText="Explore"/>
            <Button btnType='SECONDaRY' btnText="Create" customClass='left-secondry-btn'/>
            </div>
            <div className="left-infoStats">
              <div className="infoItem">
                  <div className="infoCount">150k+</div>
                  <div className="inLabel">Collections</div>
              </div>
              <div className="infoItem">
                  <div className="infoCount">150k+</div>
                  <div className="inLabel">Collections</div>
              </div>
              <div className="infoItem">
                  <div className="infoCount">350k+</div>
                  <div className="inLabel">Community</div>
              </div>
            </div>
          </div>
          <div className="col-6 hero-right">
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
