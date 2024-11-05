"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "url": url,
          "shorturl": shorturl
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("/api/generate", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            console.log(result)
            alert(result.message)
        })
          .catch((error) => console.error(error));
    }
    

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder="Enter your URL"
                    onChange={e => {seturl(e.target.value)}} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => {setshorturl(e.target.value)}} />
                <button onClick={generate} className='bg-purple-600 rounded-lg p-3 font-bold py-2 text-white my-3'>Generate</button>

                {generated && <><span className='font-bold text-lg'>Your Link</span> <code><Link target="_blank" href=
                {generated}>{generated}</Link>
                </code></>}
            </div>
        </div>
    )
}

export default Shorten