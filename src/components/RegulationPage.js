import React from 'react'

function RegulationPage() {
  return (
    <div>
        <div className='relugation_page'>
            <div className='relugation_page_box'>
                <div className='relugation_upper'>
                    <h2>Regulation <i class="bi bi-clock-history"></i></h2>
                    <i class="bi bi-x-square close-btn"></i>
                </div>
                <div className='relugation_form'>
                    <div className='session'>
                        <label>Session Time (In Minutes)</label>
                        <input type='text'
                        max={59}
                        min={0}
                        step={1} 
                        maxLength={2} 
                        minLength={0}
                        required
                        placeholder='Eg. 30' />
                    </div>

                    <div className='break'>
                        <label>Break Time (In Minutes)</label>
                        <input type='text'
                        max={59}
                        min={0}
                        step={1} 
                        maxLength={2} 
                        minLength={0}
                        required
                        placeholder='Eg. 5' />
                    </div>

                    <div className='form-btn'>
                        <button>Apply</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default RegulationPage