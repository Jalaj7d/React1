import React, {useState} from 'react'

export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'})

    let mystyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#3c4c99':'white',
        // border: '1px solid',
        // borderColor: props.mode === 'dark'?'white':'black'
    }
    
    // const [btntext, setbtntext] = useState("Enable Dark mode")

    // const toggleStyle = ()=>{
    //     if(mystyle.color === 'black'){
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtntext("Enable light Mode")
    //     }
    //     else{
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    // }

  return (
    <div className = "container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion my-3" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>About Code with Harry</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Code with harry is very good guy and he teaches me react through his yt channel.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>About Jalaj</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Jalaj is learning React with the help of Code with harry yt channel.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>About React</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                React is a frontend language which is used to create the website.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
