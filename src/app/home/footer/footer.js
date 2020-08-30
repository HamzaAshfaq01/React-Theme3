import React from "react"
import{Data} from "./footerData.js"

class Footer extends React.Component
{
    state={
        Data:Data,
    }
    render() {
        let response=this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="footer">
                    <div>
                        <h1>{obj.heading1}</h1>
                    </div>
                    <div>
                        <p>{obj.para1}</p>
                    </div>
                    <div>
                        <button>{obj.button}</button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {response}
            </div>
        )
    }
}

export  default Footer