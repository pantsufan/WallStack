import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
function Results({results}) {

    return (

        <section> {
            results.map(results => (
                <Container key={
                        results.id
                    }
                    className='holder text-center p-2'>

                    <a href={
                            results.largeImageURL
                        }
                        download
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image className='rounded' height="512" fluid
                            src={
                                results.largeImageURL
                            }/>
                    </a>

                    <br/>
                    <br/>
                    <p className='text-center'>
                        <span className='text-danger'> ❤ </span>
                        {
                        results.favorites
                    }
                        <span className='text-primary'> ⬇️ </span>
                        {
                        results.downloads
                    } </p>

                </Container>
            ))
        } </section>
    )
}
export default Results
