import React from 'react'
import Social from './Social'

function Footer() {
  return (
    <div>
        <footer>
            <Social />
            <div className='footer_section'>
                <p>Built with React. <span>© by Samet ALTUNDAG</span></p>
            </div>
        </footer>            
    </div>
  )
}

export default Footer