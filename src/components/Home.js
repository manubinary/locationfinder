import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';
import {Row, Col} from 'react-bootstrap';

function Home(props) {
  const [postcode, setPostcode] = useState(props.match.params.postcode);
  const [validated, setValidate ] = useState('');
  const [postcodeInfo, setPostcodeInfo ] = useState({});
  const [postcodeInfoNearset, setpostcodeInfoNearset ] = useState({});

  useEffect(()=> {
    if(props.match.params.postcode !== undefined) {
      setPostcode(props.match.params.postcode);
      updatePostCode(props.match.params.postcode);
    }
  }, [postcode]);

  const getPostCodeInfo = (postcode) => {
    fetch('http://api.postcodes.io/postcodes/' + postcode)
      .then((response) => response.json())
      .then((responseJson) => {
          setPostcodeInfo(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch('http://api.postcodes.io/postcodes/' + postcode + '/nearest/')
      .then((response) => response.json())
      .then((responseJson) => {
          setpostcodeInfoNearset(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updatePostCode = (postcode) => {
    let postcodeRegEx = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/gm;
    setValidate('');
    if (postcode.length >= 6 && postcode.length <=8) {
      if (postcodeRegEx.test(postcode)) {
        setValidate(true);
        setPostcode(postcode);
        getPostCodeInfo(postcode);
        return true;
      } else {
        setValidate(false);
        return false;
      }
    } else if (postcode.length > 8) {
      setValidate(false);
      return false;
    }
  }

  const getPostCodeDetails = () => {
    return (
      <Row key={Math.random}>
        <Col md={4} className="detailsContainer details">
          <div><h3>Details</h3></div>
          <div>Country : {postcodeInfo.result.country}</div>
          <div>Region : {postcodeInfo.result.region}</div>
        </Col>
        <Col md={7} className="detailsContainer">
          <div><h3>Nearest Locations</h3></div>
            <Row className="elementContainer">
              <Col md={4} className="elementElement">Postcode</Col>
              <Col md={4} className="element">Country</Col>
              <Col md={4}>Region</Col>
            </Row>
            {getNearestLocationList()}
        </Col>
      </Row>
    );
  }

  const getNearestLocationList = () => {
    const list = [];
    if (Object.keys(postcodeInfoNearset).length > 0) {
        postcodeInfoNearset.result.forEach((eachLocation) => {
          if (eachLocation.postcode !== postcodeInfo.result.postcode) {
            list.push(<Row className="elementContainer">
              <Col md={4} className="element">{eachLocation.postcode}</Col>
              <Col md={4} className="element">{eachLocation.country}</Col>
              <Col md={4}>{eachLocation.region}</Col>
            </Row>)
          }
        });
    }
    return(<div className="nearestDetailsContainer">{list}</div>);
  };

  return(
    <div className="mainHome">
      <Row className="mainHeader">
        <Col className="header">
          <h1>Location Finder</h1>
        </Col>
      </Row>
      <div className="mainContent">
        <Row className="contentList" >
          <Col md={3}/>
          <Col md={2} className="labelContainer">Enter Post Code: </Col>
          <Col md={4} className="inputContainer">
            <input type="text" name="postcode" onChange={(event)=> updatePostCode(event.target.value)} defaultValue={postcode}/>
            {validated === true && <span className='validate valid'>Valid</span>}
            {validated === false && <span className='validate invalid'>Invalid</span>}
          </Col>
          <Col md={3}/>
        </Row>
        {(validated === true && Object.keys(postcodeInfo).length > 0 && Object.keys(postcodeInfoNearset).length > 0 ) && getPostCodeDetails()}
      </div>
    </div>
  )
}

export default Home;
