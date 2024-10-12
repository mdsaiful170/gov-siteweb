import React from 'react'
import { Container } from '../compobox/Container'
import { Soluationheader } from '../compobox/Soluationheader'
import { solutionCard } from '../../../lib/db/datadb'
import { Solution } from '../../share/Solution'

const Solutioncard = () => {
  return (
    <>
       <section className='xl:pt-32 lg:pt-28 md:pt-20 pt-1 '>
        <Container >
            <Soluationheader />

           <div className='grid place-items-center place-content-center  gap-5 lg:gap-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
           {
                solutionCard.map((res,i)=>(
                    <Solution key={i} {...res} />
                ))
            }
           </div>
        </Container>
       </section>
    </>
  )
}

export default Solutioncard
