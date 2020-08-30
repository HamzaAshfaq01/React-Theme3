import React from "react"
import {Data} from "../personalDetail/personaldetaildata.js"

class PersonalDetail extends React.Component
{
    state={
        Data:Data,
    }
    render()
    {
        let response =this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="profileDiv">
                    <div>
                        <img src={obj.pic} alt=""/>
                    </div>
                    <div>
                        <img src={obj.pic2} alt=""/>
                    </div>
                    <div>
                        <button className="downloadResume">{obj.downloadResume}</button>
                        <button className="contactMe">{obj.contact}</button>
                    </div>
                </div>
            )
        })
        return(
        <div>{response}</div>
        )
    }
}

export default PersonalDetail