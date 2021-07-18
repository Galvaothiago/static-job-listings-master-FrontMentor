import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Filter } from './components/Filter';
import { Dashboard, Container, HeaderContainer } from './StyleApp';

import datas from './data.json'

export default function App() {
  const [ jobs, setJobs ] = useState(datas)
  const [ filter, setFilter ] = useState(false)
  const [ tagFilter, setTagFilter ] = useState([])

  useEffect(() => {
    filterJobsThroughTagsfilter()

  },[ tagFilter ])

  const filterJobsThroughTagsfilter = () => {
    
    const jobsFiltered = jobs.filter( job => {
    let countTagsMatch = 0
    const allLanguages = [...job.languages, ...job.tools]

    for( var i = 0; i < tagFilter.length; i++) {
      allLanguages.forEach( language => {
        if(String(language) === String(tagFilter[i])) {
          countTagsMatch++
        }
      })
    }

    if(countTagsMatch === tagFilter.length) {
      return job
    }

    })

    setJobs(jobsFiltered)
  }

  const createItemIntoFilter = (text) => {
    const verifyIfAlreadyClicked = currentTag => currentTag !== text
    const wasAlreadyClicked = tagFilter.every(verifyIfAlreadyClicked)

    if(wasAlreadyClicked) {
      setFilter(true)
      setTagFilter( oldItem => [...oldItem, text])
    }
  }

  const removeItemIntoFilter = (text) => {
    const itemFiltered = tagFilter.filter( item => item !== text )
    setTagFilter(itemFiltered)
    setJobs(datas)

  }

  const cleanTagsFilter = () => {
    setTagFilter([])
    setJobs(datas)

    setTimeout(() => {
      setFilter(false)
    },1000)
  }

  return (
    <Container>
      <HeaderContainer>
        { filter &&  <Filter onClean={cleanTagsFilter} onRemove={removeItemIntoFilter} tags={tagFilter}/>}
      </HeaderContainer>
      <Dashboard>
        { jobs.map( dataJob => <Card key={dataJob.id} onCreate={createItemIntoFilter} data={dataJob}/> )}
      </Dashboard>
    </Container>
  );
}



