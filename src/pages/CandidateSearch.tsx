import { useState, useEffect, useRef } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidates } from '../interfaces/CandidateInterface';
import CandidateCards from '../components/CandidateCards';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidates[]>([]);;
  const [index, setIndex] = useState(0);
  const [arrayCandidates, setArrayCandidates] = useState<any>([]);
  // const navigate = useNavigate();
  useEffect( () => {
    getData();
  }, [])

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };
  const ref = useRef<any>(null);

  const onPrevClick = () => {
    ref.current?.next();
  };
  const onNextClick = (selectedData: any) => {
    alert('Added to Potential Candidates!');
    ref.current?.next();
    setArrayCandidates([...arrayCandidates, selectedData]);
  };

  async function getData(){
    const data = await searchGithub();
    let finalData = data.map((cands: Candidates) => {
      return {
        avatar_url: cands.avatar_url,
        html_url: cands.html_url,
        login: cands.login,
        location: cands.location,
        email: cands.email,
        company: cands.company,
        bio: cands.bio
      }
    })
    setCandidates(finalData);
  }
  // console.log(arrayCandidates);
  localStorage.setItem('selectedCandidate', JSON.stringify(arrayCandidates));
  return (
    <div>
      <h1>Candidate Search</h1>
      <Carousel ref={ref} activeIndex={index} onSelect={handleSelect} indicators={false}  controls={false}>
 
        {candidates.map((candidate, i) => {
          return(
            <Carousel.Item key={i}>
              <CandidateCards props={candidate}/>
              <Button variant="primary" onClick={onPrevClick}>
                  -
                </Button>
                <Button variant="primary" onClick={() => onNextClick(candidate)}>
                  +
                </Button>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
};

export default CandidateSearch;
