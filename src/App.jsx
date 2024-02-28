import './App.css'
import award from './assets/1.png'
import logo from './assets/logo.png'
import banner from './assets/2.png'
import heroBanner from './assets/3.png'

function App () {
  return (
    <>
      {/* Topper Banner */}
      <div className='container'>
        <div>
          <img className='logo_image' src={logo} alt='' />
        </div>
      </div>
      <div className='container'>
        <div className='half-width_award'>
          <img className='award_image' src={award} alt='' />
        </div>
        <div className='half-width'>
          <div>
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div>
            <img src={banner} alt='' className='item' />
          </div>
          <div>
            <p>
              Government of India has awarded the{' '}
              <span className='text'>
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      {/* hero Manner */}
      <div>
        <p className='hero_banner_text'>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className='center'>
        <img src={heroBanner} alt='' className='center_image' />
      </div>
      <div>
        <p className='hero_text'>
          Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr />
      {/* Footer */}
      <div>
        <p className='hero_text'>
          <strong>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </strong>
        </p>
      </div>
      <div>
        <h5 className='hero_banner_text hero_text'>
          CHEMICALS & PROCESS
          <span className='line_color'>
            <span className='line_color'>|</span>
          </span>
          POWER <span className='line_color'>|</span> WATER & WASTE WATER
          <span className='line_color'>|</span> OILS & GAS PHARMA
          <span className='line_color'>|</span> SUGARS & DISTILLERIES
          <span className='line_color'>|</span> PAPER & PULP
          <span className='line_color'>|</span> MARINE & DEFENCE
          <span className='line_color'>|</span> METAL & MINING
          <span className='line_color'>|</span> FOOD & BEVERAGE PETROCHEMICAL &
          REFINERIES <span className='line_color'>|</span> SOLAR
          <span className='line_color'>|</span> BUILDING
          <span className='line_color'>|</span> HVAC
          <span className='line_color'>|</span> FIRE FIGHTING
          <span className='line_color'>|</span> AGRICULTURE & RESIDENTIAL
        </h5>
      </div>
      <footer className='footer_container'>
        <div>
          <p>
            <span className='material-icons'>phone</span>Toll free 1800 200 1234
          </p>
        </div>
        <div>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div>
          <p>
            <span className='material-symbols-outlined'>language</span>
            www.crigroups.com
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
