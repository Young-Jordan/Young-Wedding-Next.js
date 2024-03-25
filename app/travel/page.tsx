import React from 'react'

export default function Travel() {
  return (
    <section className="flex min-h-screen flex-col items-center text-center justify-center p-24">
      <div className='flex flex-col mb-8 items-center'>
      <h2 className='mb-2 font-sans'>Nearest Airports</h2>
        <p>Newark Liberty Airport EWR</p>
        <p>LaGuardia Airport LGA</p>
        <p>John.F Kennedy Aiport JFK</p>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='mb-2 font-sans'>Hotels</h2>
        <p>Hotel Information Coming Soon</p>
      </div>
    </section>
  )
}
