import Head from 'next/head'
import React from 'react'

function Meta({ title, description, keywords }) {
    return (

        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <title>{title}</title>
            
        </Head>

    )
}
Meta.defaultProps = {
    title:'Learning Next',
    description:'Learning Next made easy and fun',
    keywords:'Next js, learning next'
}
export default Meta