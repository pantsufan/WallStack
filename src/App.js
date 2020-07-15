import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Results from './components/Results'

function App() {
    const [state, setState] = useState({s: '', results: [], selected: {}});

    const apiurl = 'https://pixabay.com/api/?key=17485016-5dc08350ad68c3777ed8ebc8b';


    const search = (e) => {
        if (e.key === 'Enter') {
            axios(apiurl + '&q=' + state.s + '&image_type=photo&per_page=50').then(({data}) => {
                let results = data.hits;
                setState(preState => {
                    return {
                        ...preState,
                        results: results
                    }
                })
            })
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;
        setState(preState => {
            return {
                ...preState,
                s: s
            }
        })
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 className='display-3 text-center p-4 text-primary'>Wall Stack
                </h1>

                <p className='text-center'>Made with
                  <span className='text-danger'> ❤ </span>
                  by Kninja</p>
                <br/>
            </header>
            <main>
                <Search handleInput={handleInput}
                    search={search}/>
                <br/>
                <Results results={
                    state.results
                }/>
                <br/>

            </main>
        </div>
    );
}

export default App;
