import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const SavedCandidates = () => {
  var selectedCandidates = JSON.parse(localStorage.getItem('selectedCandidate') || '{}');
  const [candidates, setCandidates] = useState(selectedCandidates);

  function deleteCandidate(i:any){
    let copy = [...candidates];
    copy = copy.filter(
      (item, index) =>  i != index
    )
    setCandidates(copy);
  }
  return (
    <>
      <h1>Potential Candidates</h1>
      <Container>
      {candidates.length == 0 ? 
        <h1>No data Available </h1>
      :
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
            { candidates.map((candidate:any, i:any) => {
              return(
                <>
                <tr key={i}>
                  <td>
                    <img src={candidate.avatar_url} alt="" className="saved-candidates-avatar"/>
                  </td>
                  <td>{candidate.login}</td>
                  <td>{candidate.login}@gmail.com</td>
                  <td>{candidate.company === undefined? 'information unavailable': candidate.company}</td>
                  <td>{candidate.bio === undefined? 'information unavailable': candidate.bio}</td>
                  <td>
                  <Button variant="danger" onClick={()=> deleteCandidate(i)}>
                    Reject
                  </Button>
                  </td>
                </tr>
                </>
              )
            })}
      
        </tbody>
      </Table>
      }
      </Container>
    </>
  );
};

export default SavedCandidates;
