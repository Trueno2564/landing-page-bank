'use client'
import React from 'react'
import BackgroundRadialRight from '../BackgroundRadialRight/BackgroundRadialRight'
import Link from 'next/link'
import MotionTransition from '../MotionTransition/MotionTransition'
import Image from 'next/image'
import Reveal from '../Reveal/Reveal'

function FirstBlock() {
    return (
        <div className='relative p-4 md:py-40'>
            <BackgroundRadialRight/>
            <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
                <div>
                    <Reveal>
                        <h1 className='text-5xl font-semibold'>
                            El nuevo 
                            <span className='block degradedBlue bg-blueLight'> Banco Digital</span>
                            para todos
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Nuestro equipo de expertos utiliza una metodología
                            para identificar las tarjetas de crédito que probablemente
                            se ajusten a sus necesidades. Examinamos tasas
                            porcentuales anuales, tarifas anuales.</p>
                    </Reveal>
                    <Reveal>
                        <div className='my-8'>
                            <Link href='#clients' className='px-4 py-3 rounded-md bg-blueRadial'>Empieza Ahora</Link>
                        </div>
                    </Reveal>
                </div>
                <div>
                    <MotionTransition className='flex items-center justify-center'>
                        <Image src='/assets/cards-block.png' alt='Cards' width={450} height={450} className='h-auto w-72 md:w-full'/>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock
