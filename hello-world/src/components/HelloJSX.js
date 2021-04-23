import React from 'react'

 const Hello =()=>{
    // return(                                      //Using JSX
    //     <div>
    //         <h1 className='dummyclass'>Hello Prem!</h1>
    //     </div>
    // )

    return React.createElement(            //Without using JSX(pure HTML)
        'div',
        {id:1, className:'dummy'},
        React.createElement('h1',null,'Hello Prem! I am Back')
    )

    // return React.createElement(            //Without using JSX(pure HTML)
    //     'div',
    //     {id:2, className:'dummy1'},
    //     'h1 hello prem'
    // )
}

export default Hello