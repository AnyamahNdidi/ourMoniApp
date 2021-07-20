import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Apicon() {
  const [fetchDatat, setFetchDate] = useState([])


  const getData = async () => {
    const res = await axios.get("https://etohardex.herokuapp.com/api")
    console.log(res)
    if (res) {
      return setFetchDate(res.data.data)
    }

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      uiioj;kvl'sd



      uikj;flvuisdbjkop
      ionm;'fldvp[jokl'
      {
        fetchDatat.map(({ _id, task }) => (


          <div key={_id}>
            {_id}

            JLSKV;
          </div>


        ))

      }

    </div>
  )
}

export default Apicon


const Button = styled.div`
  display: flex;
  height: 20px;
  width: 90%;
  margin-bottom: 10px;
  justify-content: space-between;
`;


const ColorMap = styled.div`
width: 100 %;
height: 120px;

border - radius: 10px 10px 0px 0;
`;

const Container = styled.div`
width: 100 %;
justify-content: center;
display: flex;
background-color: red;
flex - wrap: wrap;

`;
const Wrapper = styled.div`
width: 200px;
height: 250px;
background - color: lavender;
border - radius: 10px 10px 0px 0;
border - radius: 10px 10px 0px 0;
margin: 20px;
display: flex;
flex - direction: column;
align - items: center;
/* justify-content: center; */
box - shadow: rgb(0 0 0 / 29 %) 0px 16px 10px - 7px;
`;
