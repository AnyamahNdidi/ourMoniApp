import React from 'react'
import ima from '../Images/StoryPix.jpg'

function AboutTeamCard({nam, pos, avat}) {
    return (
        <div>
            <div style={{
                height:"150px"}}>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"95px",
                    backgroundColor:"gray",
                    width:"95px",
                    borderRadius:"100%"
                }}><img src={avat} alt="Team" style={{
                    height:"100%",
                    width:"100%",
                    borderRadius:"100%",
                    objectFit:"cover", 
                }}/></div>
                <div style={{fontWeight:"bolder"}}>{nam}</div>
                <div>{pos}</div>
                <div style={{
                    width:"14px",
                    border:"1px solid grey"
                }}></div>
            </div>
        </div>
    )
}

export default AboutTeamCard
